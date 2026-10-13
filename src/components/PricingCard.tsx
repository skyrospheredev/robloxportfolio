import type { PricingPackage } from "@/data/content";
import { ButtonLink } from "./ButtonLink";

export function PricingCard({ pkg }: { pkg: PricingPackage }) {
  return (
    <article className={`card${pkg.featured ? " price-card--featured" : ""}`}>
      <div className="card__body">
        {pkg.featured ? <span className="badge">Most popular</span> : null}
        <h3>{pkg.name}</h3>
        <p className="price">
          {pkg.price} <small>{pkg.unit}</small>
        </p>
        <p className="muted">{pkg.description}</p>
        <ul className="check-list" aria-label={`${pkg.name} includes`}>
          {pkg.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="card__actions">
          <ButtonLink href={"/contact"} variant={pkg.featured ? "primary" : "secondary"}>
            Get started<span className="sr-only"> with {pkg.name}</span>
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
