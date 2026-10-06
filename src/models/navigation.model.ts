import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ColdStorageStatus {
  zone: string;
  temperature: number;
  stable: boolean;
}