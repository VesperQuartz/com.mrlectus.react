import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  IoCheckmarkOutline,
  IoCopyOutline,
  IoDocumentTextOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailOutline,
} from "react-icons/io5";
import { Magnetic } from "@/components/Cursor/Magnetic";
import { personalInfo } from "@/data/portfolio";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function HomeView() {
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: IoMailOutline,
      external: false,
      copy: true,
    },
    {
      label: "LinkedIn",
      value: "Waheed",
      href: personalInfo.linkedin,
      icon: IoLogoLinkedin,
      external: true,
      copy: false,
    },
    {
      label: "GitHub",
      value: "VesperQuartz",
      href: personalInfo.github,
      icon: IoLogoGithub,
      external: true,
      copy: false,
    },
    {
      label: "Twitter / X",
      value: "@mrlectus",
      href: personalInfo.twitter,
      icon: IoLogoTwitter,
      external: true,
      copy: false,
    },
  ];

  return (
    <motion.div
      variants={container}
      initial={reduceMotion ? false : "hidden"}
      animate="show"
      className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20"
    >
      {/* Main column */}
      <div>
        <motion.header variants={rise}>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {personalInfo.name}
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-relaxed text-foreground/90">
            {personalInfo.tagline}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {personalInfo.title} · {personalInfo.location} · Available for work
          </p>
        </motion.header>

        <motion.section
          id="about"
          variants={rise}
          className="mt-14 scroll-mt-24 border-t border-border pt-8"
        >
          <h2 className="font-display text-sm font-semibold text-foreground">
            About
          </h2>
          <div className="mt-4 max-w-xl space-y-4 leading-relaxed text-muted-foreground">
            {personalInfo.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Sidebar */}
      <motion.aside
        id="contact"
        variants={rise}
        className="scroll-mt-24 lg:border-l lg:border-border lg:pl-10"
      >
        <h2 className="font-display text-sm font-semibold text-foreground">
          Reach me
        </h2>

        <ul className="mt-4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <li
                key={channel.label}
                className="flex items-center gap-3 border-b border-border py-3 last:border-b-0"
              >
                <Icon size={16} className="shrink-0 text-muted-foreground" />
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="min-w-0 flex-1 truncate font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {channel.value}
                </a>
                {channel.copy && (
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copy email address"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {copied ? (
                      <IoCheckmarkOutline size={15} />
                    ) : (
                      <IoCopyOutline size={15} />
                    )}
                  </button>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-10">
          <h2 className="font-display text-sm font-semibold text-foreground">
            CV
          </h2>
          <Magnetic className="mt-4 flex" strength={0.18} radius={40}>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center gap-3 rounded-md border border-border px-4 py-3 text-sm transition-colors hover:bg-card"
            >
              <IoDocumentTextOutline
                size={16}
                className="shrink-0 text-muted-foreground"
              />
              <span className="text-foreground">Download PDF</span>
            </a>
          </Magnetic>
        </div>
      </motion.aside>
    </motion.div>
  );
}
