"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useHeaderViewModel() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [now, setNow] = useState<Date | null>(null);

  // set trong useEffect để tránh lệch hydration giữa server và client
  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  const time = now
    ? now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
    : "";
  const date = now
    ? `Hôm nay, ${now.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })}`
    : "";

  const submitSearch = () => {
    const k = keyword.trim();
    if (k) router.push(`/ton-kho?keyword=${encodeURIComponent(k)}`);
  };

  const createVoucher = () => router.push("/nhap-kho/tao-moi");

  return {
    keyword, setKeyword, submitSearch, createVoucher,
    time, date,
    warehouseName: "Kho Trung Tâm Q9 (GSP)", // TODO: lấy từ API / store chọn kho
    hasNotification: true,
  };
}