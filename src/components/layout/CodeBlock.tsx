"use client";

import { ReactNode } from "react";

interface CodeBlockProps {
  comment: string;
  startLine?: number;
  id?: string;
  children: ReactNode;
  className?: string;
  /** Faz a seção ocupar a altura da viewport (ideal pro Hero) */
  fullHeight?: boolean;
  /** Padding vertical compacto */
  compact?: boolean;
}

export default function CodeBlock({
  comment,
  startLine = 1,
  id,
  children,
  className = "",
  fullHeight = false,
  compact = false,
}: CodeBlockProps) {
  const padding = compact
    ? "py-8 lg:py-12"
    : fullHeight
      ? "py-6 lg:py-8"
      : "py-16 lg:py-20";

  const minH = fullHeight ? "min-h-[calc(100vh-2.25rem)]" : "min-h-[40vh]";

  return (
    <section
      id={id}
      className={`relative w-full border-b border-border ${className}`}
    >
      <div className={`flex ${minH}`}>
        {/* Régua de números */}
        <div
          aria-hidden="true"
          className="hidden md:block w-14 shrink-0 border-r border-border/40 bg-card/20 relative"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0, transparent 23px, rgba(255,255,255,0.02) 23px, rgba(255,255,255,0.02) 24px)",
          }}
        >
          <div className="sticky top-9 pt-8 pr-3 flex flex-col items-end font-mono text-[10px] leading-[1.5] text-muted-dark/60 select-none">
            {Array.from({ length: 50 }, (_, i) => (
              <span key={i}>{String(startLine + i).padStart(2, "0")}</span>
            ))}
          </div>
        </div>

        {/* Conteúdo */}
        <div
          className={`flex-1 min-w-0 px-6 lg:px-12 ${padding} flex flex-col justify-center`}
        >
          {/* Comentário HTML */}
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em]">
            <span className="text-muted-dark">&lt;!--</span>
            <span className="text-success px-2">{comment}</span>
            <span className="text-muted-dark">--&gt;</span>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
