// Central project data. Everything below is SAMPLE content.
//
// To use real projects:
//  1. Replace the entries (title, slug, description, technologies, image...).
//  2. Set isSample to false (or delete it) to remove the "Sample" badge.
//  3. Put screenshots in /public/images/projects/
//
// - `category` must match one of PROJECT_CATEGORIES (except "All Projects").
// - `featured: true` puts a project in the "Selected Projects" section
//   (the first three featured projects are shown there).
// - liveUrl / githubUrl: leave "" to hide the link.

export const ALL_CATEGORY = "All Projects";

export const PROJECT_CATEGORIES = [
  ALL_CATEGORY,
  "Web Applications",
  "Mobile Applications",
  "SaaS & Platforms",
  "Backend & APIs",
  "UI & Templates",
];

export const PROJECTS = [
  {
    id: 1,
    title: "Sample Web Application",
    slug: "sample-web-application",
    description:
      "A responsive web application with a clean interface and a Laravel backend.",
    category: "Web Applications",
    image: "/images/projects/project-one.png",
    technologies: ["Next.js", "Laravel", "MySQL"],
    featured: true,
    liveUrl: "",
    githubUrl: "",
    isSample: true,
  },
  {
    id: 2,
    title: "Sample SaaS Platform",
    slug: "sample-saas-platform",
    description:
      "A software-as-a-service platform with a dashboard front end and a REST API.",
    category: "SaaS & Platforms",
    image: "/images/projects/project-two.png",
    technologies: ["React", "Laravel", "MySQL", "REST APIs"],
    featured: true,
    liveUrl: "",
    githubUrl: "",
    isSample: true,
  },
  {
    id: 3,
    title: "Sample Android App",
    slug: "sample-android-app",
    description:
      "A native Android application with a focus on simple, reliable everyday use.",
    category: "Mobile Applications",
    image: "/images/projects/project-three.png",
    technologies: ["Kotlin", "Java", "REST APIs"],
    featured: true,
    liveUrl: "",
    githubUrl: "",
    isSample: true,
  },
  {
    id: 4,
    title: "Sample API Backend",
    slug: "sample-api-backend",
    description:
      "A structured REST API with authentication, built to power web and mobile clients.",
    category: "Backend & APIs",
    image: "/images/projects/project-four.png",
    technologies: ["Laravel", "PHP", "MySQL", "Sanctum"],
    featured: false,
    liveUrl: "",
    githubUrl: "",
    isSample: true,
  },
  {
    id: 5,
    title: "Sample UI Template",
    slug: "sample-ui-template",
    description:
      "A reusable interface template built with a component-based approach.",
    category: "UI & Templates",
    image: "/images/projects/project-five.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    featured: false,
    liveUrl: "",
    githubUrl: "",
    isSample: true,
  },
];
