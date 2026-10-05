import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-text-btn-hide">{label}</label>}
      <input
        className={clsx(
          "rounded-lg border px-3 py-2 outline-none focus:border-primary",
          error ? "border-error" : "border-btn-hide",
          className
        )}
        {...rest}
      />
      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
}