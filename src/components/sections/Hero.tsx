"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import CodeBlock from "@/src/components/layout/CodeBlock";
import PersonalCard from "@/src/components/sections/PersonalCard";
import RevealText from "@/src/components/animations/RevealText";
import FadeIn from "@/src/components/animations/FadeIn";
import Magnetic from "@/src/components/animations/Magnetic";

export default function Hero() {
  const { t } = useLanguage();
  const b = t.hero.badges;

  const badges = [
    { value: b.experience, label: b.experience_label },
    { value: b.projects, label: b.projects_label },
    { value: b.bootcamp, label: b.bootcamp_label },
    { value: b.design, label: b.design_label },
  ];

  return (
    <CodeBlock
      comment={t.hero.eyebrow.replace("// ", "")}
      startLine={1}
      id="hero"
      fullHeight
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start w-full">
        {/* Personal Card */}
        <FadeIn direction="left" className="md:col-span-5 lg:col-span-4">
          <PersonalCard />
        </FadeIn>

        {/* Conteúdo */}
        <div className="md:col-span-7 lg:col-span-8 md:pt-2">
          <FadeIn delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
              {t.hero.greeting} —{" "}
              <span className="text-muted">{t.hero.role}</span>
            </p>
          </FadeIn>

          <h1 className="font-mono text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[3.75rem] font-bold tracking-tighter leading-[1.05] text-foreground text-balance mb-5">
            <RevealText
              text={t.hero.title}
              delayPerChar={0.04}
              splitBy="word"
            />
          </h1>

          <FadeIn delay={0.7}>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-10 text-pretty">
              {t.hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.85}>
            <div className="flex flex-wrap gap-3 mb-6">
              <Magnetic strength={0.25}>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold px-7 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
                >
                  {t.hero.cta_primary}
                  <ArrowUpRight size={14} />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold px-7 py-4 rounded-full border border-border text-foreground hover:bg-card-hover transition-colors"
                >
                  {t.hero.cta_secondary}
                </a>
              </Magnetic>
            </div>
          </FadeIn>

          {/* Badges inferiores */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-5 border-t border-border">
            {badges.map((badge, i) => (
              <FadeIn key={badge.value} delay={1 + i * 0.08}>
                <div className="bg-card/40 border border-border rounded-2xl p-4 hover:border-primary/30 hover:bg-card transition-colors">
                  <p className="font-mono text-xl md:text-2xl font-bold text-primary tracking-tight">
                    {badge.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-dark mt-1 leading-snug">
                    {badge.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </CodeBlock>
  );
}
