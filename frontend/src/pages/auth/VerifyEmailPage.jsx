// pages/auth/VerifyEmailPage.jsx

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ShieldCheck, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui";

export default function VerifyEmailPage() {

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("loading");
  // loading | success | error

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("error");
        return;
      }

      try {
        const res = await fetch(
          "http://localhost:5000/api/auth/verify-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          }
        );

        const data = await res.json();

        if (data.success) {
          setStatus("success");
        }
        else if (
          data.code === "ALREADY_VERIFIED"
        ) {
          setStatus("alreadyVerified");
        }
        else {
          setStatus("error");
        }
      } catch (err) {
        setStatus("error");
      }
    };

    verifyEmail();
  }, [token]);
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
        {status === "loading" && (
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              Verifying your email...
            </h2>
            <p className="text-muted-foreground">
              Please wait while we confirm your identity.
            </p>
          </div>
        )}  
        {status === "success" && (
          <>
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
          </>
        )}

        {status === "alreadyVerified" && (
          <>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">
                Email already verified
              </h2>

              <p className="text-muted-foreground">
                Continue setup in the Vault mobile app.
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
          </>
        )}

        {status === "error" && (
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-red-500">
              Verification failed
            </h2>

            <p className="text-muted-foreground">
              The link is invalid or expired. Please request a new email.
            </p>
          </div>
        )}
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