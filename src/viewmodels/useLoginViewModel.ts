"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";
import { tokenStorage } from "@/lib/token";
import { useAuthStore } from "@/store/auth.store";

export function useLoginViewModel() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    if (!username || !password) return setError("Vui lòng nhập đầy đủ thông tin");
    setLoading(true);
    setError(null);
    try {
      const res = await authService.login({ username, password });
      tokenStorage.set(res.accessToken);
      setUser(res.user);
      router.replace("/hang-hoa");
    } catch (e: any) {
      setError(e.response?.data?.message ?? "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  return { username, setUsername, password, setPassword, loading, error, submit };
}