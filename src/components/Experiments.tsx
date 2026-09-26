import { Reveal } from "@/components/Reveal";
import { getExperiments } from "@/data/projects";

export function Experiments() {
  const experiments = getExperiments();

  return (
    <section className="shell scroll-mt-20 py-14 md:py-20">
      <Reveal>
        <p className="section-label">Experiments</p>
        <h2 className="mt-3 max-w-xl text-[clamp(1.7rem,2.6vw,2.15rem)] font-medium leading-tight tracking-[-0.035em]">
          Things I’ve explored
        </h2>
        <p className="mt-4 max-w-lg text-[17px] leading-7 text-soft">
          Not everything I make is a company. These are ideas I’ve spent time on.
        </p>
        <ul className="mt-8 border-t border-line">
          {experiments.map((experiment) => {
            const externalUrl = experiment.externalUrl?.trim();

            return (
            <li
              key={experiment.slug}
              className={`experiment-row grid gap-2 border-b border-line py-5 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-6${externalUrl ? " is-linked" : ""}`}
            >
              <h3 className="experiment-name flex items-baseline gap-3 text-[clamp(1.35rem,2vw,1.65rem)] font-medium tracking-[-0.03em] sm:col-span-4">
                {externalUrl ? (
                  <a
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-inherit"
                  >
                    {experiment.name}
                  </a>
                ) : (
                  <span>{experiment.name}</span>
                )}
                {externalUrl ? (
                  <span aria-hidden="true" className="experiment-arrow">
                    →
                  </span>
                ) : null}
              </h3>
              <p className="max-w-xl text-[17px] leading-7 text-soft sm:col-span-7 sm:col-start-6">
                {experiment.description}
              </p>
            </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
