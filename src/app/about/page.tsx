import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { about, profile } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description: `Background, skills and experience of ${profile.name}, a Roblox developer.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeading level="h1" eyebrow="About" title="Background" />
          <div className="stack">
            {about.background.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="skills-heading">
        <div className="container two-col">
          <div>
            <h2 id="skills-heading">Skills</h2>
            <div className="stack">
              {about.skills.map((group) => (
                <div key={group.group}>
                  <h3>{group.group}</h3>
                  <ul className="tags">
                    {group.items.map((item) => (
                      <li className="tag" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 id="tools-heading">Tools</h2>
            <ul className="tags" aria-labelledby="tools-heading">
              {about.tools.map((tool) => (
                <li className="tag" key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="experience-heading">
        <div className="container">
          <div className="section-heading">
            <h2 id="experience-heading">Experience</h2>
          </div>
          <ol className="timeline">
            {about.experience.map((job) => (
              <li key={`${job.role}-${job.period}`}>
                <h3>{job.role}</h3>
                <p className="muted">
                  {job.org} · {job.period}
                </p>
                <p>{job.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
