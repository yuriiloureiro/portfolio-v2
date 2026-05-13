"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function Home() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
          // i18n_test · current: {language}
        </p>

        <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6 text-balance">
          {t.hero.title}
        </h1>

        <p className="text-muted text-base md:text-lg leading-relaxed mb-8 text-pretty">
          {t.hero.subtitle}
        </p>

        <button
          onClick={toggleLanguage}
          className="font-mono text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors font-bold"
        >
          Switch to {language === "pt" ? "EN" : "PT"}
        </button>

        <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="font-mono text-xs text-muted">ready_to_build</span>
        </div>
      </div>
    </main>
  );
}
