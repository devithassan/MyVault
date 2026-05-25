// src/app/router/routes.js

import { ROUTES } from "@/constants";

/* LAYOUTS */
import MainLayout from "@/layouts/MainLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

/* PAGES */
import HomePage from "@/pages/public/HomePage";
import PricingPage from "@/pages/public/PricingPage";

import LoginPage from "@/pages/auth/LoginPage";

import DashboardPage from "@/pages/dashboard/DashboardPage";
import DocumentsPage from "@/pages/dashboard/DocumentsPage";
import SettingsPage from "@/pages/dashboard/SettingsPage";

export const publicRoutes = [
  {
    path: ROUTES.HOME,

    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },

  {
    path: ROUTES.PRICING,

    element: (
      <MainLayout>
        <PricingPage />
      </MainLayout>
    ),
  },

  {
    path: ROUTES.LOGIN,

    element: <LoginPage />,
  },
];

export const protectedRoutes = [
  {
    path: ROUTES.DASHBOARD,

    element: (
      <DashboardLayout>
        <DashboardPage />
      </DashboardLayout>
    ),
  },

  {
    path: ROUTES.DOCUMENTS,

    element: (
      <DashboardLayout>
        <DocumentsPage />
      </DashboardLayout>
    ),
  },

  {
    path: ROUTES.SETTINGS,

    element: (
      <DashboardLayout>
        <SettingsPage />
      </DashboardLayout>
    ),
  },
];