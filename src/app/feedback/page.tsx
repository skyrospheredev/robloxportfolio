import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Feedback",
  description: "What players, teammates and clients say about working with me.",
};

export default function FeedbackPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading level="h1" eyebrow="Feedback" title="What people say">
          Words from players, teammates and clients.
        </SectionHeading>
        <div className="grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
