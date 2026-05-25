// components/ui/Card.jsx

import clsx from "clsx";

const variants = {
  default: `
    bg-[var(--color-card)]
    border
    border-[var(--color-border)]
  `,

  surface: `
    bg-[var(--color-surface)]
    border
    border-[var(--color-border)]
  `,

  glass: `
    bg-white/5
    backdrop-blur-xl
    border
    border-white/10
  `,

  highlighted: `
    bg-[var(--color-card)]
    border
    border-[var(--color-primary)]
    shadow-lg
    scale-[1.02]
  `,
};

export default function Card({
  children,
  className,
  variant = "default",
  hover = false,
  padding = "md",
}) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={clsx(
        `
        rounded-[var(--radius-lg)]
        shadow-sm
        transition-all
        duration-300
        `,

        variants[variant],

        paddings[padding],

        hover &&
          `
          hover:-translate-y-1
          hover:shadow-xl
          `,

        className
      )}
    >
      {children}
    </div>
  );
}