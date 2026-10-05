export interface LoginPayload { username: string; password: string }
export interface AuthUser {
  id: number; maNV: string; hoTen: string; email: string;
  role: { id: number; tenROLE: string; maROLE: string };
}
export interface LoginResponse { accessToken: string; user: AuthUser }