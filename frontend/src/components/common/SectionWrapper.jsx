// components/common/sectionwrapper/SectionWrapper.jsx

import clsx from "clsx";

export default function SectionWrapper({
  children,
  className,
}) {
  return (
    <section
      className={clsx(
        "relative py-24 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}