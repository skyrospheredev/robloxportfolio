import type { Metadata } from "next";
import { ContactButtons } from "@/components/ContactButtons";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} about a Roblox project.`,
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container two-col">
        <div>
          <SectionHeading level="h1" eyebrow="Contact" title="Let’s work together">
            Tell me about your project and I’ll reply.
          </SectionHeading>
          <ContactButtons />
        </div>
        <div>
          <h2>Find me elsewhere</h2>
          <ul className="stack" aria-label="Contact links">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.robloxProfile} target="_blank" rel="noopener noreferrer">
                Roblox profile<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            {profile.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
