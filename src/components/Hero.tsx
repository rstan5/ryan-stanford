import { ProfileLink } from "@/components/ProfileLink";
import { getSocial, site } from "@/data/site";

export function Hero() {
  const linkedin = getSocial("linkedin");

  return (
    <section className="shell flex min-h-[100svh] flex-col justify-center pt-16 pb-[16vh] lg:pb-[20vh]">
      <div className="py-16 md:py-20">
        <h1>
          <span
            className="enter-load block text-[clamp(2.5rem,6.4vw,5.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.045em]"
          >
            {site.name}
          </span>
          <span className="enter-load mt-6 block max-w-[12ch] font-serif text-[clamp(2.15rem,4.6vw,3.7rem)] leading-[1.02] tracking-[-0.03em] normal-case [animation-delay:90ms]">
            {site.statementLead} <em className="italic">{site.statementEmphasis}</em>
          </span>
        </h1>
        <p className="enter-load mt-8 max-w-xl text-[17px] leading-8 text-soft [animation-delay:170ms] md:text-lg">
          {site.summary}
        </p>
        <div className="enter-load mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 [animation-delay:250ms]">
          <a href="#work" className="btn">
            View my work
          </a>
          {linkedin ? <ProfileLink link={linkedin} /> : null}
        </div>
      </div>
    </section>
  );
}
