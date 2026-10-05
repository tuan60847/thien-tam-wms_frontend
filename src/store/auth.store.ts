import { create } from "zustand";
import { AuthUser } from "@/models/auth.model";
import { tokenStorage } from "@/lib/token";

interface AuthState {
  user: AuthUser | null;
  setUser: (u: AuthUser | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => {
    tokenStorage.clear();
    set({ user: null });
    window.location.href = "/login";
  },
}));