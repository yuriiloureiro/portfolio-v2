"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/src/lib/projects";
import { useLanguage } from "@/src/context/LanguageContext";
import { FaGithub } from "react-icons/fa";

interface WorkCardProps {
  project: Project;
  index: number;
}

export default function WorkCard({ project, index }: WorkCardProps) {
  const { language, t } = useLanguage();
  const content = project.content[language];
  const typeLabel = t.work.types[project.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative block bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-colors duration-500"
      >
        {/* Thumb */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
          <Image
            src={project.thumb}
            alt={`${project.title} — ${content.tagline}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />

          {/* Overlay sutil no hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Badge tipo no canto superior */}
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
              {typeLabel}
            </span>
          </div>

          {/* Ícones no hover */}
          <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            {project.repoUrl && (
              <span className="w-10 h-10 rounded-full bg-card border border-border text-foreground inline-flex items-center justify-center">
                <FaGithub size={14} />
              </span>
            )}
            <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-baseline justify-between gap-4 mb-2">
            <h3 className="font-mono text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-muted-dark shrink-0">
              {project.year}
            </span>
          </div>

          <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
            {content.tagline}
          </p>

          {/* Stack chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-1 rounded-md bg-background border border-border text-muted"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-1 rounded-md text-muted-dark">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
