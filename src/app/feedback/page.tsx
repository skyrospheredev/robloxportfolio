import type { Metadata } from "next";
import { FeedbackForm } from "@/components/FeedbackForm";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Feedback",
  description: "What players, teammates and clients say, plus a form to leave your own feedback.",
};

export default function FeedbackPage() {
  return (
    <>
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
      <section className="section section--alt" aria-labelledby="leave-heading">
        <div className="container">
          <div className="section-heading">
            <h2 id="leave-heading">Leave feedback</h2>
            <p className="lead">Played something I made or worked with me? Tell me how it went.</p>
          </div>
          <FeedbackForm />
        </div>
      </section>
    </>
  );
}
