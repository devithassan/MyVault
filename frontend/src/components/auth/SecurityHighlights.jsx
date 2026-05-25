// components/auth/SecurityHighlights.jsx

import {
  ShieldCheck,
  Fingerprint,
  Smartphone,
  LockKeyhole,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "End-to-End Encrypted",
    description:
      "Your documents remain encrypted throughout their lifecycle.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Only Access",
    description:
      "Vault access is restricted to trusted mobile devices.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description:
      "Secure access using Face ID or fingerprint authentication.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy-First Architecture",
    description:
      "Designed around secure identity and zero-trust principles.",
  },
];

export default function SecurityHighlights() {
  return (
    <div className="space-y-8">
      {/* HERO COPY */}
      <div className="space-y-5 max-w-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Secure Digital Vault
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Your most important documents.
          <br />
          Secured beyond the browser.
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
          Vault is built for secure mobile-first access —
          giving you complete control over sensitive files,
          identity documents, and private records.
        </p>
      </div>

      {/* SECURITY CARDS */}
      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
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
                  flex
                  items-center
                  justify-center
                  border
                "
              >
                <Icon className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-base">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}