"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Layers, User } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "@/src/context/LanguageContext";
import type { Project } from "@/src/lib/projects";
import FadeIn from "@/src/components/animations/FadeIn";
import RevealText from "@/src/components/animations/RevealText";
import Magnetic from "@/src/components/animations/Magnetic";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const { language, t } = useLanguage();
  const content = project.content[language];
  const typeLabel = t.work.types[project.type];

  return (
    <div>
      {/* Back link */}
      <FadeIn>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted hover:text-primary transition-colors mb-10 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          {t.work.back_to_work}
        </Link>
      </FadeIn>

      {/* Eyebrow */}
      <FadeIn delay={0.1}>
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6">
          // case_study / {project.slug}
        </p>
      </FadeIn>

      {/* Title */}
      <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02] text-foreground text-balance mb-6">
        <RevealText text={project.title} delayPerChar={0.04} splitBy="word" />
      </h1>

      {/* Tagline */}
      <FadeIn delay={0.6}>
        <p className="text-muted text-lg md:text-xl leading-relaxed max-w-3xl mb-10 text-pretty">
          {content.tagline}
        </p>
      </FadeIn>

      {/* Meta + CTA */}
      <FadeIn delay={0.75}>
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-border">
          {/* Meta */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <MetaItem
              icon={<User size={12} />}
              label={t.work.client_label}
              value={project.client}
            />
            <MetaItem
              icon={<Calendar size={12} />}
              label={t.work.year_label}
              value={project.year.toString()}
            />
            <MetaItem
              icon={<Layers size={12} />}
              label={t.work.type_label}
              value={typeLabel}
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            {project.repoUrl && (
              <Magnetic strength={0.2}>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-full bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <FaGithub size={12} />
                  {t.work.view_code}
                </a>
              </Magnetic>
            )}

            {project.liveUrl && (
              <Magnetic strength={0.2}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
                >
                  {t.work.view_live}
                  <ExternalLink size={12} />
                </a>
              </Magnetic>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-primary mb-1">
        {icon}
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-dark">
          {label}
        </span>
      </div>
      <p className="font-mono text-sm text-foreground">{value}</p>
    </div>
  );
}
