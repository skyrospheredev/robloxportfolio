import { contactLinks } from "@/data/content";
import { ButtonLink } from "./ButtonLink";

export function ContactButtons() {
  return (
    <div>
      <div className="btn-row">
        <ButtonLink href={contactLinks.gmailCompose}>Email me</ButtonLink>
        <ButtonLink href={contactLinks.discord} variant="secondary">
          Discord
        </ButtonLink>
      </div>
      <p className="muted">
        “Email me” opens a new Gmail message addressed to me. “Discord” opens my Discord profile so you can send a message.
      </p>
    </div>
  );
}
