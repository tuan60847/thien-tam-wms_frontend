"use client";

import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "@/components/ui/Input"; // sửa lại đường dẫn đúng với file Input của bạn

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  showLockIcon?: boolean; // bật/tắt icon khóa bên trái
}

export function PasswordInput({
  label = "Mật khẩu",
  showLockIcon = true,
  placeholder = "Nhập mật khẩu",
  ...rest
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        label={label}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        autoComplete="current-password"
        className={showLockIcon ? "pl-10 pr-10" : "pr-10"}
        {...rest}
      />

      {showLockIcon && (

        <Lock className="pointer-events-none absolute left-3 bottom-[11px] h-5 w-5 text-text-btn-hide" />
      )}

      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        aria-label={show ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
        className="absolute right-3 bottom-[11px] h-5 w-5 text-text-btn-hide hover:text-primary"
      >
        {show ? <EyeOff className="h-full w-full" /> : <Eye className="h-full w-full" />}
      </button>
    </div>
  );
}