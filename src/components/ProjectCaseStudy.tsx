import Image from "next/image";
import { ArrowLink } from "@/components/ArrowLink";
import { ProjectMeta } from "@/components/ProjectMeta";
import { hasProjectImagery, ProjectStage } from "@/components/ProjectVisual";
import type { Project, ProjectContent, ProjectScreenshot } from "@/data/projects";

const narrative = [
  { key: "idea", label: "The idea" },
  { key: "built", label: "What I built" },
  { key: "role", label: "My role" },
  { key: "current", label: "Where it is now" },
] as const satisfies ReadonlyArray<{
  key: keyof ProjectContent;
  label: string;
}>;

function ScreenshotFigure({
  shot,
  portrait = false,
}: {
  shot: ProjectScreenshot;
  portrait?: boolean;
}) {
  return (
    <figure className={portrait ? "w-[min(100%,11.5rem)]" : "w-full"}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width ?? 1600}
        height={shot.height ?? 1000}
        sizes={portrait ? "184px" : "(min-width: 1024px) 640px, 100vw"}
        className="h-auto w-full rounded-xl ring-1 ring-black/10"
      />
      {shot.caption ? (
        <figcaption className="mt-3 text-sm text-muted">{shot.caption}</figcaption>
      ) : null}
    </figure>
  );
}

function filled(url?: string) {
  const value = url?.trim();
  return value ? value : undefined;
}

function ProjectLinks({ project }: { project: Project }) {
  const liveUrl = filled(project.liveUrl);
  const githubUrl = filled(project.githubUrl);
  if (!liveUrl && !githubUrl) return null;

  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
      {liveUrl ? (
        <ArrowLink href={liveUrl} external icon="↗">
          Visit product
        </ArrowLink>
      ) : null}
      {githubUrl ? (
        <ArrowLink href={githubUrl} external icon="↗">
          View GitHub
        </ArrowLink>
      ) : null}
    </div>
  );
}

function CaseSection({
  title,
  children,
  pending = false,
}: {
  title: string;
  children: React.ReactNode;
  pending?: boolean;
}) {
  return (
    <section className="grid gap-3 border-b border-line py-6 sm:grid-cols-12 sm:items-baseline sm:gap-8 md:py-8">
      <h2 className="text-[15px] font-medium tracking-[-0.02em] sm:col-span-4">
        {title}
      </h2>
      <div
        className={
          pending
            ? "text-muted sm:col-span-7 sm:col-start-6"
            : "max-w-xl text-[17px] leading-8 text-soft sm:col-span-7 sm:col-start-6"
        }
      >
        {children}
      </div>
    </section>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const content = project.content;
  const overview = content.overview ?? project.description;
  const screenshots = content.screenshots ?? [];

  return (
    <article className="shell pb-24 pt-28 md:pb-32 md:pt-32">
      <ArrowLink href="/#work">Work</ArrowLink>
      <header className="mt-10 max-w-4xl">
        <h1 className="text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.9] tracking-[-0.05em]">
          {project.name}
        </h1>
        {project.tagline ? (
          <p className="mt-6 max-w-xl font-serif text-[clamp(1.6rem,3vw,2.35rem)] leading-snug tracking-[-0.02em]">
            {project.tagline}
          </p>
        ) : (
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-soft md:text-lg">
            {project.description}
          </p>
        )}
        <div className="mt-8">
          <ProjectMeta project={project} />
        </div>
        <ProjectLinks project={project} />
      </header>

      <figure className="mt-10 md:mt-12">
        <ProjectStage project={project} priority />
        {hasProjectImagery(project) ? null : (
          <figcaption className="mt-4 text-sm text-muted">
            Product imagery will be placed here.
          </figcaption>
        )}
      </figure>

      <div className="mt-16 border-t border-line md:mt-20">
        {overview ? (
          <CaseSection title="Overview">
            <p>{overview}</p>
          </CaseSection>
        ) : null}

        {narrative.map((section) => {
          const value = content[section.key];
          if (typeof value === "string" && value.trim()) {
            return (
              <CaseSection key={section.key} title={section.label}>
                <p>{value}</p>
              </CaseSection>
            );
          }
          return (
            <CaseSection key={section.key} title={section.label} pending>
              <p>To be written.</p>
            </CaseSection>
          );
        })}

        {screenshots.length > 0 ? (
          <CaseSection title="Product screenshots">
            <div className="grid gap-8">
              {screenshots
                .filter((shot) => shot.format !== "portrait")
                .map((shot) => (
                  <ScreenshotFigure key={shot.src} shot={shot} />
                ))}
              <div className="flex flex-wrap items-end gap-4">
                {screenshots
                  .filter((shot) => shot.format === "portrait")
                  .map((shot) => (
                    <ScreenshotFigure key={shot.src} shot={shot} portrait />
                  ))}
              </div>
            </div>
          </CaseSection>
        ) : null}
      </div>
    </article>
  );
}
