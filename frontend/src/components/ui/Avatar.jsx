// components/ui/Avatar.jsx

import clsx from "clsx";

const sizes = {
  sm: {
    wrapper: "h-8 w-8",
    text: "text-xs",
    indicator: "h-2.5 w-2.5",
  },

  md: {
    wrapper: "h-10 w-10",
    text: "text-sm",
    indicator: "h-3 w-3",
  },

  lg: {
    wrapper: "h-14 w-14",
    text: "text-base",
    indicator: "h-3.5 w-3.5",
  },

  xl: {
    wrapper: "h-20 w-20",
    text: "text-xl",
    indicator: "h-4 w-4",
  },
};

const variants = {
  default: `
    bg-[var(--color-surface)]
    border
    border-[var(--color-border)]
  `,

  primary: `
    bg-[var(--color-primary-soft)]
    border
    border-[var(--color-primary-border)]
  `,
};

export default function Avatar({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  variant = "default",
  online = false,
  className,
}) {
  const initials = name
    ?.split(" ")
    ?.map((part) => part[0])
    ?.join("")
    ?.slice(0, 2)
    ?.toUpperCase();

  return (
    <div className="relative inline-flex">

      {/* AVATAR */}
      <div
        className={clsx(
          `
          relative
          flex
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-full
          font-medium
          text-[var(--color-text)]
          `,
          
          sizes[size].wrapper,

          sizes[size].text,

          variants[variant],

          className
        )}
      >

        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-[var(--color-text-muted)]">
            {initials || "?"}
          </span>
        )}

      </div>

      {/* STATUS */}
      {online && (
        <span
          className={clsx(
            `
            absolute
            bottom-0
            right-0
            rounded-full
            border-2
            border-[var(--color-bg)]
            bg-[var(--color-success)]
            `,
            
            sizes[size].indicator
          )}
        />
      )}

    </div>
  );
}