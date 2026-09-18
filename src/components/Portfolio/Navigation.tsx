import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  IoDocumentTextOutline,
  IoLogoLinkedin,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { Magnetic } from "@/components/Cursor/Magnetic";
import { personalInfo } from "@/data/portfolio";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 pb-1">
      <div className="mx-auto flex h-14 w-full items-center justify-center rounded-2xl border border-border bg-background/80 px-3 shadow-sm backdrop-blur-md lg:w-[70%] lg:max-w-[1400px]">
        <nav className="flex items-center gap-1">
          <Magnetic className="hidden sm:inline-flex">
            <a
              href="#about"
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>
          </Magnetic>
          <Magnetic className="hidden sm:inline-flex">
            <a
              href="#contact"
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </Magnetic>

          <span className="mx-2 hidden h-4 w-px bg-border sm:block" />

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
          >
            <IoLogoLinkedin size={18} />
          </a>

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
          >
            {mounted && theme === "light" ? (
              <IoSunnyOutline size={18} />
            ) : (
              <IoMoonOutline size={18} />
            )}
          </button>

          <Magnetic className="ml-2">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <IoDocumentTextOutline size={15} />
              CV
            </a>
          </Magnetic>
        </nav>
      </div>
    </header>
  );
}
