// components/layout/Navbar.jsx

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


import { Button } from "@/components/ui";
import PageContainer from "@/components/layout/PageContainer";

export default function Navbar() {

    const linkClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold"
      : "text-gray-400 hover:text-white transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(2,6,23,0.75)] backdrop-blur-xl">
      
      <PageContainer>
        
        <nav className="flex h-16 items-center justify-between gap-6">
          
          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-bold tracking-tight"
          >
            DocuVault
          </Link>

          {/* NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">
            
            <NavLink
              to="/features"
              className={linkClass}
            >
              Features
            </NavLink>

            <NavLink
              to="pricing"
              className={linkClass}
            >
              Pricing
            </NavLink>

            <NavLink
              to="/about"
              className={linkClass}
            >
              About
            </NavLink>

            <NavLink
              to="/download"
              className={linkClass}
            >
              Download
            </NavLink>

          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            
            {/* <Button variant="ghost">
              Login
            </Button> */}
            <NavLink
              to="/register"
              className={linkClass}
            >
              <Button>
                Get Started
              </Button>
              </NavLink>  
              

          </div>

        </nav>

      </PageContainer>

    </header>
  );
}