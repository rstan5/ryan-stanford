import { Reveal } from "@/components/Reveal";

const categories = [
  {
    title: "Languages & Frameworks",
    technologies: ["TypeScript", "JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Libraries & Development",
    technologies: ["Zustand", "Zod", "Motion", "shadcn/ui", "Git", "GitHub"],
  },
  {
    title: "AI & Platforms",
    technologies: ["Cursor", "Claude", "OpenAI API", "Vercel", "Stripe"],
  },
] as const;

export function ToolsAndTechnologies() {
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="shell scroll-mt-20 pt-10 pb-7 md:pt-14 md:pb-10"
    >
      <Reveal>
        <div className="border-t border-line pt-8 md:pt-10">
          <h2
            id="tools-heading"
            className="text-[clamp(1.85rem,3vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.04em]"
          >
            Tools &amp; Technologies
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-soft">
            Technologies I&apos;ve worked with while building and developing software products through an AI-assisted development workflow.
          </p>
          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-3 md:gap-10">
            {categories.map((category) => (
              <div key={category.title}>
                <h3 className="section-label">{category.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium tracking-[-0.01em] text-soft transition-colors duration-200 hover:border-ink/30 hover:text-ink motion-reduce:transition-none"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-muted md:mt-10">
            My development workflow combines product planning, design, testing, and iteration with AI-assisted coding tools such as Cursor and Claude.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
