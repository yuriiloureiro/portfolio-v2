"use client";

import Link from "next/link";
import { Home, FolderGit2, User, Code2, Award, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Sidebar() {
  const { t } = useLanguage();

  const items = [
    { href: "#hero", label: t.nav.home, icon: <Home size={16} /> },
    { href: "#work", label: t.nav.work, icon: <FolderGit2 size={16} /> },
    { href: "#about", label: t.nav.about, icon: <User size={16} /> },
    { href: "#stack", label: t.nav.stack, icon: <Code2 size={16} /> },
    {
      href: "#certifications",
      label: t.nav.certifications,
      icon: <Award size={16} />,
    },
    { href: "#contact", label: t.nav.contact, icon: <Mail size={16} /> },
  ];

  const socials = [
    {
      href: "https://github.com/yuriiloureiro",
      label: "GitHub",
      icon: <FaGithub size={14} />,
    },
    {
      href: "https://www.linkedin.com/in/loureiroyuri/",
      label: "LinkedIn",
      icon: <FaLinkedin size={14} />,
    },
  ];

  return (
    <aside className="hidden lg:flex fixed top-9 left-0 bottom-0 z-40 w-12 bg-card/60 backdrop-blur-xl border-r border-border flex-col items-center py-4">
      {/* Logo dot */}
      <Link
        href="/"
        aria-label="Home"
        className="group w-8 h-8 mb-6 rounded-md bg-primary/10 border border-primary/30 inline-flex items-center justify-center hover:bg-primary/20 transition-colors"
      >
        <span className="font-mono text-[11px] font-bold text-primary group-hover:scale-110 transition-transform">
          YL
        </span>
      </Link>

      {/* Nav icons */}
      <nav className="flex flex-col gap-1 flex-1">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            aria-label={it.label}
            className="group relative w-9 h-9 inline-flex items-center justify-center rounded-md text-muted hover:text-foreground hover:bg-card-hover transition-colors"
          >
            {it.icon}
            <span className="absolute left-full ml-3 px-2 py-1 rounded bg-card border border-border text-[10px] font-mono uppercase tracking-[0.15em] text-foreground opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-10">
              {it.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Socials no fim */}
      <div className="flex flex-col gap-1 pt-4 border-t border-border w-8">
        {socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="group relative w-8 h-8 inline-flex items-center justify-center rounded-md text-muted hover:text-primary transition-colors"
          >
            {s.icon}
            <span className="absolute left-full ml-3 px-2 py-1 rounded bg-card border border-border text-[10px] font-mono uppercase tracking-[0.15em] text-foreground opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-10">
              {s.label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
