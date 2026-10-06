import { ReactNode } from "react";
import MainLayoutView from "@/views/MainLayoutView";

export default function Layout({ children }: { children: ReactNode }) {
  return <MainLayoutView>{children}</MainLayoutView>;
}