
import { Input, Avatar } from "@/components/ui";

export default function DashboardHeader({
  title,
  description,
}) {
  return (
    <header className="flex flex-col gap-6 border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
      {/* LEFT */}
      <div>
        <h1 className="text-2xl font-bold">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            {description}
          </p>
        )}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search documents..."
          className="w-[260px]"
        />

        <Avatar />
      </div>
    </header>
  );
}