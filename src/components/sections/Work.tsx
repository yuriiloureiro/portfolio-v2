"use client";

import { useLanguage } from "@/src/context/LanguageContext";
import CodeBlock from "@/src/components/layout/CodeBlock";
import WorkCard from "@/src/components/work/WorkCard";
import FadeIn from "@/src/components/animations/FadeIn";
import { getFeaturedProjects } from "@/src/lib/projects";

export default function Work() {
  const { t } = useLanguage();
  const projects = getFeaturedProjects();

  return (
    <CodeBlock comment="featured work" startLine={50} id="work">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
            // {projects.length.toString().padStart(2, "0")} selected projects
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground leading-[1.05] mb-5 text-balance">
            {t.work.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted text-base md:text-lg leading-relaxed text-pretty">
            {t.work.subtitle}
          </p>
        </FadeIn>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {projects.map((project, i) => (
          <WorkCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </CodeBlock>
  );
}
