import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Page not found</h1>
        <p className="lead">That page doesn’t exist. Try the projects page instead.</p>
        <div className="btn-row">
          <ButtonLink href="/projects">View projects</ButtonLink>
        </div>
      </div>
    </section>
  );
}
