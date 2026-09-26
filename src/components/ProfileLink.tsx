type Profile = {
  label: string;
  href: string;
};

export function ProfileLink({
  link,
  className = "",
}: {
  link: Profile;
  className?: string;
}) {
  const classes = `profile-link ${className}`.trim();

  if (!link.href) {
    return (
      <span className={classes} data-pending="true">
        {link.label}
        <span className="sr-only">, link not added yet</span>
      </span>
    );
  }

  const external = link.href.startsWith("http");

  return (
    <a
      href={link.href}
      className={classes}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {link.label}
    </a>
  );
}
