// src/app/router/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

import { ROUTES } from "@/constants";

export default function ProtectedRoute({
  children,
}) {
  /*
    Replace later with:
    - Zustand auth store
    - JWT validation
    - API session check
  */

  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <Navigate
        to={ROUTES.LOGIN}
        replace
      />
    );
  }

  return children;
}