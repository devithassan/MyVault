import PageContainer from "@/components/layout/PageContainer";
import { Section } from "@/components/layout";
import { Button, Card, Badge } from "@/components/ui";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    description: "For individuals exploring Vault",
    features: [
      "Basic document storage",
      "Limited vault access",
      "1GB storage",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "12",
    description: "For professionals and freelancers",
    features: [
      "Unlimited document uploads",
      "Advanced encryption vault",
      "10GB storage",
      "Smart search",
      "Priority support",
    ],
    cta: "Start Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "29",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Role-based access",
      "100GB storage",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const trustFeatures = [
  {
    title: "End-to-End Encryption",
    desc: "Your files are protected at every layer.",
  },
  {
    title: "Blazing Fast Access",
    desc: "Instant search and retrieval system.",
  },
  {
    title: "Enterprise Ready",
    desc: "Built for teams, compliance, and scale.",
  },
];

export default function PricingPage() {
  return (
    <PageContainer>

      {/* HERO */}
      <Section align = "center">

        <Badge className="mb-4">
          Simple Pricing
        </Badge>

        <h1 className="mb-4 text-5xl font-bold tracking-tight lg:text-6xl">
          Choose the plan that fits your Vault
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-muted)]">
          Secure your documents with flexible pricing.
          Upgrade anytime as you grow.
        </p>

      </Section>

      {/* PRICING */}
      <Section>

        <div className="grid gap-8 md:grid-cols-3">

          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.highlighted ? "highlighted" : "default"}
              className="flex flex-col p-8"
            >

              {/* HEADER */}
              <div className="mb-8">

                <h3 className="text-2xl font-semibold">
                  {plan.name}
                </h3>

                <p className="mt-2 text-[var(--color-text-muted)]">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-end gap-2">

                  <span className="text-5xl font-bold">
                    ${plan.price}
                  </span>

                  <span className="pb-1 text-sm text-[var(--color-text-muted)]">
                    /month
                  </span>

                </div>

              </div>

              {/* FEATURES */}
              <ul className="mb-8 flex-1 space-y-4">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >

                    <span className="text-[var(--color-primary)]">
                      ✓
                    </span>

                    <span className="text-[var(--color-text-muted)]">
                      {feature}
                    </span>

                  </li>
                ))}

              </ul>

              {/* CTA */}
              <Button
                variant={plan.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>

            </Card>
          ))}

        </div>

      </Section>

      {/* TRUST */}
      <Section>

        <div className="mb-12 text-center">

          <h2 className="text-3xl font-semibold">
            Built for security & scale
          </h2>

          <p className="mt-3 text-[var(--color-text-muted)]">
            Everything you need to trust Vault with your data
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {trustFeatures.map((item) => (
            <Card
              key={item.title}
              className="p-6"
            >

              <h3 className="mb-3 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-[var(--color-text-muted)]">
                {item.desc}
              </p>

            </Card>
          ))}

        </div>

      </Section>

      {/* CTA */}
      <Section className="text-center">

        <h2 className="mb-4 text-4xl font-bold">
          Start securing your documents today
        </h2>

        <p className="mb-8 text-[var(--color-text-muted)]">
          No credit card required for Free plan.
        </p>

        <Button size="lg">
          Get Started Free
        </Button>

      </Section>

    </PageContainer>
  );
}