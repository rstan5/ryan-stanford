export const projectStatuses = [
  "Building",
  "Built",
  "Built / Tested",
  "Previous Venture",
] as const;

export type ProjectStatus = (typeof projectStatuses)[number];

export type ScreenshotFormat = "desktop" | "portrait" | "wide" | "lifestyle";

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
  /** Where this image sits when a project shows more than one frame. */
  format?: ScreenshotFormat;
  width?: number;
  height?: number;
};

/**
 * Case-study fields. Leave a field out when it is unknown.
 * Do not add traction, revenue, technology, or partnerships that are not real.
 */
export type ProjectContent = {
  overview?: string;
  idea?: string;
  built?: string;
  role?: string;
  /** Current status and a short reflection. Shown as "Where it is now". */
  current?: string;
  screenshots?: ProjectScreenshot[];
};

export type Project = {
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  categories: string[];
  status?: ProjectStatus;
  featured: boolean;
  kind: "case-study" | "experiment";
  year?: number;
  /** Public path, for example "/images/seoully.jpg". Omit until a real image exists. */
  image?: string;
  imageAlt?: string;
  /** Public product or site. Leave "" until the URL is real. */
  liveUrl?: string;
  /** Public GitHub repo. Leave "" to hide the link. */
  githubUrl?: string;
  /** Optional site for an exploration. Leave "" to keep the row as plain text. */
  externalUrl?: string;
  content: ProjectContent;
};

export const projects: Project[] = [
  {
    slug: "seoully",
    name: "Seoully",
    tagline: "Give your fandom a home.",
    description:
      "A digital home for K-pop collectors to organize their collections, build interactive rooms, discover other fans, and connect around the things they collect.",
    categories: ["Consumer", "Social", "K-pop", "AI"],
    status: "Building",
    featured: true,
    kind: "case-study",
    image: "/images/seoully/room.png",
    imageAlt: "Seoully collector room",
    liveUrl: "",
    githubUrl: "",
    content: {
      idea: "K-pop collecting is spread across physical binders, marketplaces, collection trackers, and social platforms that were never designed around the full collector experience. I started Seoully around a simple idea: give your collection and fandom one digital home — a place to organize what you own, express your fandom, and connect with other collectors.",
      built:
        "Seoully combines collection management, social discovery, and an interactive digital room. Collectors can add photocards and albums, build profiles around their groups and biases, share posts, manage wishlists and trades, and discover other fans. Their collection also becomes a visual space where items can be placed, moved, stored, and inspected.",
      role: "I took Seoully from the initial concept through product design and development. I designed the core experience and product systems, built the application and interactive room, and worked through how collection intake, profiles, social features, messaging, trading, and onboarding could function as one connected product.",
      current:
        "Seoully is still in development as I prepare it for an initial release. Building it has pushed me to think beyond individual features and about how an entire consumer product fits together. The next step is putting it in front of real collectors and learning from how they actually use it.",
      screenshots: [
        {
          src: "/images/seoully/room.png",
          alt: "Seoully collector room",
          format: "wide",
          width: 1024,
          height: 716,
        },
        {
          src: "/images/seoully/profile.png",
          alt: "Seoully collector profile",
          format: "portrait",
          width: 612,
          height: 1024,
        },
        {
          src: "/images/seoully/social.png",
          alt: "Seoully social post",
          format: "portrait",
          width: 547,
          height: 1024,
        },
        {
          src: "/images/seoully/onboarding.png",
          alt: "Seoully welcome screen",
          format: "portrait",
          width: 560,
          height: 1024,
        },
      ],
    },
  },
  {
    slug: "proof-ai",
    name: "Proof AI",
    description:
      "A hiring platform built around job-specific work simulations designed to evaluate what candidates can actually do.",
    categories: ["AI", "HR Tech", "B2B"],
    status: "Built / Tested",
    featured: true,
    kind: "case-study",
    image: "/images/proof/report.png",
    imageAlt: "Proof AI competency report",
    liveUrl: "https://www.proof-ai.org/",
    githubUrl: "",
    content: {
      idea: "Hiring tools can find and filter candidates without showing how someone will actually perform in the role. I built Proof AI around a different idea: an assessment should reflect the way a company actually works. Instead of a generic test, Proof creates a job-specific work simulation from the role and the competencies a company wants to evaluate.",
      built:
        "Proof turns a job opening into a structured evaluation. Companies define the role and what they care about, and Proof generates a work simulation around those expectations. Candidate work is scored against competency rubrics and turned into a report of strengths, weaknesses, and evidence, with an employer view for managing evaluations and comparing performance.",
      role: "I developed Proof from the initial concept through the working application. I worked across product strategy, user experience, interface design, development, AI workflows, and the evaluation system behind the reports. A big part of that was using AI without turning candidate work into a black box, so a hiring team could review the evidence.",
      current:
        "I built and tested Proof as an early-stage product, then reached out to hiring teams to see whether the problem and approach resonated beyond my own assumptions. That became one of the most useful parts of the project. Building a working product and building something companies are ready to adopt are two different challenges, and those conversations need to shape the product earlier.",
      screenshots: [
        {
          src: "/images/proof/landing.png",
          alt: "Proof AI homepage",
          format: "wide",
          width: 1024,
          height: 702,
        },
        {
          src: "/images/proof/process.png",
          alt: "Proof AI evaluation process",
          format: "wide",
          width: 1024,
          height: 597,
        },
        {
          src: "/images/proof/analytics.png",
          alt: "Proof AI company dashboard",
          format: "wide",
          width: 1024,
          height: 526,
        },
        {
          src: "/images/proof/report.png",
          alt: "Proof AI competency report",
          format: "wide",
          width: 1024,
          height: 898,
        },
      ],
    },
  },
  {
    slug: "coursemap-ai",
    name: "CourseMap AI",
    description:
      "An AI-powered learning product that transforms course materials into visual, connected knowledge maps.",
    categories: ["AI", "EdTech"],
    status: "Built",
    featured: true,
    kind: "case-study",
    image: "/images/coursemap/map.png",
    imageAlt: "CourseMap knowledge map",
    liveUrl: "https://coursemap.live/",
    githubUrl: "",
    content: {
      idea: "Most study tools treat course material as separate files, even though the ideas inside them are connected. I started CourseMap to understand how concepts across notes, slides, PDFs, and other class materials fit together. Instead of another chat, I wanted AI to turn that material into a visual knowledge map students could explore.",
      built:
        "Students upload course materials, and CourseMap turns them into an interactive map of topics and relationships. They can move through connected concepts, open a topic for more detail, and ask an AI assistant questions in the context of their own material. Around that, I built course organization, uploads, content processing, and the interface that ties the map to those explanations.",
      role: "I built CourseMap from the initial idea through the working web application. I designed the product and user experience, developed the frontend and application logic, and built the AI workflow that turns uploads into structured concepts and relationships. The hard part was making unstructured class material predictable enough for a useful interface, instead of another block of generated text.",
      current:
        "CourseMap was one of my first attempts to build a full AI product around a specific problem, rather than adding AI to an existing interface. The product is online, but I later shifted my focus to other work instead of continuing to grow it. It taught me about structured outputs, model uncertainty, and the gap between an interesting AI capability and an experience that makes it useful.",
      screenshots: [
        {
          src: "/images/coursemap/landing.png",
          alt: "CourseMap homepage",
          format: "wide",
          width: 1024,
          height: 654,
        },
        {
          src: "/images/coursemap/map.png",
          alt: "CourseMap knowledge map",
          format: "wide",
          width: 1024,
          height: 880,
        },
        {
          src: "/images/coursemap/upload.png",
          alt: "CourseMap upload screen",
          format: "wide",
          width: 1024,
          height: 735,
        },
        {
          src: "/images/coursemap/differentiation.png",
          alt: "CourseMap product overview",
          format: "wide",
          width: 1024,
          height: 742,
        },
      ],
    },
  },
  {
    slug: "vested",
    name: "VestEd",
    description: "Competitive simulated investing for university students.",
    categories: [],
    featured: true,
    kind: "case-study",
    image: "/images/vested/leaderboard.png",
    imageAlt: "VestEd competition leaderboard",
    liveUrl: "https://vested-app.com/",
    githubUrl: "",
    content: {
      idea: "Most simulated investing feels like an individual activity, disconnected from the clubs and campuses students are already part of. I started VestEd around a more competitive idea: what if students could represent themselves, their investment clubs, and their universities? Learning about markets could be more social if you could compete, compare performance, and build a track record with peers.",
      built:
        "VestEd is a simulated investing platform built around competition between students and university investment clubs. Users can build and track a portfolio, then compare performance on leaderboards. I also designed College Arena, where clubs can represent their universities and compete nationally, and an AI Portfolio Professor meant to help students understand their decisions rather than only seeing gains and losses.",
      role: "I developed VestEd from the initial concept through the working product: strategy, interface, application, competition system, and the overall experience. Much of the work was making familiar investing tools more engaging through identity and competition, while keeping the product centered on learning rather than simulated returns alone.",
      current:
        "VestEd is an early-stage product with the core experience built and available online. It is still a concept I am exploring, not a launched platform with an established university network. I wanted to see how competition, identity, community, and status might change a usually individual product, and whether those mechanics could make simulated investing more engaging for students and investment clubs.",
      screenshots: [
        {
          src: "/images/vested/landing.png",
          alt: "VestEd homepage",
          format: "wide",
          width: 1024,
          height: 701,
        },
        {
          src: "/images/vested/leaderboard.png",
          alt: "VestEd competition leaderboard",
          format: "wide",
          width: 1024,
          height: 697,
        },
        {
          src: "/images/vested/college-arena.png",
          alt: "VestEd college arena",
          format: "wide",
          width: 1024,
          height: 565,
        },
        {
          src: "/images/vested/pricing.png",
          alt: "VestEd pricing",
          format: "wide",
          width: 1024,
          height: 749,
        },
      ],
    },
  },
  {
    slug: "dealflow",
    name: "DealFlow",
    description: "AI-powered real estate deal analysis.",
    categories: [],
    featured: false,
    kind: "experiment",
    externalUrl: "",
    content: {},
  },
  {
    slug: "reef-chief",
    name: "Reef Chief Surf Co.",
    description:
      "A surf-inspired apparel brand built as an experiment in e-commerce, branding, creator marketing, and consumer products.",
    categories: ["Consumer", "E-commerce"],
    status: "Previous Venture",
    featured: false,
    kind: "experiment",
    externalUrl: "https://reef-chief-surf-co.printify.me/",
    content: {},
  },
  {
    slug: "bite",
    name: "Bite",
    description: "A food coach in your pocket.",
    categories: [],
    featured: false,
    kind: "experiment",
    externalUrl: "",
    content: {},
  },
  {
    slug: "algorithm",
    name: "Algorithm",
    description:
      "A product that studies creator content and performance to help recommend what to make next.",
    categories: [],
    featured: false,
    kind: "experiment",
    externalUrl: "",
    content: {},
  },
];

export function getCaseStudies() {
  return projects.filter((project) => project.kind === "case-study");
}

export function getExperiments() {
  return projects.filter((project) => project.kind === "experiment");
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
