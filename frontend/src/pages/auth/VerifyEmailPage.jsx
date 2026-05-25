// pages/auth/VerifyEmailPage.jsx

import { ShieldCheck, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui";

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      leftContent={
        <div className="space-y-8 max-w-xl">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Identity Verified
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              Your Vault identity
              <br />
              is now active.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Continue securely on mobile to create your password,
              enable biometrics, and access your encrypted vault.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div
              className="
                rounded-2xl
                border
                bg-background/60
                backdrop-blur-sm
                p-6
                space-y-4
              "
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  border
                  flex
                  items-center
                  justify-center
                "
              >
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">
                  Secure by Design
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your password is created directly on your trusted
                  mobile device.
                </p>
              </div>
            </div>

            <div
              className="
                rounded-2xl
                border
                bg-background/60
                backdrop-blur-sm
                p-6
                space-y-4
              "
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  border
                  flex
                  items-center
                  justify-center
                "
              >
                <Smartphone className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">
                  Mobile-Only Access
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Vault access is intentionally restricted to
                  trusted mobile devices.
                </p>
              </div>
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
              Email verified successfully
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Continue in the Vault mobile app to complete secure
              onboarding.
            </p>
          </div>

          <div className="space-y-4">
            <Button className="w-full h-12 rounded-xl">
              Open Vault App
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
              Browser-based vault access is intentionally disabled
              to protect sensitive documents and private records.
            </p>
          </div>
        </div>
      }
    />
  );
}