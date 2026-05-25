// components/auth/AuthLayout.jsx

import PageContainer from "@/components/layout/PageContainer";

export default function AuthLayout({
  children,
  leftContent,
  rightContent,
}) {
  return (
    <main className="min-h-screen flex items-center py-16">
      <PageContainer>
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* LEFT */}
          <div className="space-y-10">
            {leftContent}
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            {rightContent || children}
          </div>
        </div>
      </PageContainer>
    </main>
  );
}