// src/services/api/client.ts

import { CONFIG } from "@/constants/config";
import { authPersistence } from "@/features/auth/auth.persistence";
import { refreshSession } from "@/features/auth/auth.refresh";
import axios from "axios";


export const api = axios.create({
  baseURL: CONFIG.API_URL,
  timeout: 15000,
});


api.interceptors.request.use(
  async (config) => {
 
    const token = await authPersistence.getAccessToken();

    if (token) {

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest?._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken =
          await authPersistence.getRefreshToken();

        if (!refreshToken)
          throw new Error("No refresh token");

        const data = await refreshSession(refreshToken);

        const newAccessToken = data?.accessToken;

        if (!newAccessToken)
          throw new Error("No new token");

        await authPersistence.setAccessToken(
          newAccessToken
        );


        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };

        return api(originalRequest);
      } catch (err) {
        await authPersistence.clearAll();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

