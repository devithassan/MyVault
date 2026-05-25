// components/common/featuregrid/FeatureGrid.jsx

import { Card } from "@/components/ui";

const features = [
  {
    title: "AI Search",
    description:
      "Find documents instantly using semantic search.",
  },
  {
    title: "Secure Storage",
    description:
      "Enterprise-grade encryption and backups.",
  },
  {
    title: "Smart Organization",
    description:
      "Folders, tags, collections, and automation.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <Card
          key={feature.title}
          hover
          className="p-8"
        >
          <h3 className="text-xl font-semibold">
            {feature.title}
          </h3>

          <p className="mt-4 text-[var(--color-text-muted)]">
            {feature.description}
          </p>
        </Card>
      ))}
    </div>
  );
}