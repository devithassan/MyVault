// src/services/api/client.ts

import axios from "axios";
import * as SecureStore from "expo-secure-store";

const API_URL = "http://192.168.1.4:5000/api"; // later replace with prod URL

export const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
});

api.interceptors.request.use(
    
  async (config) => {
    const token = await SecureStore.getItemAsync("accessToken");

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

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // later we will add refresh token logic here
    }

    return Promise.reject(error);
  }
);