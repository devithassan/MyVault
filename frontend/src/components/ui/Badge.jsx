// components/ui/Badge.jsx

import clsx from "clsx";

const variants = {
  primary: `
    bg-[var(--color-primary-soft)]
    text-[var(--color-primary)]
    border
    border-[var(--color-primary-border)]
  `,

  success: `
    bg-[var(--color-success-soft)]
    text-[var(--color-success)]
    border
    border-[var(--color-success-border)]
  `,

  warning: `
    bg-[var(--color-warning-soft)]
    text-[var(--color-warning)]
    border
    border-[var(--color-warning-border)]
  `,

  danger: `
    bg-[var(--color-danger-soft)]
    text-[var(--color-danger)]
    border
    border-[var(--color-danger-border)]
  `,

  neutral: `
    bg-[var(--color-surface)]
    text-[var(--color-text-muted)]
    border
    border-[var(--color-border)]
  `,
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-sm",
};

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className,
}) {
  return (
    <span
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        rounded-full
        font-medium
        whitespace-nowrap
        transition-colors
        `,

        variants[variant],

        sizes[size],

        className
      )}
    >
      {children}
    </span>
  );
}