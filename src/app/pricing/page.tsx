import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeading } from "@/components/SectionHeading";
import { pricing } from "@/data/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Service packages for Roblox game development, scripting, UI and debugging.",
};

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading level="h1" eyebrow="Services" title="Pricing">
          Clear packages with what’s included. Need something different? Get in touch for a custom quote.
        </SectionHeading>
        <div className="grid grid--pricing">
          {pricing.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div className="btn-row">
          <ButtonLink href="/contact">Request a quote</ButtonLink>
        </div>
      </div>
    </section>
  );
}
