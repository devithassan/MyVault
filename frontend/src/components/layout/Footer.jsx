// const Footer = () => {
//   return (
//     <footer className="
//       mt-20
//       border-t border-border
//       py-10
//     ">
//       <div className="
//         mx-auto
//         flex
//         max-w-7xl
//         flex-col
//         items-center
//         justify-between
//         gap-4
//         px-6
//         text-sm
//         text-muted
//         md:flex-row
//       ">

//         <p>
//           © 2026 DocVault. All rights reserved.
//         </p>

//         <div className="flex gap-6">
//           <a href="#">Privacy</a>
//           <a href="#">Terms</a>
//           <a href="#">Contact</a>
//         </div>

//       </div>
//     </footer>
//   )
// }

// export default Footer

// components/layout/footer/Footer.jsx

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="mx-auto flex max-w-[var(--container-width)] flex-col items-center justify-between gap-4 px-6 text-sm text-[var(--color-text-muted)] md:flex-row">
        <p>
          © 2026 DocuVault. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="/">
            Privacy
          </a>

          <a href="/">
            Terms
          </a>

          <a href="/">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}