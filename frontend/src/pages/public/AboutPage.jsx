// pages/AboutPage.jsx

import PageContainer from "@/components/layout/PageContainer";
import { Section } from "@/components/layout";
import { Button, Card, Badge } from "@/components/ui";

import { Shield, Zap, Lock, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Security First",
    desc: "End-to-end encryption protects your most sensitive documents.",
    badge: "Enterprise",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    desc: "Instant upload, search, and retrieval with optimized performance.",
    badge: "Speed",
  },
  {
    icon: Lock,
    title: "Private by Design",
    desc: "Your data stays private — always under your control.",
    badge: "Privacy",
  },
  {
    icon: Globe,
    title: "Anywhere Access",
    desc: "Access your vault securely from any device, anywhere.",
    badge: "Cloud",
  },
];

const stats = [
  { label: "Documents Protected", value: "10M+" },
  { label: "Active Users", value: "250K+" },
  { label: "Uptime", value: "99.99%" },
  { label: "Countries", value: "120+" },
];

export default function AboutPage() {
  return (
    <PageContainer>
      {/* HERO */}
      <Section align="center">
        <Badge>About Vault</Badge>

        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Built to protect what matters most.
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
          Vault is a secure document management system designed for speed,
          simplicity, and trust. Your files stay protected, organized, and
          always accessible.
        </p>

        <div className="flex gap-4 justify-center mt-10">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </Section>

      {/* STATS */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <h2 className="text-2xl font-semibold">{stat.value}</h2>
              <p className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* MISSION */}
      <Section align="center">
        <h2 className="text-3xl font-bold">Our Mission</h2>

        <p className="mt-6 max-w-3xl text-muted-foreground">
          We believe document management should not be fragmented, slow, or
          insecure. Vault is building a future where your data is unified,
          intelligent, and effortlessly accessible — without compromise.
        </p>
      </Section>

      {/* FEATURES */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Vault?</h2>
          <p className="text-muted-foreground mt-3">
            Built for trust, performance, and clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f) => {
            const Icon = f.icon;

            return (
              <Card key={f.title} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5" />
                  <Badge variant="secondary">{f.badge}</Badge>
                </div>

                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.desc}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section align="center">
        <Card className="p-10 text-center">
          <h2 className="text-3xl font-bold">
            Ready to take control of your documents?
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Join thousands of users who trust Vault for secure, fast, and
            reliable document storage.
          </p>

          <div className="mt-8">
            <Button size="lg">Start Free</Button>
          </div>
        </Card>
      </Section>
    </PageContainer>
  );
}