// components/ui/Button.jsx

import clsx from "clsx";

const variants = {
  primary: `
    bg-[var(--color-primary)]
    text-white
    hover:bg-[var(--color-primary-hover)]
    shadow-sm
  `,

  secondary: `
    bg-[var(--color-surface)]
    text-[var(--color-text)]
    border
    border-[var(--color-border)]
    hover:bg-[var(--color-surface-hover)]
  `,

  outline: `
    bg-transparent
    text-[var(--color-text)]
    border
    border-[var(--color-border)]
    hover:bg-[var(--color-surface)]
  `,

  ghost: `
    bg-transparent
    text-[var(--color-text-muted)]
    hover:bg-[var(--color-surface)]
    hover:text-[var(--color-text)]
  `,

  danger: `
    bg-[var(--color-danger)]
    text-white
    hover:opacity-90
  `,
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-8 text-base",
  xl: "h-16 px-10 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-[var(--radius-md)]

        font-medium
        whitespace-nowrap

        transition-all
        duration-200

        focus:outline-none
        focus:ring-2
        focus:ring-[var(--color-primary)]

        disabled:pointer-events-none
        disabled:opacity-50
        `,

        variants[variant],

        sizes[size],

        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}