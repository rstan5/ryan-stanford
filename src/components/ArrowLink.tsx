import Link from "next/link";

export function ArrowLink({
  href,
  children,
  external = false,
  icon = "→",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  icon?: string;
}) {
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden="true" className="arrow">
        {icon}
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className="arrow-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="arrow-link">
      {inner}
    </Link>
  );
}
