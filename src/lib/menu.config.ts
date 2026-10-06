import {
  LayoutGrid, SlidersHorizontal, Layers, ArrowDown, ArrowUp,
  Handshake, Warehouse, CreditCard,
} from "lucide-react";
import { NavItem } from "@/models/navigation.model";

export const MENU_ITEMS: NavItem[] = [
  { label: "Tổng Quan (Dashboard)", href: "/dashboard", icon: LayoutGrid },
  { label: "Sản Phẩm & Thuốc", href: "/hang-hoa", icon: SlidersHorizontal },
  { label: "Tồn Kho & Lô Hàng", href: "/ton-kho", icon: Layers },
  { label: "Quản Lý Nhập Kho", href: "/nhap-kho", icon: ArrowDown },
  { label: "Quản Lý Xuất Kho", href: "/xuat-kho", icon: ArrowUp },
  { label: "Quản Lý Đối Tác", href: "/doi-tac", icon: Handshake },
  { label: "Kho & Vị Trí GSP", href: "/kho-vi-tri", icon: Warehouse },
  { label: "Công Nợ & Tài Chính", href: "/cong-no", icon: CreditCard },
];