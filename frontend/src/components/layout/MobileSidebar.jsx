// import { useState } from "react"

// import {
//   Menu,
//   X,
//   LayoutDashboard,
//   FileText,
//   Upload,
//   Shield,
//   Settings,
// } from "lucide-react"

// const links = [
//   {
//     name: "Dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     name: "Documents",
//     icon: FileText,
//   },
//   {
//     name: "Uploads",
//     icon: Upload,
//   },
//   {
//     name: "Security",
//     icon: Shield,
//   },
//   {
//     name: "Settings",
//     icon: Settings,
//   },
// ]

// const MobileSidebar = () => {
//   const [open, setOpen] = useState(false)

//   return (
//     <>
//       {/* Toggle Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="
//           rounded-xl
//           border
//           border-border
//           p-2
//           lg:hidden
//         "
//       >
//         <Menu size={20} />
//       </button>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="
//             fixed
//             inset-0
//             z-40
//             bg-black/50
//             backdrop-blur-sm
//             lg:hidden
//           "
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed
//           left-0
//           top-0
//           z-50
//           h-screen
//           w-72
//           border-r
//           border-border
//           bg-surface
//           transition-transform
//           duration-300
//           lg:hidden
//           ${open ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         {/* Header */}
//         <div className="
//           flex
//           items-center
//           justify-between
//           border-b
//           border-border
//           px-6
//           py-5
//         ">
//           <div>
//             <h2 className="text-lg font-bold">
//               DocVault
//             </h2>

//             <p className="text-xs text-muted">
//               Document Manager
//             </p>
//           </div>

//           <button onClick={() => setOpen(false)}>
//             <X size={20} />
//           </button>
//         </div>

//         {/* Nav */}
//         <nav className="px-4 py-6">

//           <div className="space-y-2">

//             {links.map((link) => {
//               const Icon = link.icon

//               return (
//                 <button
//                   key={link.name}
//                   className="
//                     flex
//                     w-full
//                     items-center
//                     gap-3
//                     rounded-xl
//                     px-4
//                     py-3
//                     text-sm
//                     text-muted
//                     transition-all
//                     hover:bg-primary/10
//                     hover:text-text
//                   "
//                 >
//                   <Icon size={18} />

//                   <span>
//                     {link.name}
//                   </span>
//                 </button>
//               )
//             })}

//           </div>

//         </nav>
//       </aside>
//     </>
//   )
// }

// export default MobileSidebar

// components/layout/mobilesidebar/MobileSidebar.jsx

import clsx from "clsx";
import { Link } from "react-router-dom";

const items = [
  "Dashboard",
  "Documents",
  "Folders",
  "Analytics",
  "Settings",
];

export default function MobileSidebar({
  open,
  onClose,
}) {
  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={clsx(
          "fixed inset-0 z-40 bg-black/50 transition",
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        )}
      />

      {/* SIDEBAR */}
      <aside
        className={clsx(
          "fixed left-0 top-0 z-50 h-screen w-[280px] bg-[var(--color-surface)] transition-transform duration-300 lg:hidden",
          open
            ? "translate-x-0"
            : "-translate-x-full"
        )}
      >
        <div className="flex h-[var(--navbar-height)] items-center border-b border-[var(--color-border)] px-6">
          <span className="text-lg font-bold">
            DocuVault
          </span>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          {items.map((item) => (
            <Link
              key={item}
              to="/"
              className="rounded-[var(--radius-md)] px-4 py-3 text-sm text-[var(--color-text-muted)] transition hover:bg-white/5 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}