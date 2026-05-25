// src/app/router/AppRouter.jsx

import {
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import {
  publicRoutes,
  protectedRoutes,
} from "./routes";

export default function AppRouter() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}

      {/* PROTECTED ROUTES */}
      {protectedRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute>
              {route.element}
            </ProtectedRoute>
          }
        />
      ))}
    </Routes>
  );
}