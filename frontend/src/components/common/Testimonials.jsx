// components/common/testimonials/Testimonials.jsx

import {Card} from "@/components/ui";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Operations Lead",
    content:
      "The best document platform we've ever used.",
  },
  {
    name: "Michael Ross",
    role: "Startup Founder",
    content:
      "Search, organization, and collaboration are incredible.",
  },
  {
    name: "Emma Watson",
    role: "Legal Consultant",
    content:
      "Beautiful UX with enterprise-level functionality.",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((item) => (
        <Card
          key={item.name}
          className="p-8"
        >
          <p className="text-lg leading-relaxed">
            “{item.content}”
          </p>

          <div className="mt-8">
            <h4 className="font-semibold">
              {item.name}
            </h4>

            <p className="text-sm text-[var(--color-text-muted)]">
              {item.role}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}