import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SmoothCursor } from "@/components/Cursor/SmoothCursor";
import { Navigation } from "@/components/Portfolio/Navigation";
import { personalInfo } from "@/data/portfolio";

export const Route = createFileRoute("/(dashboard)")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-page-background text-foreground transition-colors duration-300">
      <SmoothCursor />
      <Navigation />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 md:py-24">
        <Outlet />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for work
          </span>
        </div>
      </footer>
    </div>
  );
}
