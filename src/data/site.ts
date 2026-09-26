export const site = {
  name: "Ryan Stanford",
  statementLead: "I like building",
  statementEmphasis: "things.",
  summary:
    "I’m a student, entrepreneur, and product builder exploring ideas across technology, business, and culture.",
  aboutHeading: "I’m Ryan.",
  about: [
    "I’m a business student who spends a lot of my time building things.",
    "My interests sit at the intersection of entrepreneurship, technology, finance, culture, and international business. I enjoy taking ideas from something written in my notes to something people can actually see, use, and react to.",
    "Outside of building, I’m studying Mandarin and have a growing interest in the relationship between business, technology, and culture between the United States and China.",
  ],
  contactHeading: "Let’s build something interesting.",
  description:
    "Personal site of Ryan Stanford, a student, entrepreneur, and product builder.",
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Resume ↗", href: "/Ryan-Stanford-Resume.pdf", external: true },
  { label: "Contact", href: "/#contact" },
] as const;

/**
 * Paste profile URLs here. Leave a value "" until you have the real link.
 * Email can be "you@domain.com" or "mailto:you@domain.com".
 */
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/ryanstanford5",
  github: "https://github.com/rstan5",
  twitter: "",
  rednote:
    "https://www.xiaohongshu.com/user/profile/6a289ee20000000001005800?xsec_token=YBhB6ZQ3U_7Kj9eSq-mJD8bWAhpW8SVhSV8ojndNbd3og=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=OEc0ODxKSTs2NzUyOTgwNjY0OTc5PTY5&apptime=1790305174&share_id=14fe5883cc724a7ea6214d198a3fe5e5",
  email: "ryan.j.stanford5@gmail.com",
  phone: "207-383-5004",
};

export type SocialKey = keyof typeof socialLinks;

const socialLabels: Record<Exclude<SocialKey, "phone">, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  twitter: "X",
  rednote: "RedNote",
  email: "Email",
};

export function socialHref(key: SocialKey) {
  const value = socialLinks[key].trim();
  if (!value) return "";
  if (key === "email" && !value.startsWith("mailto:")) return `mailto:${value}`;
  if (key === "phone") {
    if (value.startsWith("tel:")) return value;
    const digits = value.replace(/\D/g, "");
    if (digits.length === 10) return `tel:+1${digits}`;
    return `tel:+${digits}`;
  }
  return value;
}

export function getSocial(key: SocialKey) {
  const href = socialHref(key);
  if (!href) return undefined;
  const label = key === "phone" ? socialLinks.phone.trim() : socialLabels[key];
  return { label, href };
}

/** Links that have a URL, in the order they should appear in Contact and the footer. */
export function visibleSocialLinks(options?: { omit?: SocialKey[] }) {
  const omit = new Set(options?.omit ?? []);
  return (Object.keys(socialLinks) as SocialKey[]).flatMap((key) => {
    if (omit.has(key)) return [];
    const link = getSocial(key);
    return link ? [link] : [];
  });
}
