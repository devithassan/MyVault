// components/common/pricingcard/PricingCard.jsx

import clsx from "clsx";
import { Button } from "@/components/ui";

export default function PricingCard({
  title,
  price,
  features,
  featured = false,
}) {
  return (
    <div
      className={clsx(
        "rounded-[var(--radius-xl)] border p-8",
        featured
          ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
          : "border-[var(--color-border)] bg-[var(--color-card)]"
      )}
    >
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <div className="mt-6">
        <span className="text-5xl font-extrabold">
          ${price}
        </span>

        <span className="ml-2 text-[var(--color-text-muted)]">
          /month
        </span>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="text-sm text-[var(--color-text-muted)]"
          >
            • {feature}
          </li>
        ))}
      </ul>

      <Button
        className="mt-10 w-full"
        variant={
          featured
            ? "primary"
            : "secondary"
        }
      >
        Choose Plan
      </Button>
    </div>
  );
}