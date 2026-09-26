import { ProfileLink } from "@/components/ProfileLink";
import { Reveal } from "@/components/Reveal";
import { site, visibleSocialLinks } from "@/data/site";

export function Contact() {
  const links = visibleSocialLinks();

  return (
    <section id="contact" className="shell scroll-mt-20 pt-6 pb-16 md:pt-8 md:pb-24">
      <Reveal>
        <h2 className="max-w-[14ch] font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[0.98] tracking-[-0.03em]">
          {site.contactHeading}
        </h2>
        {links.length > 0 ? (
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <ProfileLink link={link} className="text-lg" />
              </li>
            ))}
          </ul>
        ) : null}
      </Reveal>
    </section>
  );
}
