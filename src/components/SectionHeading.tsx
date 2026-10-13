import type { ReactNode } from "react";

type Props = {
  title: string;
  eyebrow?: string;
  /** Use "h1" for the page's main heading and "h2" for sections. */
  level?: "h1" | "h2";
  children?: ReactNode;
};

export function SectionHeading({ title, eyebrow, level = "h2", children }: Props) {
  const Heading = level;
  return (
    <header className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading>{title}</Heading>
      {children ? <p className="lead">{children}</p> : null}
    </header>
  );
}
