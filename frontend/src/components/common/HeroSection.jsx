// components/common/herosection/HeroSection.jsx

import { Button } from "@/components/ui";
import Container from "./Container";
import GradientBlur from "./GradientBlur";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      <GradientBlur className="left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-[var(--color-text-muted)]">
            AI-powered document management
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight lg:text-7xl">
            Manage documents like never before.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-[var(--color-text-muted)]">
            Store, organize, search, and collaborate
            on documents with a modern workspace
            experience.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">
              Get Started
            </Button>

            <Button
              variant="secondary"
              size="lg"
            >
              Live Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}