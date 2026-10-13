/**
 * All editable site content lives in this file.
 * Replace every value marked [PLACEHOLDER] with your real details.
 * Layouts and components never need to change when you edit this.
 */

export type Img = { src: string; alt: string };

export type Social = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  thumbnail: Img;
  /** Link to the game on roblox.com. Omit if unreleased. */
  gameUrl?: string;
  /** Optional external case study. The detail page always exists. */
  caseStudy?: string;
  screenshots: Img[];
  /** Optional embeddable video URL, e.g. https://www.youtube.com/embed/... */
  videoUrl?: string;
  built: string[];
  outcome: string;
  tags: string[];
};

export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  unit: string;
  description: string;
  includes: string[];
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
  relation: "Client" | "Teammate" | "Player";
};

export const profile = {
  name: "[PLACEHOLDER] Your Name",
  headline: "Roblox developer building polished, reliable games.",
  bio: "[PLACEHOLDER] Write two or three sentences about yourself here. Say what you build, who you build it for, and what clients can expect when they work with you.",
  mainLanguage: "Luau",
  yearsCoding: 0, // [PLACEHOLDER] number of years
  robloxProfile: "https://www.roblox.com/users/0/profile", // [PLACEHOLDER]
  email: "you@example.com", // [PLACEHOLDER]
  socials: [
    { label: "Twitter / X", href: "https://x.com/yourhandle" },
    { label: "YouTube", href: "https://youtube.com/@yourhandle" },
  ] satisfies Social[],
};

/** Contact buttons. Edit the Gmail compose or Discord URL here. */
export const contactLinks = {
  gmailCompose: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
  discord: "https://discord.com/users/884014626956771361",
};

export const about = {
  background: [
    "[PLACEHOLDER] Paragraph one: how you started with Roblox and Luau.",
    "[PLACEHOLDER] Paragraph two: the kinds of games and systems you enjoy building, and how you work with teams.",
  ],
  skills: [
    { group: "Languages", items: ["Luau", "Lua", "TypeScript (roblox-ts)"] },
    { group: "Gameplay", items: ["Combat systems", "Inventory and economy", "Data persistence", "Matchmaking"] },
    { group: "Interface", items: ["UI/UX implementation", "Responsive layouts", "Animation and tweening"] },
    { group: "Engineering", items: ["Debugging and profiling", "Networking and remotes", "Performance tuning"] },
  ],
  tools: ["Roblox Studio", "Luau", "Rojo", "Git and GitHub", "Wally", "Selene and StyLua", "Figma"],
  experience: [
    {
      role: "[PLACEHOLDER] Lead Scripter",
      org: "[PLACEHOLDER] Studio or game name",
      period: "2023 – Present",
      summary: "[PLACEHOLDER] One or two sentences on what you owned and shipped.",
    },
    {
      role: "[PLACEHOLDER] Freelance Developer",
      org: "Independent",
      period: "2021 – 2023",
      summary: "[PLACEHOLDER] One or two sentences on the work you did for clients.",
    },
  ],
};

const shot = (name: string, alt: string): Img => ({ src: `/placeholders/${name}.svg`, alt });

export const projects: Project[] = [
  {
    slug: "skyline-tycoon",
    title: "Skyline Tycoon",
    summary: "[PLACEHOLDER] A city-building tycoon with a persistent economy and co-op plots.",
    role: "Lead scripter",
    thumbnail: shot("project-1", "Placeholder thumbnail for Skyline Tycoon"),
    gameUrl: "https://www.roblox.com/games/0/skyline-tycoon",
    screenshots: [
      shot("shot-1", "Placeholder screenshot of the Skyline Tycoon build menu"),
      shot("shot-2", "Placeholder screenshot of the Skyline Tycoon city view"),
    ],
    built: ["Data persistence with session locking", "Plot ownership and co-op building", "Economy balancing tools"],
    outcome: "[PLACEHOLDER] Reached 0 visits and 0 concurrent players at peak.",
    tags: ["Luau", "DataStore", "Economy"],
  },
  {
    slug: "arena-clash",
    title: "Arena Clash",
    summary: "[PLACEHOLDER] Fast, round-based PvP with server-authoritative combat.",
    role: "Gameplay programmer",
    thumbnail: shot("project-2", "Placeholder thumbnail for Arena Clash"),
    gameUrl: "https://www.roblox.com/games/0/arena-clash",
    screenshots: [
      shot("shot-1", "Placeholder screenshot of an Arena Clash match"),
      shot("shot-2", "Placeholder screenshot of the Arena Clash loadout screen"),
    ],
    built: ["Server-authoritative hit detection", "Matchmaking and round flow", "Weapon and ability framework"],
    outcome: "[PLACEHOLDER] Describe the result, such as player retention or review feedback.",
    tags: ["Luau", "Combat", "Networking"],
  },
  {
    slug: "pixel-quest-ui",
    title: "Pixel Quest UI",
    summary: "[PLACEHOLDER] A complete responsive interface kit for an RPG.",
    role: "UI engineer",
    thumbnail: shot("project-3", "Placeholder thumbnail for Pixel Quest UI"),
    caseStudy: "https://example.com/case-study",
    screenshots: [shot("shot-1", "Placeholder screenshot of the Pixel Quest inventory screen")],
    built: ["Responsive inventory and shop", "Controller and touch support", "Animated notifications"],
    outcome: "[PLACEHOLDER] Describe the result, such as shipped on time or client feedback.",
    tags: ["UI", "Luau", "Mobile"],
  },
];

export const pricing: PricingPackage[] = [
  {
    id: "debugging",
    name: "Debugging",
    price: "$25",
    unit: "per issue",
    description: "[PLACEHOLDER] Find and fix a specific bug or performance problem.",
    includes: ["Root-cause diagnosis", "Fix and short written summary", "One round of follow-up"],
  },
  {
    id: "scripting",
    name: "Scripting",
    price: "$75",
    unit: "per system",
    description: "[PLACEHOLDER] A single gameplay system built cleanly and documented.",
    includes: ["Clean, commented Luau", "Server and client code", "Handover notes", "Two revision rounds"],
    featured: true,
  },
  {
    id: "ui",
    name: "UI Implementation",
    price: "$120",
    unit: "per screen set",
    description: "[PLACEHOLDER] Turn your designs into responsive, accessible in-game UI.",
    includes: ["Mobile, console and desktop layouts", "Animations", "Two revision rounds"],
  },
  {
    id: "game",
    name: "Game Development",
    price: "$1,500+",
    unit: "per project",
    description: "[PLACEHOLDER] End-to-end development of a game or major feature set.",
    includes: ["Planning and milestones", "Full scripting", "Testing and launch support", "30 days of support"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "[PLACEHOLDER] A short, specific quote about what it was like to work with you.",
    author: "Client Name",
    relation: "Client",
  },
  {
    quote: "[PLACEHOLDER] A quote from a teammate about your reliability and communication.",
    author: "Teammate Name",
    relation: "Teammate",
  },
  {
    quote: "[PLACEHOLDER] A quote from a player about a game you built.",
    author: "Player Name",
    relation: "Player",
  },
];
