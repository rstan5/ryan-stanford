import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";
import { ProjectMeta } from "@/components/ProjectMeta";
import { ProjectStage, type ProjectPresentation } from "@/components/ProjectVisual";
import type { Project } from "@/data/projects";

function ProjectCopy({
  project,
  index,
  titleClassName,
}: {
  project: Project;
  index: number;
  titleClassName: string;
}) {
  return (
    <div>
      <p className="section-label">{String(index + 1).padStart(2, "0")}</p>
      <h3
        id={`project-${project.slug}`}
        className={titleClassName}
      >
        {project.name}
      </h3>
      {project.tagline ? (
        <p className="mt-4 max-w-md font-serif text-[clamp(1.45rem,2.3vw,2rem)] leading-snug tracking-[-0.02em]">
          {project.tagline}
        </p>
      ) : null}
      <p
        className={`max-w-md text-[17px] leading-7 text-soft ${project.tagline ? "mt-4" : "mt-5"}`}
      >
        {project.description}
      </p>
      <div className="mt-6">
        <ProjectMeta project={project} />
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
        <ArrowLink href={`/projects/${project.slug}`}>View project</ArrowLink>
      </div>
    </div>
  );
}

function ProjectMedia({
  project,
  presentation,
  priority = false,
}: {
  project: Project;
  presentation: ProjectPresentation;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View ${project.name}`}
      className="block"
    >
      <ProjectStage project={project} presentation={presentation} priority={priority} decorative />
    </Link>
  );
}

export function ProjectShowcase({
  project,
  index,
  variant,
  reverse = false,
}: {
  project: Project;
  index: number;
  variant: "feature" | "split" | "band";
  reverse?: boolean;
}) {
  const titleClassName =
    variant === "feature"
      ? "mt-4 text-[clamp(3rem,5.2vw,4.85rem)] font-medium leading-[0.92] tracking-[-0.045em]"
      : "mt-4 text-[clamp(2.35rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.04em]";

  if (variant === "band") {
    return (
      <article className="group" aria-labelledby={`project-${project.slug}`}>
        <ProjectMedia project={project} presentation="lifestyle" />
        <div className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="section-label">{String(index + 1).padStart(2, "0")}</p>
            <h3 id={`project-${project.slug}`} className={titleClassName}>
              {project.name}
            </h3>
            {project.tagline ? (
              <p className="mt-4 max-w-md font-serif text-[clamp(1.45rem,2.3vw,2rem)] leading-snug tracking-[-0.02em]">
                {project.tagline}
              </p>
            ) : null}
            <p className="mt-5 max-w-md text-[17px] leading-7 text-soft lg:hidden">
              {project.description}
            </p>
            <div className="mt-6">
              <ProjectMeta project={project} />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 lg:hidden">
              <ArrowLink href={`/projects/${project.slug}`}>View project</ArrowLink>
            </div>
          </div>
          <div className="hidden lg:col-span-6 lg:col-start-7 lg:block">
            <p className="max-w-md text-[17px] leading-7 text-soft">{project.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <ArrowLink href={`/projects/${project.slug}`}>View project</ArrowLink>
            </div>
          </div>
        </div>
      </article>
    );
  }

  const mediaClass =
    variant === "feature"
      ? "lg:order-2 lg:col-span-8"
      : reverse
        ? "lg:order-1 lg:col-span-7"
        : "lg:order-2 lg:col-span-7";
  const copyClass =
    variant === "feature"
      ? "lg:order-1 lg:col-span-4"
      : reverse
        ? "lg:order-2 lg:col-span-5"
        : "lg:order-1 lg:col-span-5";

  return (
    <article
      className="group grid items-start gap-7 sm:gap-8 lg:grid-cols-12 lg:gap-12"
      aria-labelledby={`project-${project.slug}`}
    >
      <div className={mediaClass}>
        <ProjectMedia
          project={project}
          presentation={variant === "feature" ? "composition" : "screen"}
          priority={variant === "feature"}
        />
      </div>
      <div className={copyClass}>
        <ProjectCopy
          project={project}
          index={index}
          titleClassName={titleClassName}
        />
      </div>
    </article>
  );
}
