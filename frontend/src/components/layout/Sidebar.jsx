// import {
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

// const Sidebar = () => {
//   return (
//     <aside
//       className="
//         hidden
//         h-screen
//         w-72
//         border-r
//         border-border
//         bg-surface
//         lg:flex
//         lg:flex-col
//       "
//     >
//       {/* Logo */}
//       <div className="
//         flex
//         items-center
//         gap-3
//         border-b
//         border-border
//         px-6
//         py-5
//       ">
//         <div className="
//           h-10
//           w-10
//           rounded-xl
//           bg-primary
//         " />

//         <div>
//           <h2 className="text-lg font-bold">
//             DocVault
//           </h2>

//           <p className="text-xs text-muted">
//             Document Manager
//           </p>
//         </div>
//       </div>

//       {/* Nav */}
//       <nav className="flex-1 px-4 py-6">

//         <div className="space-y-2">

//           {links.map((link) => {
//             const Icon = link.icon

//             return (
//               <button
//                 key={link.name}
//                 className="
//                   flex
//                   w-full
//                   items-center
//                   gap-3
//                   rounded-xl
//                   px-4
//                   py-3
//                   text-sm
//                   text-muted
//                   transition-all
//                   hover:bg-primary/10
//                   hover:text-text
//                 "
//               >
//                 <Icon size={18} />

//                 <span>
//                   {link.name}
//                 </span>
//               </button>
//             )
//           })}

//         </div>

//       </nav>

//       {/* Bottom */}
//       <div className="
//         border-t
//         border-border
//         p-4
//       ">
//         <div className="
//           rounded-2xl
//           border
//           border-border
//           bg-background
//           p-4
//         ">
//           <p className="text-sm font-medium">
//             Free Plan
//           </p>

//           <p className="mt-1 text-xs text-muted">
//             Upgrade for more storage.
//           </p>
//         </div>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar

// components/layout/sidebar/Sidebar.jsx

import { Link } from "react-router-dom";
import clsx from "clsx";

const items = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Documents",
    href: "/dashboard/documents",
  },
  {
    label: "Folders",
    href: "/dashboard/folders",
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-[var(--sidebar-width)] shrink-0 border-r border-[var(--color-border)] bg-[var(--color-surface)] lg:flex lg:flex-col">
      {/* LOGO */}
      <div className="flex h-[var(--navbar-height)] items-center border-b border-[var(--color-border)] px-6">
        <span className="text-lg font-bold">
          DocuVault
        </span>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-1 flex-col gap-2 p-4">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={clsx(
              "rounded-[var(--radius-md)] px-4 py-3 text-sm transition",
              "text-[var(--color-text-muted)] hover:bg-white/5 hover:text-white"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}