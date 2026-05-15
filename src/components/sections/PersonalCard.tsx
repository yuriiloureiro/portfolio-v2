"use client";

import Image from "next/image";
import { Download, Calendar, MapPin, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import Magnetic from "@/src/components/animations/Magnetic";

export default function PersonalCard() {
  const { t } = useLanguage();
  const c = t.hero.card;

  return (
    <div className="relative w-full max-w-[340px] mx-auto md:mx-0 group">
      {/* Glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-[1.75rem] blur-2xl opacity-50 group-hover:opacity-90 transition-opacity duration-700" />

      <div className="relative bg-card border border-border rounded-[1.5rem] overflow-hidden">
        {/* Foto - menor */}
        <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-gradient-to-br from-primary/20 to-card">
          <Image
            src="/yuri-portrait.webp"
            alt="Yuri Loureiro"
            fill
            sizes="(max-width: 1024px) 100vw, 320px"
            priority
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card via-card/40 to-transparent" />

          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground">
              {c.status_value}
            </span>
          </div>

          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary/15 backdrop-blur-md border border-primary/30 inline-flex items-center justify-center">
            <Sparkles size={11} className="text-primary" />
          </div>
        </div>

        {/* Info compacto */}
        <div className="px-4 pt-3 pb-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary mb-2">
            {c.eyebrow}
          </p>

          <h3 className="font-mono text-lg font-bold tracking-tight text-foreground leading-tight">
            Yuri Loureiro
          </h3>
          <p className="font-mono text-[11px] text-muted mb-3">{t.hero.role}</p>

          {/* Grid compacto */}
          <div className="grid grid-cols-2 gap-2 mb-3 text-[10px]">
            <div className="flex items-start gap-1.5">
              <MapPin size={10} className="text-primary mt-0.5 shrink-0" />
              <div className="min-w-0">
                <p className="font-mono uppercase tracking-[0.15em] text-muted-dark text-[8px]">
                  {c.location}
                </p>
                <p className="text-foreground truncate">{c.location_value}</p>
              </div>
            </div>
            <div className="flex items-start gap-1.5">
              <Globe size={10} className="text-primary mt-0.5 shrink-0" />
              <div className="min-w-0">
                <p className="font-mono uppercase tracking-[0.15em] text-muted-dark text-[8px]">
                  {c.languages}
                </p>
                <p className="text-foreground truncate">{c.languages_value}</p>
              </div>
            </div>
          </div>

          {/* Ações compactas */}
          <div className="flex flex-col gap-1.5">
            <Magnetic strength={0.15}>
              <a
                href="/cv-yuri-loureiro.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 w-full font-mono text-[9px] uppercase tracking-[0.18em] font-bold px-3 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                <span>{c.download_cv}</span>
                <Download size={11} />
              </a>
            </Magnetic>
            <Magnetic strength={0.12}>
              <a
                href="#contact"
                className="flex items-center justify-between gap-2 w-full font-mono text-[9px] uppercase tracking-[0.18em] font-bold px-3 py-2.5 rounded-full border border-border text-foreground hover:bg-card-hover transition-colors"
              >
                <span>{c.schedule_call}</span>
                <Calendar size={11} />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}
