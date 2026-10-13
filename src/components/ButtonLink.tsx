import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export function ButtonLink({ href, variant = "primary", children }: Props) {
  const className = `btn btn--${variant}`;
  const external = /^https?:\/\//.test(href);
  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
