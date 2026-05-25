// components/common/ctasection/CTASection.jsx

import Container from "./Container";
import { Button } from "@/components/ui";

export default function CTASection() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] p-10 text-center lg:p-16">
          <h2 className="text-4xl font-bold">
            Ready to transform document management?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[var(--color-text-muted)]">
            Start organizing your workflow with a
            modern AI-powered workspace.
          </p>

          <div className="mt-10">
            <Button size="lg">
              Start Free Trial
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}