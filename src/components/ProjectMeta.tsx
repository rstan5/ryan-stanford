import type { Project } from "@/data/projects";

export function ProjectMeta({ project }: { project: Project }) {
  if (project.categories.length === 0 && !project.status) return null;

  return (
    <div className="flex flex-col gap-3">
      {project.categories.length > 0 ? (
        <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-muted">
          {project.categories.map((category, index) => (
            <li key={category} className="flex items-center gap-2.5">
              {index > 0 ? (
                <span aria-hidden="true" className="text-ink/25">
                  /
                </span>
              ) : null}
              {category}
            </li>
          ))}
        </ul>
      ) : null}
      {project.status ? (
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink">
          {project.status}
        </p>
      ) : null}
    </div>
  );
}
