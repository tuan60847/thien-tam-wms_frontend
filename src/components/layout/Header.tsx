"use client";
import { Bell, PlusCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useHeaderViewModel } from "@/viewmodels/useHeaderViewModel";

export default function Header() {
  const vm = useHeaderViewModel();

  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-btn-hide/40 bg-white px-6">
      {/* Tìm kiếm */}
      <div className="relative w-full max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-btn-hide" />
        <input
          value={vm.keyword}
          onChange={(e) => vm.setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && vm.submitSearch()}
          placeholder="Tìm mã lô (LOT), tên dược phẩm, vị trí kho..."
          className="w-full rounded-lg border border-btn-hide/50 bg-gray-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        {/* Kho đang làm việc */}
        <div className="flex items-center gap-2 rounded-full border border-btn-hide/50 px-3 py-1.5 text-sm text-text-btn-hide">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          {vm.warehouseName}
        </div>

        <Button onClick={vm.createVoucher} className="inline-flex items-center gap-2 text-sm">
          <PlusCircle size={16} />
          Tạo Phiếu Kho
        </Button>

        {/* Thông báo */}
        <button className="relative text-text-btn-hide hover:text-primary" title="Thông báo">
          <Bell size={20} />
          {vm.hasNotification && (
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-error" />
          )}
        </button>

        {/* Giờ */}
        <div className="border-l border-btn-hide/50 pl-4 text-right leading-tight">
          <p className="text-sm font-bold text-black-primary">{vm.time}</p>
          <p className="text-[11px] text-text-btn-hide">{vm.date}</p>
        </div>
      </div>
    </header>
  );
}