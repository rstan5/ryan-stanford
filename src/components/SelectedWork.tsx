import { ProjectShowcase } from "@/components/ProjectShowcase";
import { presentationFor } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { getCaseStudies } from "@/data/projects";

export function SelectedWork() {
  const studies = getCaseStudies();

  return (
    <section id="work" className="shell scroll-mt-20 pt-4 pb-6 md:pt-8 md:pb-8">
      <h2 className="section-label">Selected work</h2>
      <div className="mt-8 flex flex-col gap-16 md:mt-10 md:gap-24">
        {studies.map((project, index) => {
          const variant =
            index === 0
              ? "feature"
              : index === studies.length - 1 && presentationFor(project) === "lifestyle"
                ? "band"
                : "split";

          return (
            <Reveal key={project.slug}>
              <ProjectShowcase
                project={project}
                index={index}
                variant={variant}
                reverse={index % 2 === 0}
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
