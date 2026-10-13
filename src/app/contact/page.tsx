import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { pricing, profile } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} about a Roblox project.`,
};

type Props = { searchParams: Promise<{ package?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { package: packageId } = await searchParams;
  const pkg = pricing.find((p) => p.id === packageId);
  const defaultMessage = pkg ? `I’m interested in the ${pkg.name} package. ` : "";

  return (
    <section className="section">
      <div className="container two-col">
        <div>
          <SectionHeading level="h1" eyebrow="Contact" title="Let’s work together">
            Tell me about your project and I’ll reply by email.
          </SectionHeading>
          <ContactForm key={defaultMessage} defaultMessage={defaultMessage} />
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
