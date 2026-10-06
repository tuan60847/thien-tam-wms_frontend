"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useHangHoaViewModel } from "@/viewmodels/useHangHoaViewModel";

export default function HangHoaView() {
  const vm = useHangHoaViewModel();

  if (vm.loading) return <p className="p-6">Đang tải...</p>;
  if (vm.error) return <p className="p-6 text-error">{vm.error}</p>;

  return (
    <div className="space-y-4 p-6">
      <div className="flex items-end justify-between">
        <h1 className="text-xl font-bold text-primary">Danh sách hàng hóa</h1>
        <Input placeholder="Tìm theo tên..." value={vm.keyword} onChange={(e) => vm.setKeyword(e.target.value)} />
      </div>
      <table className="w-full border text-left text-sm">
        <thead className="bg-primary text-text-btn-selected">
          <tr><th className="p-2">Tên SP</th><th className="p-2">Quy cách</th>
              <th className="p-2">Giá nhập</th><th className="p-2">Giá hiển thị</th><th className="p-2" /></tr>
        </thead>
        <tbody>
          {vm.items.map((x) => (
            <tr key={x.id} className="border-t">
              <td className="p-2">{x.tenSP}</td>
              <td className="p-2">{x.quyCach}</td>
              <td className="p-2">{x.giaNhap.toLocaleString("vi-VN")}</td>
              <td className="p-2">{x.giaHienThi.toLocaleString("vi-VN")}</td>
              <td className="p-2 text-right">
                <Button variant="hide" onClick={() => vm.remove(x.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}