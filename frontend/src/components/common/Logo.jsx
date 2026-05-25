// components/common/logo/Logo.jsx

import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
    >
      <div className="h-9 w-9 rounded-xl bg-[var(--color-primary)]" />

      <span className="text-lg font-bold tracking-tight">
        DocuVault
      </span>
    </Link>
  );
}