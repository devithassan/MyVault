// const SectionTitle = ({
//   title,
//   subtitle,
//   center = false,
// }) => {
//   return (
//     <div className={center ? "text-center" : ""}>
      
//       <h2 className="
//         text-3xl
//         font-bold
//         tracking-tight
//         md:text-4xl
//       ">
//         {title}
//       </h2>

//       {subtitle && (
//         <p className="
//           mt-3
//           max-w-2xl
//           text-muted
//           leading-relaxed
//           mx-auto
//         ">
//           {subtitle}
//         </p>
//       )}
//     </div>
//   )
// }

// export default SectionTitle

// components/common/sectiontitle/SectionTitle.jsx

export default function SectionTitle({
  badge,
  title,
  description,
  centered = true,
}) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : ""
      }
    >
      {badge && (
        <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-[var(--color-text-muted)]">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg text-[var(--color-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}