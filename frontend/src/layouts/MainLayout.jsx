
// layouts/MainLayout.jsx

import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}