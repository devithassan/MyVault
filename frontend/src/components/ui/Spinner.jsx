// components/ui/Spinner.jsx

import clsx from "clsx";

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-10 w-10 border-[3px]",
  xl: "h-14 w-14 border-4",
};

const variants = {
  primary: `
    border-[var(--color-primary)]/20
    border-t-[var(--color-primary)]
  `,

  white: `
    border-white/20
    border-t-white
  `,

  muted: `
    border-[var(--color-border)]
    border-t-[var(--color-text-muted)]
  `,
};

export default function Spinner({
  size = "md",
  variant = "primary",
  label,
  center = false,
  fullscreen = false,
  className,
}) {
  const spinner = (
    <div
      className={clsx(
        `
        animate-spin
        rounded-full
        `,

        sizes[size],

        variants[variant],

        className
      )}
    />
  );

  const content = (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-3
      "
    >
      {spinner}

      {label && (
        <p
          className="
            text-sm
            text-[var(--color-text-muted)]
          "
        >
          {label}
        </p>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div
        className="
          fixed
          inset-0
          z-50

          flex
          items-center
          justify-center

          bg-[var(--color-bg)]/80
          backdrop-blur-sm
        "
      >
        {content}
      </div>
    );
  }

  if (center) {
    return (
      <div
        className="
          flex
          items-center
          justify-center
          py-10
        "
      >
        {content}
      </div>
    );
  }

  return content;
}