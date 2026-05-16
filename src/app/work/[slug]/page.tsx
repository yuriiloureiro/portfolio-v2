import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProjectBySlug,
  getAllSlugs,
  getNextProject,
} from "@/src/lib/projects";
import CodeBlock from "@/src/components/layout/CodeBlock";
import ProjectHero from "@/src/components/work/ProjectHero";
import ProjectBody from "@/src/components/work/ProjectBody";
import NextProject from "@/src/components/work/NextProject";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Gera páginas estáticas pra todos os projetos
export async function generateStaticParams() {
  return getAllSlugs().map((slug: string) => ({ slug }));
}

// Metadata dinâmica (SEO)
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Yuri Loureiro`,
    description: project.content.en.tagline,
    openGraph: {
      title: `${project.title} — Yuri Loureiro`,
      description: project.content.en.tagline,
      images: [project.thumb],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return (
    <>
      <CodeBlock
        comment={`case_study / ${project.slug}`}
        startLine={1}
        id="hero"
      >
        <ProjectHero project={project} />
      </CodeBlock>

      <CodeBlock comment="project body" startLine={40} id="body">
        <ProjectBody project={project} />
      </CodeBlock>

      <CodeBlock comment="next project" startLine={120} id="next" compact>
        <NextProject project={nextProject} />
      </CodeBlock>
    </>
  );
}
