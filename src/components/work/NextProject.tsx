"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import type { Project } from "@/src/lib/projects";

interface NextProjectProps {
  project: Project;
}

export default function NextProject({ project }: NextProjectProps) {
  const { language, t } = useLanguage();
  const content = project.content[language];

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-colors"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Info */}
        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
              // {t.work.next_project.toLowerCase()}
            </p>
            <h3 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors mb-4">
              {project.title}
            </h3>
            <p className="text-muted text-base leading-relaxed line-clamp-2 max-w-md">
              {content.tagline}
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground group-hover:text-primary transition-colors">
            <span>{t.work.view_case}</span>
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </div>
        </div>

        {/* Thumb */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[260px] overflow-hidden bg-background">
          <Image
            src={project.thumb}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </Link>
  );
}
