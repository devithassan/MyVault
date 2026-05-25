// pages/auth/RegisterSuccessPage.jsx

import { MailCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui";

export default function RegisterSuccessPage() {
  return (
    <AuthLayout
      leftContent={
        <div className="space-y-8 max-w-xl">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Identity Reserved
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              Check your inbox.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              We sent a secure verification link to your email
              address. Verify your identity to continue securely
              on mobile.
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border
              bg-background/60
              backdrop-blur-sm
              p-6
              flex
              items-start
              gap-4
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-2xl
                border
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <MailCheck className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">
                Verification required
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Your Vault account remains inactive until your
                email address has been verified.
              </p>
            </div>
          </div>
        </div>
      }
      rightContent={
        <div
          className="
            w-full
            max-w-md
            rounded-3xl
            border
            bg-background/70
            backdrop-blur-xl
            p-8
            shadow-sm
            space-y-8
          "
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              Verification email sent
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Continue your Vault setup by verifying your email
              from your inbox.
            </p>
          </div>

          <div className="space-y-4">
            <Button className="w-full h-12 rounded-xl">
              Resend Verification Email
            </Button>

            <Link to="/download">
              <Button
                variant="secondary"
                className="w-full h-12 rounded-xl"
              >
                Download Mobile App
              </Button>
            </Link>
          </div>

          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Password creation and secure access are only
              available inside the Vault mobile application.
            </p>
          </div>
        </div>
      }
    />
  );
}