"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="inline-flex items-center gap-1 p-1 rounded-full border border-border bg-card"
    >
      {(["pt", "en"] as const).map((lang) => {
        const active = language === lang;
        return (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            aria-pressed={active}
            className={`font-mono text-[10px] uppercase tracking-[0.15em] font-bold px-3 py-1.5 rounded-full transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
}
