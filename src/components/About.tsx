import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="shell scroll-mt-20 pt-10 pb-7 md:pt-14 md:pb-10">
      <Reveal>
        <p className="section-label">About</p>
        <div className="mt-5 grid items-start gap-5 lg:grid-cols-12 lg:gap-10">
          <h2 className="text-[clamp(1.85rem,3vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.04em] lg:col-span-4">
            {site.aboutHeading}
          </h2>
          <div className="flex max-w-xl flex-col gap-4 text-[17px] leading-8 text-soft lg:col-span-7 lg:col-start-6">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
