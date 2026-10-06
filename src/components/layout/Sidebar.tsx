"use client";

import Link from "next/link";
import clsx from "clsx";
import { Box, LogOut, Snowflake } from "lucide-react";
import { useSidebarViewModel } from "@/viewmodels/useSidebarViewModel";

export default function Sidebar() {
    const vm = useSidebarViewModel();

    return (
        <aside className="flex h-screen w-56 shrink-0 flex-col bg-black-primary text-btn-hide">
            {/* Logo */}
            <div className="flex items-center gap-3 px-4 py-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <img
                        src="/public/logo.svg"
                        alt="ThienTam WMS"
                        className="h-6 w-6"
                    />
                </div>
                <div className="leading-tight">
                    <p className="font-bold text-text-btn-selected">ThienTam WMS</p>
                    <p className="text-[11px]">Kho & Phân Phối Dược Phẩm</p>
                </div>
            </div>

            {/* Menu */}
            <p className="px-5 pb-2 pt-3 text-[11px] font-semibold uppercase tracking-wider text-text-btn-hide">
                Hệ thống nghiệp vụ
            </p>
            <nav className="flex-1 space-y-1 overflow-y-auto px-3">
                {vm.items.map(({ label, href, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={clsx(
                            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                            vm.isActive(href)
                                ? "bg-primary text-text-btn-selected"
                                : "hover:bg-white/10 hover:text-text-btn-selected"
                        )}
                    >
                        <Icon size={18} />
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Trạng thái kho lạnh */}
            <div className="mx-3 mb-3 rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center gap-2 text-sm font-medium text-text-btn-selected">
                    <Snowflake size={16} className="text-cyan-300" />
                    Kho Lạnh & Cấp Đông
                </div>
                <p className="mt-1 text-xs">
                    {vm.coldStorage.zone}:{" "}
                    <span className="font-semibold text-cyan-300">{vm.coldStorage.temperature}°C</span>{" "}
                    ({vm.coldStorage.stable ? "Ổn định" : "Cảnh báo"})
                </p>
            </div>

            {/* User */}
            <div className="flex items-center gap-3 border-t border-white/10 px-4 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-text-btn-selected">
                    {vm.profile.initials}
                </div>
                <div className="min-w-0 flex-1 leading-tight">
                    <p className="truncate text-sm font-semibold text-text-btn-selected">{vm.profile.name}</p>
                    <p className="truncate text-[11px]">{vm.profile.role}</p>
                </div>
                <button onClick={vm.logout} title="Đăng xuất" className="hover:text-text-btn-selected">
                    <LogOut size={18} />
                </button>
            </div>
        </aside>
    );
}