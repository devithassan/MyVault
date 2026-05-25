
import { Card, Badge, Button } from "@/components/ui";
import { Section } from "@/components/layout";
import PageContainer from "@/components/layout/PageContainer";
const FEATURES = [
  {
    title: "Smart Document Organization",
    description:
      "Automatically categorize and structure your documents using intelligent tagging and hierarchy rules.",
    badge: "AI Powered",
  },
  {
    title: "Secure Vault Encryption",
    description:
      "End-to-end encryption ensures your files are protected at rest and in transit with enterprise-grade security.",
    badge: "Security",
  },
  {
    title: "Instant Search",
    description:
      "Find any document in milliseconds using full-text search, filters, and semantic understanding.",
    badge: "Speed",
  },
  {
    title: "Version History",
    description:
      "Track every change with full version control and restore previous document states anytime.",
    badge: "Workflow",
  },
  {
    title: "Team Collaboration",
    description:
      "Share, comment, and collaborate on documents in real time with role-based permissions.",
    badge: "Teams",
  },
  {
    title: "Cloud Sync",
    description:
      "Access your vault anywhere with real-time synchronization across all devices.",
    badge: "Cloud",
  },
];

const FeaturesPage = () => {
  return (
    <PageContainer>
      {/* HERO SECTION */}
      <Section align ="center">
        <Badge>Features</Badge>
        <br></br>
        <br></br>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Everything you need to manage your documents intelligently
        </h1>
        <br></br>

        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Vault is built for speed, security, and scale. Every feature is designed
          to reduce friction and give you complete control over your documents.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button>Get Started</Button>
          <Button variant="outline">View Pricing</Button>
        </div>
      </Section>

      {/* FEATURES GRID */}
      <Section align ="center">
        <div className="grid gap-6 grid-auto-fit">
          {FEATURES.map((feature, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 transition-all hover:shadow-md"
            >
              <Badge variant="secondary">{feature.badge}</Badge>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* BOTTOM CTA */}
      <Section align ="center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to upgrade your document workflow?
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto">
          Join thousands of users who trust Vault for secure and intelligent document management.
        </p>

        <Button size="lg">Start Free Trial</Button>
      </Section>
    </PageContainer>
  );
};

export default FeaturesPage;