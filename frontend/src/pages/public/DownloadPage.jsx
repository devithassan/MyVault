// pages/public/DownloadPage.jsx

import {
  Smartphone,
  Shield,
  Fingerprint,
  LockKeyhole,
} from "lucide-react";

import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui";

const features = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description:
      "Your documents remain encrypted throughout their lifecycle.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Protection",
    description:
      "Secure access using Face ID and fingerprint authentication.",
  },
  {
    icon: LockKeyhole,
    title: "Trusted Device Access",
    description:
      "Vault access is restricted to trusted mobile devices only.",
  },
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen py-20">
      <PageContainer>
        <div className="max-w-6xl mx-auto space-y-20">
          {/* HERO */}
          <section
            className="
              text-center
              flex
              flex-col
              items-center
              space-y-8
            "
          >
            <div
              className="
                w-20
                h-20
                rounded-3xl
                border
                flex
                items-center
                justify-center
                bg-background/60
                backdrop-blur-sm
              "
            >
              <Smartphone className="w-9 h-9" />
            </div>

            <div className="space-y-5 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Mobile Experience
              </p>

              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
                Your vault lives
                <br />
                on trusted devices.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Vault is designed around secure mobile-first
                access, enabling encrypted document management
                wherever you go.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-12 px-8 rounded-xl">
                Download for iPhone
              </Button>

              <Button
                variant="secondary"
                className="h-12 px-8 rounded-xl"
              >
                Download for Android
              </Button>
            </div>
          </section>

          {/* FEATURES */}
          <section className="grid gap-6 md:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-3xl
                    border
                    bg-background/60
                    backdrop-blur-sm
                    p-8
                    space-y-5
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
                    "
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>

          {/* FOOTNOTE */}
          <section className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vault intentionally avoids browser-based document
              access to minimize attack surface and preserve user
              privacy.
            </p>
          </section>
        </div>
      </PageContainer>
    </main>
  );
}