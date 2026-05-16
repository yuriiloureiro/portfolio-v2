"use client";

import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";
import type { Project } from "@/src/lib/projects";
import FadeIn from "@/src/components/animations/FadeIn";

interface ProjectBodyProps {
  project: Project;
}

export default function ProjectBody({ project }: ProjectBodyProps) {
  const { language, t } = useLanguage();
  const content = project.content[language];

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* Screenshot grande */}
      <FadeIn>
        <div className="relative aspect-[4/3] md:aspect-[16/10] w-full rounded-3xl overflow-hidden bg-background border border-border">
          <Image
            src={project.thumb}
            alt={project.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      </FadeIn>

      {/* Stack */}
      <div>
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
            // {t.work.stack_label.toLowerCase()}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-full bg-card border border-border text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Desafio + Solução */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
            // 01. {t.work.challenge_label.toLowerCase()}
          </p>
          <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-5">
            {t.work.challenge_label}
          </h3>
          <p className="text-muted text-base lg:text-lg leading-relaxed text-pretty">
            {content.challenge}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
            // 02. {t.work.solution_label.toLowerCase()}
          </p>
          <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-5">
            {t.work.solution_label}
          </h3>
          <p className="text-muted text-base lg:text-lg leading-relaxed text-pretty">
            {content.solution}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
