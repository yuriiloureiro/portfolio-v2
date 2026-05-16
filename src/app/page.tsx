import Hero from "@/src/components/sections/Hero";
import Work from "@/src/components/sections/Work";
import CodeBlock from "@/src/components/layout/CodeBlock";
import FadeIn from "@/src/components/animations/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />

      <CodeBlock comment="about me section" startLine={120} id="about" compact>
        <FadeIn>
          <p className="text-muted">⏳ Seção About em breve.</p>
        </FadeIn>
      </CodeBlock>

      <CodeBlock comment="tech stack" startLine={160} id="stack" compact>
        <FadeIn>
          <p className="text-muted">⏳ Tech Stack em breve.</p>
        </FadeIn>
      </CodeBlock>

      <CodeBlock
        comment="certifications"
        startLine={200}
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
