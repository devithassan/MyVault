import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

// Home
import HomePage from "@/pages/public/HomePage";
import PricingPage from "./pages/public/PricingPage";
import FeaturesPage from "./pages/public/FeaturesPage";
import AboutPage from "./pages/public/AboutPage";
import DownloadPage from "./pages/public/DownloadPage";

// Auth
import RegisterPage from "./pages/auth/RegisterPage";
import RegisterSuccessPage from "./pages/auth/RegisterSuccessPage";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* layout wrapper */}
        <Route element={<MainLayout />}>

          {/* public pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/download" element={<DownloadPage />} />
          
        </Route>
        {/* Auth */}
        <Route path="/register" element = {<RegisterPage />} />
        <Route path="/register/success" element={<RegisterSuccessPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />

        
      </Routes>
    </BrowserRouter>
  );
}