"use client";

import { useLanguage } from "@/src/context/LanguageContext";
import Magnetic from "@/src/components/animations/Magnetic";
import RevealText from "@/src/components/animations/RevealText";
import FadeIn from "@/src/components/animations/FadeIn";

export default function Home() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <main className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
      {/* Eyebrow */}
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-8">
        // animations_test · {language}
      </p>

      {/* RevealText */}
      <h1 className="font-mono text-4xl md:text-7xl font-bold tracking-tighter text-foreground mb-8 leading-[1.05] text-balance">
        <RevealText text={t.hero.title} delayPerChar={0.02} />
      </h1>

      {/* FadeIn */}
      <FadeIn delay={0.4}>
        <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12 text-pretty">
          {t.hero.subtitle}
        </p>
      </FadeIn>

      {/* Magnetic + FadeIn combinados */}
      <FadeIn delay={0.7}>
        <div className="flex flex-wrap gap-4">
          <Magnetic strength={0.3}>
            <button
              onClick={toggleLanguage}
              className="font-mono text-xs uppercase tracking-[0.2em] px-7 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors font-bold"
            >
              Switch to {language === "pt" ? "EN" : "PT"}
            </button>
          </Magnetic>

          <Magnetic strength={0.25}>
            <button className="font-mono text-xs uppercase tracking-[0.2em] px-7 py-4 rounded-full border border-border text-foreground hover:bg-card transition-colors font-bold">
              {t.hero.cta_secondary}
            </button>
          </Magnetic>
        </div>
      </FadeIn>

      {/* Teste do FadeIn ao scrollar */}
      <div className="mt-[80vh] grid grid-cols-1 md:grid-cols-3 gap-4">
        {["badge1", "badge2", "badge3"].map((b, i) => (
          <FadeIn key={b} delay={i * 0.15} direction="up">
            <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/40 transition-colors">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                0{i + 1}
              </p>
              <h3 className="font-mono text-xl font-semibold text-foreground mb-2">
                Card {i + 1}
              </h3>
              <p className="text-muted text-sm">
                Este card aparece com fade quando entra na viewport.
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
