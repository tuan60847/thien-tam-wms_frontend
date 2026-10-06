import clsx from "clsx";
import { SelectHTMLAttributes } from "react";

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export function Select({
  label,
  error,
  options,
  placeholder,
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
      <select
        id={id}
        className={clsx(
          "rounded-lg border bg-white px-3 py-2 outline-none focus:border-primary",
          error ? "border-error" : "border-btn-hide",
          className
        )}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
}