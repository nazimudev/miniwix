// Single source of truth for About page content + image paths.
// Change image paths here and every component updates.

export const TEAM_IMAGES = {
  nazim: "/images/team/nazim-uddin.jpg",
  monira: "/images/team/monira-pervin.jpg",
};

export const TEAM = [
  {
    id: "nazim",
    name: "Nazim Uddin",
    role: "Founder & Developer",
    image: TEAM_IMAGES.nazim,
    alt: "Portrait of Nazim Uddin, Founder and Developer of MINIWIX",
    bio: [
      "Nazim is a developer and technology enthusiast with experience in Android application development, Laravel backend development, APIs, and modern web technologies.",
      "He enjoys building practical software products and keeps learning new technologies so ideas can become useful digital solutions.",
    ],
    focus: ["Android", "Laravel", "APIs", "Web"],
    // Add real URLs to show icons. Empty href = icon is hidden.
    links: [
      { type: "github", href: "https://likedin.com" },
      { type: "linkedin", href: "https://likedin.com" },
      { type: "email", href: "appcodebd@gmail.com" },
    ],
  },
  {
    id: "monira",
    name: "Monira Pervin",
    role: "Co-Founder",
    image: TEAM_IMAGES.monira,
    alt: "Portrait of Monira Pervin, Co-Founder of MINIWIX",
    bio: [
      "Monira is the Co-Founder of MINIWIX. She shares the vision behind the company and supports its direction and growth.",
      "Her role helps keep MINIWIX focused on its core idea: building technology that is practical, useful, and made to last.",
    ],
    focus: ["Vision", "Direction", "Growth"],
    links: [
      { type: "github", href: "https://likedin.com" },
      { type: "linkedin", href: "https://likedin.com" },
      { type: "email", href: "appcodebd@gmail.com" },
    ],
  },
];

export const CTA_HREF = "/contact";
