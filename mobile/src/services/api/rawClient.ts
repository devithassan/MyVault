import { CONFIG } from "@/constants/config";
import axios from "axios";

/**
 * PURE AXIOS INSTANCE
 * NO interceptors
 * NO auth logic
 * SAFE for refresh calls
 */
export const rawApi = axios.create({
  baseURL: CONFIG.API_URL,
  timeout: 15000,
});