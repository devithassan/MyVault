// const GradientBlur = ({
//   className = "",
// }) => {
//   return (
//     <div
//       className={`
//         absolute
//         rounded-full
//         bg-primary/30
//         blur-[120px]
//         ${className}
//       `}
//     />
//   )
// }

// export default GradientBlur

// components/common/gradientblur/GradientBlur.jsx

import clsx from "clsx";

export default function GradientBlur({
  className,
}) {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute rounded-full bg-blue-500/20 blur-3xl",
        className
      )}
    />
  );
}