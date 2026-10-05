import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "hide";
  loading?: boolean;
}

export function Button({ variant = "primary", loading, className, children, disabled, ...rest }: Props) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "rounded-lg px-4 py-2 font-medium transition disabled:opacity-60",
        variant === "primary" && "bg-primary text-text-btn-selected hover:opacity-90",
        variant === "hide" && "bg-btn-hide text-text-btn-hide",
        className
      )}
      {...rest}
    >
      {loading ? "Đang xử lý..." : children}
    </button>
  );
}