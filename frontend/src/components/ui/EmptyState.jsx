// components/ui/EmptyState.jsx

import clsx from "clsx";

const variants = {
  default: `
    border-[var(--color-border)]
    bg-[var(--color-card)]
  `,

  dashed: `
    border-dashed
    border-[var(--color-border)]
    bg-[var(--color-surface)]
  `,

  subtle: `
    border-transparent
    bg-[var(--color-surface)]
  `,
};

const sizes = {
  sm: "p-8",
  md: "p-12",
  lg: "p-16",
};

export default function EmptyState({
  icon: Icon,
  title,
  description,
  action,

  variant = "dashed",
  size = "md",

  className,
}) {
  return (
    <div
      className={clsx(
        `
        flex
        flex-col
        items-center
        justify-center

        rounded-[var(--radius-xl)]
        border

        text-center
        `,

        variants[variant],

        sizes[size],

        className
      )}
    >

      {/* ICON */}
      {Icon && (
        <div
          className="
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center

            rounded-2xl

            bg-[var(--color-surface)]

            text-[var(--color-text-muted)]
          "
        >
          <Icon className="h-8 w-8" />
        </div>
      )}

      {/* TITLE */}
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      {/* DESCRIPTION */}
      {description && (
        <p
          className="
            mt-3
            max-w-md
            text-sm
            leading-relaxed
            text-[var(--color-text-muted)]
          "
        >
          {description}
        </p>
      )}

      {/* ACTION */}
      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}

    </div>
  );
}