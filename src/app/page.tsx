import { ButtonLink } from "@/components/ButtonLink";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, projects } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Roblox developer</p>
          <h1>{profile.name}</h1>
          <p className="lead">{profile.headline}</p>
          <p className="lead">{profile.bio}</p>
          <dl className="facts">
            <div>
              <dt>Main language</dt>
              <dd>{profile.mainLanguage}</dd>
            </div>
            <div>
              <dt>Years coding</dt>
              <dd>{profile.yearsCoding}</dd>
            </div>
          </dl>
          <div className="btn-row">
            <ButtonLink href="/projects">View projects</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact me
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="featured-heading">
        <div className="container">
          <div className="section-heading">
            <h2 id="featured-heading">Featured projects</h2>
          </div>
          <div className="grid">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="btn-row">
            <ButtonLink href="/projects" variant="secondary">
              See all projects
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
