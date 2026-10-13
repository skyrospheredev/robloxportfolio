import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Roblox games and systems I have built.",
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading level="h1" eyebrow="Work" title="Projects">
          Games and systems I have built, with my role on each.
        </SectionHeading>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
