import { ProfileLink } from "@/components/ProfileLink";
import { site, visibleSocialLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const links = visibleSocialLinks({ omit: ["phone"] });

  return (
    <footer id="site-footer" className="border-t border-line">
      <div className="shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          <span className="text-ink">{site.name}</span>
          <span className="px-2" aria-hidden="true">
            ·
          </span>
          <time dateTime={String(year)}>{year}</time>
        </p>
        {links.length > 0 ? (
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <ProfileLink link={link} className="text-sm" />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </footer>
  );
}
