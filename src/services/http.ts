import axios from "axios";
import { API_URL } from "@/lib/constants";
import { tokenStorage } from "@/lib/token";

export const http = axios.create({ baseURL: API_URL, timeout: 15000 });

http.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && typeof window !== "undefined") {
      tokenStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);