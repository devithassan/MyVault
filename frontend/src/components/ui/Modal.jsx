// components/ui/Modal.jsx

import { useEffect } from "react";
import clsx from "clsx";
import { X } from "lucide-react";

const sizes = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export default function Modal({
  open,
  onClose,

  title,
  description,

  children,
  footer,

  size = "md",

  closeOnOverlay = true,

  className,
}) {
  // ESC CLOSE
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose?.();
      }
    }

    if (open) {
      document.addEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        p-4
      "
    >

      {/* OVERLAY */}
      <button
        aria-label="Close modal"
        onClick={
          closeOnOverlay
            ? onClose
            : undefined
        }
        className="
          absolute
          inset-0

          bg-black/70
          backdrop-blur-sm
        "
      />

      {/* MODAL */}
      <div
        className={clsx(
          `
          relative
          z-10

          w-full

          overflow-hidden

          rounded-[var(--radius-xl)]

          border
          border-[var(--color-border)]

          bg-[var(--color-card)]

          shadow-2xl

          animate-in
          fade-in
          zoom-in-95
          duration-200
          `,

          sizes[size],

          className
        )}
      >

        {/* HEADER */}
        {(title || description) && (
          <div
            className="
              flex
              items-start
              justify-between

              border-b
              border-[var(--color-border)]

              p-6
            "
          >

            <div>
              {title && (
                <h2 className="text-xl font-semibold">
                  {title}
                </h2>
              )}

              {description && (
                <p
                  className="
                    mt-2
                    text-sm
                    text-[var(--color-text-muted)]
                  "
                >
                  {description}
                </p>
              )}
            </div>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-[var(--radius-md)]

                text-[var(--color-text-muted)]

                transition-colors
                hover:bg-[var(--color-surface)]
              "
            >
              <X className="h-5 w-5" />
            </button>

          </div>
        )}

        {/* BODY */}
        <div className="p-6">
          {children}
        </div>

        {/* FOOTER */}
        {footer && (
          <div
            className="
              flex
              items-center
              justify-end
              gap-3

              border-t
              border-[var(--color-border)]

              p-6
            "
          >
            {footer}
          </div>
        )}

      </div>

    </div>
  );
}