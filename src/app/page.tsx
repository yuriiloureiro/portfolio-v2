import Hero from "@/src/components/sections/Hero";
import CodeBlock from "@/src/components/layout/CodeBlock";
import FadeIn from "@/src/components/animations/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Placeholders das próximas seções (vamos construir uma a uma) */}
      <CodeBlock comment="featured work" startLine={50} id="work" compact>
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            // 04 selected projects
          </p>
          <p className="text-muted">
            ⏳ Seção Featured Work será construída no próximo passo.
          </p>
        </FadeIn>
      </CodeBlock>

      <CodeBlock comment="about me section" startLine={90} id="about" compact>
        <FadeIn>
          <p className="text-muted">⏳ Seção About será construída em breve.</p>
        </FadeIn>
      </CodeBlock>

      <CodeBlock comment="tech stack" startLine={130} id="stack" compact>
        <FadeIn>
          <p className="text-muted">⏳ Tech Stack em breve.</p>
        </FadeIn>
      </CodeBlock>

      <CodeBlock
        comment="certifications"
        startLine={170}
        id="certifications"
        compact
      >
        <FadeIn>
          <p className="text-muted">⏳ Certifications em breve.</p>
        </FadeIn>
      </CodeBlock>
    </>
  );
}
