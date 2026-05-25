// components/ui/Input.jsx

import clsx from "clsx";

const variants = {
  default: `
    border-[var(--color-border)]
    bg-[var(--color-surface)]
  `,

  error: `
    border-[var(--color-danger)]
    bg-[var(--color-surface)]
  `,
};

const sizes = {
  sm: "h-10 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-14 px-5 text-base",
};

export default function Input({
  label,
  helperText,
  error,
  icon: Icon,

  size = "md",

  className,
  containerClassName,

  ...props
}) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col gap-2",
        containerClassName
      )}
    >

      {/* LABEL */}
      {label && (
        <label
          className="
            text-sm
            font-medium
            text-[var(--color-text)]
          "
        >
          {label}
        </label>
      )}

      {/* INPUT WRAPPER */}
      <div className="relative">

        {/* ICON */}
        {Icon && (
          <div
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[var(--color-text-muted)]
            "
          >
            <Icon className="h-5 w-5" />
          </div>
        )}

        {/* INPUT */}
        <input
          className={clsx(
            `
            w-full

            rounded-[var(--radius-md)]
            border

            text-[var(--color-text)]
            placeholder:text-[var(--color-text-muted)]

            outline-none

            transition-all
            duration-200

            focus:border-[var(--color-primary)]
            focus:ring-2
            focus:ring-[var(--color-primary)]/20

            disabled:cursor-not-allowed
            disabled:opacity-50
            `,

            variants[error ? "error" : "default"],

            sizes[size],

            Icon && "pl-12",

            className
          )}
          {...props}
        />

      </div>

      {/* HELPER / ERROR */}
      {(helperText || error) && (
        <p
          className={clsx(
            "text-xs",

            error
              ? "text-[var(--color-danger)]"
              : "text-[var(--color-text-muted)]"
          )}
        >
          {error || helperText}
        </p>
      )}

    </div>
  );
}