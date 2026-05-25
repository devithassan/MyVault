// components/auth/DownloadAppCard.jsx

import { ArrowRight, Smartphone } from "lucide-react";

import { Button } from "@/components/ui";

export default function DownloadAppCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        bg-background/70
        backdrop-blur-xl
        p-8
        space-y-6
      "
    >
      <div
        className="
          w-14
          h-14
          rounded-2xl
          border
          flex
          items-center
          justify-center
        "
      >
        <Smartphone className="w-6 h-6" />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold tracking-tight">
          Continue on mobile
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          Download the Vault mobile app to securely access
          your encrypted documents and complete onboarding.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="flex-1 h-12 rounded-xl">
          Download for iPhone
        </Button>

        <Button
          variant="secondary"
          className="flex-1 h-12 rounded-xl"
        >
          Download for Android
        </Button>
      </div>

      <div className="pt-4 border-t">
        <button
          className="
            text-sm
            inline-flex
            items-center
            gap-2
            text-muted-foreground
            hover:text-foreground
            transition-colors
          "
        >
          Learn more about Vault security
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}