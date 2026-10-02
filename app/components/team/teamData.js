// Single source of truth for the Team page.
// Update image paths and links here.
// (The About page keeps its own copy in components/about/aboutData.js.)

export const TEAM_IMAGES = {
  nazim: "/images/team/nazim-uddin.jpg",
  monira: "/images/team/monira-pervin.jpeg",
};

export const MEMBERS = [
  {
    id: "nazim",
    name: "Nazim Uddin",
    role: "Founder & Developer",
    image: TEAM_IMAGES.nazim,
    alt: "Nazim Uddin - Founder of MINIWIX",
    bio: "Nazim Uddin is a developer and technology enthusiast passionate about Android application development, Laravel backend development, APIs, and modern web technologies. He enjoys learning, experimenting, and turning ideas into practical software solutions.",
    // Empty href = icon hidden. Add real URLs when ready.
    links: [
      { type: "github", href: "https://github.com" },
      { type: "linkedin", href: "https://linkedin.com" },
      { type: "email", href: "hello@miniwix.com" },
    ],
  },
  {
    id: "monira",
    name: "Monira Pervin",
    role: "Co-Founder",
    image: TEAM_IMAGES.monira,
    alt: "Monira Pervin - Co-Founder of MINIWIX",
    bio: "Monira Pervin is the Co-Founder of MINIWIX, sharing the vision of building a growing technology-focused company centered on practical digital products and meaningful innovation.",
    links: [
      { type: "github", href: "https://github.com" },
      { type: "linkedin", href: "https://linkedin.com" },
      { type: "email", href: "hello@miniwix.com" },
    ],
  },
];
