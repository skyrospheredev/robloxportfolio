import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { projects } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="section">
      <div className="container stack">
        <p className="crumbs">
          <Link href="/projects">← All projects</Link>
        </p>
        <header>
          <p className="eyebrow">{project.role}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
          <ul className="tags" aria-label="Technologies">
            {project.tags.map((t) => (
              <li className="tag" key={t}>
                {t}
              </li>
            ))}
          </ul>
          <div className="btn-row">
            {project.gameUrl ? <ButtonLink href={project.gameUrl}>Play on Roblox</ButtonLink> : null}
            {project.caseStudy ? (
              <ButtonLink href={project.caseStudy} variant="secondary">
                Read case study
              </ButtonLink>
            ) : null}
          </div>
        </header>

        {project.videoUrl ? (
          <iframe
            className="video"
            src={project.videoUrl}
            title={`${project.title} video`}
            loading="lazy"
            allowFullScreen
          />
        ) : null}

        <div className="shots">
          {project.screenshots.map((s) => (
            <Image key={s.src + s.alt} src={s.src} alt={s.alt} width={1280} height={720} sizes="(min-width: 700px) 50vw, 100vw" />
          ))}
        </div>

        <section aria-labelledby="built-heading">
          <h2 id="built-heading">What I built</h2>
          <ul className="check-list">
            {project.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="outcome-heading">
          <h2 id="outcome-heading">Outcome</h2>
          <p>{project.outcome}</p>
        </section>
      </div>
    </article>
  );
}
