// import PageContainer from "./PageContainer";

// export default function Section({
//   children,
//   className = "",
// }) {
//   return (
//     <section className={`py-24 ${className}`}>
//       <PageContainer>
//         {children}
//       </PageContainer>
//     </section>
//   );
// }


import PageContainer from "./PageContainer";

export default function Section({
  children,
  className = "",
  align = "center", // "center" | "left"
}) {
  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
  };

  return (
    <section className={`py-24 ${className}`}>
      <PageContainer>
        <div className={alignmentClasses[align]}>
          {children}
        </div>
      </PageContainer>
    </section>
  );
}