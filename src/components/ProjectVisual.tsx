import Image from "next/image";
import type { Project, ProjectScreenshot } from "@/data/projects";

export type ProjectPresentation = "composition" | "screen" | "lifestyle";

type Shot = {
  src: string;
  alt: string;
  format?: ProjectScreenshot["format"];
  width?: number;
  height?: number;
};

export function presentationFor(project: Project): ProjectPresentation {
  if (project.slug === "seoully") return "composition";
  if (project.slug === "reef-chief") return "lifestyle";
  return "screen";
}

export function hasProjectImagery(project: Project) {
  return Boolean(project.image || (project.content.screenshots?.length ?? 0) > 0);
}

function collectShots(project: Project): Shot[] {
  const shots: Shot[] = [];
  if (project.image) {
    const listed = project.content.screenshots?.find((shot) => shot.src === project.image);
    shots.push({
      src: project.image,
      alt: project.imageAlt ?? listed?.alt ?? `${project.name} product image`,
      format: presentationFor(project) === "lifestyle" ? "lifestyle" : (listed?.format ?? "desktop"),
      width: listed?.width,
      height: listed?.height,
    });
  }
  for (const shot of project.content.screenshots ?? []) {
    if (shot.src === project.image) continue;
    shots.push(shot);
  }
  return shots;
}

function ShotFrame({
  shot,
  label,
  priority = false,
  decorative = false,
  tone = "light",
  sizes = "(min-width: 1024px) 48vw, 92vw",
}: {
  shot?: Shot;
  label: string;
  priority?: boolean;
  decorative?: boolean;
  tone?: "light" | "dark";
  sizes?: string;
}) {
  const bezel = tone === "dark" ? "bg-[#2c2b29]" : "bg-[#ddd9d2]";
  const framed = shot?.width && shot?.height;

  return (
    <div
      className={`overflow-hidden rounded-[0.9rem] p-1.5 sm:p-2 ${bezel} ${framed ? "" : "flex h-full min-h-0 flex-col"}`}
    >
      {framed ? (
        <Image
          src={shot.src}
          alt={decorative ? "" : shot.alt}
          width={shot.width}
          height={shot.height}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full rounded-[0.55rem]"
        />
      ) : (
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-[0.55rem] bg-[#f4f2ed]">
          {shot ? (
            <Image
              src={shot.src}
              alt={decorative ? "" : shot.alt}
              fill
              priority={priority}
              sizes={sizes}
              className="object-contain"
            />
          ) : (
            <span className="absolute bottom-2.5 left-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#141413]/40">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function CompositionStage({
  shots,
  priority,
  decorative,
}: {
  shots: Shot[];
  priority: boolean;
  decorative: boolean;
}) {
  const desktop =
    shots.find((shot) => shot.format === "desktop" || shot.format === "wide") ??
    shots.find((shot) => shot.format !== "portrait" && shot.format !== "lifestyle");
  const portraits = shots.filter((shot) => shot.format === "portrait");
  const extras = shots.filter((shot) => shot !== desktop && !portraits.includes(shot));
  const phones = (portraits.length > 0 ? portraits : extras).slice(0, 2);

  const framed = Boolean(desktop?.width && desktop?.height);

  return (
    <div className="relative bg-[#161615] p-3.5 sm:p-5 lg:p-7">
      <div className="relative flex flex-col gap-3.5 lg:block">
        <div className={`relative z-0 w-full ${framed ? "" : "aspect-[16/10]"}`}>
          <ShotFrame
            shot={desktop}
            label="Desktop screenshot"
            tone="dark"
            priority={priority}
            decorative={decorative}
            sizes="(min-width: 1024px) 62vw, 100vw"
          />
        </div>
        <div className="flex items-end justify-center gap-3 lg:absolute lg:inset-x-3 lg:bottom-3 lg:justify-between">
          <div
            className={`z-10 w-[38%] shadow-[0_16px_36px_rgba(0,0,0,0.32)] sm:w-[30%] lg:w-[18%] ${phones[0]?.width ? "" : "relative aspect-[9/16]"}`}
          >
            <ShotFrame
              shot={phones[0]}
              label="Mobile"
              tone="dark"
              decorative={decorative}
              sizes="(min-width: 1024px) 16vw, 40vw"
            />
          </div>
          <div
            className={`z-20 w-[34%] shadow-[0_16px_36px_rgba(0,0,0,0.32)] sm:w-[26%] lg:mb-8 lg:w-[16%] ${phones[1]?.width ? "" : "relative aspect-[9/16]"}`}
          >
            <ShotFrame
              shot={phones[1]}
              label="Mobile"
              tone="dark"
              decorative={decorative}
              sizes="(min-width: 1024px) 14vw, 36vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenStage({
  shot,
  priority,
  decorative,
}: {
  shot?: Shot;
  priority: boolean;
  decorative: boolean;
}) {
  const framed = Boolean(shot?.width && shot?.height);

  if (framed) {
    return (
      <div className="bg-[#e4e1da] p-2 sm:p-3 lg:p-3.5">
        <ShotFrame
          shot={shot}
          label="Product screenshot"
          tone="light"
          priority={priority}
          decorative={decorative}
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] bg-[#e4e1da] p-2 sm:aspect-[3/2] sm:p-3 lg:aspect-[3/2] lg:p-3.5">
      <ShotFrame
        shot={shot}
        label="Product screenshot"
        tone="light"
        priority={priority}
        decorative={decorative}
      />
    </div>
  );
}

function LifestyleStage({
  shot,
  priority,
  decorative,
}: {
  shot?: Shot;
  priority: boolean;
  decorative: boolean;
}) {
  return (
    <div className="relative aspect-[16/10] bg-[#16343c] sm:aspect-[2/1] lg:aspect-[2.35/1]">
      {shot ? (
        <Image
          src={shot.src}
          alt={decorative ? "" : shot.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="object-cover"
        />
      ) : (
        <span className="absolute bottom-4 left-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#f4efe6]/60">
          Photography
        </span>
      )}
    </div>
  );
}

export function ProjectStage({
  project,
  presentation,
  priority = false,
  decorative = false,
}: {
  project: Project;
  presentation?: ProjectPresentation;
  priority?: boolean;
  decorative?: boolean;
}) {
  const mode = presentation ?? presentationFor(project);
  const shots = collectShots(project);
  const primary =
    shots.find((shot) => shot.format === "lifestyle" || shot.format === "wide" || shot.format === "desktop") ??
    shots[0];
  const label =
    mode === "lifestyle"
      ? `Photography placeholder for ${project.name}`
      : mode === "composition"
        ? `Product screenshot composition for ${project.name}`
        : `Product screenshot placeholder for ${project.name}`;

  return (
    <div
      className="overflow-hidden rounded-[1.15rem] ring-1 ring-black/10 ring-inset"
      {...(decorative
        ? { "aria-hidden": true }
        : hasProjectImagery(project)
          ? {}
          : { role: "img" as const, "aria-label": label })}
    >
      <div className="media-zoom">
        {mode === "composition" ? (
          <CompositionStage shots={shots} priority={priority} decorative={decorative} />
        ) : mode === "lifestyle" ? (
          <LifestyleStage shot={primary} priority={priority} decorative={decorative} />
        ) : (
          <ScreenStage shot={primary} priority={priority} decorative={decorative} />
        )}
      </div>
    </div>
  );
}
