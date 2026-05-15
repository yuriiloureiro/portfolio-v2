"use client";

import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";
import LocalTime from "@/src/components/ui/LocalTime";
import LanguageToggle from "@/src/components/ui/LanguageToggle";

export default function TopBar() {
  const { t } = useLanguage();

  const links = [
    { href: "#about", label: t.topbar.link_info },
    { href: "#work", label: t.topbar.link_work },
    { href: "#contact", label: t.topbar.link_connect },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 h-9 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="h-full max-w-[1800px] mx-auto px-4 flex items-center justify-between gap-6 text-[10px] font-mono uppercase tracking-[0.15em]">
        {/* Esquerda: welcome */}
        <div className="hidden sm:flex items-center gap-2 text-muted-dark whitespace-nowrap">
          <span>{t.topbar.welcome}</span>
        </div>

        {/* Centro: links */}
        <nav className="flex items-center gap-5 text-muted">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Direita: status + local + hora + idioma */}
        <div className="hidden md:flex items-center gap-4 text-muted whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="text-foreground normal-case tracking-normal">
              {t.topbar.status}
            </span>
          </span>
          <span className="text-muted-dark">·</span>
          <span>{t.topbar.location}</span>
          <span className="text-muted-dark">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-muted-dark">{t.topbar.time_label}</span>
            <LocalTime />
          </span>
          <span className="text-muted-dark">·</span>
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}
