import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  iconClassName?: string;
  onIconClick?: () => void; // dùng cho nút hiện/ẩn mật khẩu, nút xóa...
}

export function Input({
  label,
  error,
  icon,
  iconPosition = "left",
  iconClassName,
  onIconClick,
  className,
  id,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-text-btn-hide">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span
            onClick={onIconClick}
            className={clsx(
              "absolute top-1/2 -translate-y-1/2 flex items-center justify-center",
              "h-5 w-5 [&>svg]:h-full [&>svg]:w-full",
              iconPosition === "left" ? "left-3" : "right-3",
              error ? "text-error" : "text-text-btn-hide",
              "peer-focus:text-primary",
              onIconClick ? "cursor-pointer hover:text-primary" : "pointer-events-none",
              iconClassName
            )}
          >
            {icon}
          </span>
        )}

        <input
          id={id}
          className={clsx(
            "peer w-full rounded-lg border px-3 py-2 outline-none focus:border-primary",
            icon && iconPosition === "left" && "pl-10",
            icon && iconPosition === "right" && "pr-10",
            error ? "border-error" : "border-btn-hide",
            className
          )}
          {...rest}
        />
      </div>

      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
}