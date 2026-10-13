import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/content";

export function ProjectCard({ project }: { project: Project }) {
  const external = project.gameUrl
    ? { href: project.gameUrl, label: "Play on Roblox" }
    : project.caseStudy
      ? { href: project.caseStudy, label: "Read case study" }
      : null;

  return (
    <article className="card">
      <Image
        className="card__media"
        src={project.thumbnail.src}
        alt={project.thumbnail.alt}
        width={800}
        height={450}
        sizes="(min-width: 1100px) 340px, (min-width: 600px) 45vw, 100vw"
      />
      <div className="card__body">
        <h3 className="card__title">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="role">Role: {project.role}</p>
        <p>{project.summary}</p>
        <div className="card__actions">
          <Link href={`/projects/${project.slug}`}>
            View details<span className="sr-only"> for {project.title}</span>
          </Link>
          {external ? (
            <a href={external.href} target="_blank" rel="noopener noreferrer">
              {external.label}
              <span className="sr-only">
                {" "}
                for {project.title} (opens in a new tab)
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
