import { http } from "./http";
import { LoginPayload, LoginResponse } from "@/models/auth.model";

export const authService = {
  login: async (p: LoginPayload) =>
    (await http.post<LoginResponse>("/auth/login", p)).data,
};