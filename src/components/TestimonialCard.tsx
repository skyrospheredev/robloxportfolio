import type { Testimonial } from "@/data/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="quote">
      <blockquote>“{testimonial.quote}”</blockquote>
      <figcaption>
        {testimonial.author}
        <span>{testimonial.relation}</span>
      </figcaption>
    </figure>
  );
}
