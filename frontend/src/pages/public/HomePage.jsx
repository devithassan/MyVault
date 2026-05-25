import Section from "@/components/layout/Section";

import {
  Button,
  Card,
  Badge,
} from "@/components/ui";

import {
  GradientBlur,
  SectionTitle,
} from "@/components/common";

import {
  ShieldCheck,
  Search,
  FolderKanban,
  Cloud,
  Users,
  BarChart3,
  Check,
} from "lucide-react";

const features = [
  {
    icon: FolderKanban,
    title: "Smart Organization",
    description:
      "Automatically categorize and structure documents with intelligent AI-powered organization.",
  },
  {
    icon: Search,
    title: "Lightning Fast Search",
    description:
      "Find any file instantly using natural language and advanced indexing.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Protect sensitive data with encryption, role-based access, and secure cloud storage.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Access your documents anywhere across devices with seamless syncing.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Share files, manage permissions, and collaborate with your entire team.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track usage, activity, and storage performance with detailed analytics.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Operations Manager",
    quote:
      "This platform completely transformed how our team manages documents and workflows.",
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    quote:
      "Fast, secure, and beautifully designed. It feels like the future of document management.",
  },
  {
    name: "Michael Rodriguez",
    role: "Product Lead",
    quote:
      "The search experience alone saves our company hours every single week.",
  },
];

const trustStats = [
  {
    label: "Documents",
    value: "12.4K",
  },
  {
    label: "Storage Used",
    value: "84GB",
  },
  {
    label: "Team Members",
    value: "26",
  },
  {
    label: "Security Score",
    value: "99%",
  },
];

const recentFiles = [
  "ProductRoadmap.pdf",
  "FinancialReport.xlsx",
  "TeamNotes.docx",
];

const recentActivity = [
  "Sarah uploaded 12 files",
  "Michael shared a document",
  "Backup completed successfully",
];

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">

      {/* BACKGROUND */}
      <GradientBlur className="left-0 top-0 opacity-40" />
      <GradientBlur className="right-0 top-40 opacity-30" />

      {/* HERO */}
      <Section align = "center">

        <div className="mx-auto max-w-5xl text-center">

          <Badge className="mb-6">
            AI Powered Document Platform
          </Badge>

          <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
            Manage Documents

            <span className="block text-[var(--color-primary)]">
              Without the Chaos
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)] lg:text-xl">
            Upload, organize, search, and secure your files in one
            intelligent workspace built for modern teams and scalable
            businesses.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button size="lg">
              Start Free
            </Button>

            <Button
              variant="secondary"
              size="lg"
            >
              Watch Demo
            </Button>

          </div>

          <p className="mt-6 text-sm text-[var(--color-text-muted)]">
            Trusted by startups, agencies, and growing teams worldwide.
          </p>

        </div>

        {/* DASHBOARD */}
        <div className="mx-auto mt-24 max-w-6xl">

          <Card
            variant="glass"
            className="p-6 lg:p-8"
          >

            {/* TOP */}
            <div className="mb-8 flex flex-col gap-4 border-b border-[var(--color-border)] pb-6 md:flex-row md:items-center md:justify-between">

              <div>

                <h3 className="text-xl font-semibold" align = "left">
                  Dashboard Overview
                </h3>

                <p className="mt-2 text-[var(--color-text-muted)]">
                  Monitor and manage all your files in one place.
                </p>

              </div>

              <Badge>
                Live Workspace
              </Badge>

            </div>

            {/* STATS */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              {trustStats.map((item) => (
                <Card
                  key={item.label}
                  variant="surface"
                  className="p-5"
                >

                  <p className="text-sm text-[var(--color-text-muted)]">
                    {item.label}
                  </p>

                  <h4 className="mt-3 text-3xl font-bold">
                    {item.value}
                  </h4>

                </Card>
              ))}

            </div>

            {/* FILES + ACTIVITY */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              <Card
                variant="surface"
                className="p-6"
              >

                <h4 className="mb-6 text-lg font-semibold">
                  Recent Uploads
                </h4>

                <div className="space-y-4">

                  {recentFiles.map((file) => (
                    <div
                      key={file}
                      className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-3"
                    >

                      <span className="text-sm">
                        {file}
                      </span>

                      <Check className="h-4 w-4 text-[var(--color-primary)]" />

                    </div>
                  ))}

                </div>

              </Card>

              <Card
                variant="surface"
                className="p-6"
              >

                <h4 className="mb-6 text-lg font-semibold">
                  Activity
                </h4>

                <div className="space-y-4">

                  {recentActivity.map((activity) => (
                    <div
                      key={activity}
                      className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-muted)]"
                    >
                      {activity}
                    </div>
                  ))}

                </div>

              </Card>

            </div>

          </Card>

        </div>

      </Section>

      {/* FEATURES */}
      <Section>

        <SectionTitle
          title="Everything You Need"
          subtitle="Built for speed, security, collaboration, and scalability."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="p-8"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-surface)]">

                  <Icon className="h-7 w-7 text-[var(--color-primary)]" />

                </div>

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
                  {feature.description}
                </p>

              </Card>
            );
          })}

        </div>

      </Section>

      {/* TESTIMONIALS */}
      <Section>

        <SectionTitle
          title="Loved by Modern Teams"
          subtitle="See why teams trust our platform to manage their digital workflows."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-8"
            >

              <div className="mb-6 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-semibold">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-[var(--color-text-muted)]">
                    {testimonial.role}
                  </p>

                </div>

              </div>

              <p className="leading-relaxed text-[var(--color-text-muted)]">
                "{testimonial.quote}"
              </p>

            </Card>
          ))}

        </div>

      </Section>

      {/* CTA */}
      <Section>

        <Card
          variant="glass"
          className="px-8 py-20 text-center"
        >

          <Badge className="mb-6">
            Start Today
          </Badge>

          <h2 className="text-4xl font-bold lg:text-5xl">
            Ready to Organize

            <span className="block">
              Your Digital World?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
            Join thousands of teams using our platform to manage files,
            workflows, and collaboration more efficiently.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button size="lg">
              Get Started Free
            </Button>

            <Button
              variant="secondary"
              size="lg"
            >
              Contact Sales
            </Button>

          </div>

        </Card>

      </Section>

    </div>
  );
};

export default HomePage;