// components/ui/Dropdown.jsx

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const alignments = {
  left: "left-0",
  right: "right-0",
};

export default function Dropdown({
  trigger,
  children,
  align = "right",
  width = "220px",
  className,
}) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
    >

      {/* TRIGGER */}
      <div onClick={() => setOpen((prev) => !prev)}>
        {trigger}
      </div>

      {/* MENU */}
      <div
        className={clsx(
          `
          absolute
          top-full
          z-50
          mt-2

          rounded-[var(--radius-lg)]
          border
          border-[var(--color-border)]

          bg-[var(--color-card)]

          p-2

          shadow-xl
          backdrop-blur-xl

          transition-all
          duration-200

          origin-top
          `,

          alignments[align],

          open
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0",

          className
        )}
        style={{ width }}
      >
        {children}
      </div>

    </div>
  );
}