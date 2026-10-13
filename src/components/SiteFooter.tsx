import { profile } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <ul className="link-row" aria-label="Links">
          <li>
            <a href={profile.robloxProfile} target="_blank" rel="noopener noreferrer">
              Roblox<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
