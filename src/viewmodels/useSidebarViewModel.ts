"use client";
import { usePathname } from "next/navigation";
import { MENU_ITEMS } from "@/lib/menu.config";
import { useAuthStore } from "@/store/auth.store";
import { ColdStorageStatus } from "@/models/navigation.model";

function getInitials(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function useSidebarViewModel() {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const fullName = user?.hoTen ?? "Người dùng";

  // TODO: thay bằng dữ liệu thật từ API cảm biến kho lạnh
  const coldStorage: ColdStorageStatus = { zone: "Khu A", temperature: -20.4, stable: true };

  return {
    items: MENU_ITEMS,
    isActive,
    logout,
    coldStorage,
    profile: {
      name: fullName,
      role: user?.role?.tenROLE ?? "",
      initials: getInitials(fullName),
    },
  };
}