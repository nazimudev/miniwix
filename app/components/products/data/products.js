// Central product data. Add a product here and the page, search, filters,
// and sidebar counts all update automatically.
//
// category must be one of the ids in CATEGORIES below.
// Images live in /public/images/products/

export const CATEGORIES = [
  { id: "web-templates", label: "Web Templates" },
  { id: "saas-starter-kits", label: "SaaS Starter Kits" },
  { id: "admin-dashboards", label: "Admin Dashboards" },
  { id: "scripts-tools", label: "Scripts & Tools" },
];

// Options for the top dropdown. They share ids with the sidebar categories,
// so both controls read and write the same state.
//  - `tech` options filter by technology instead of category.
//  - "ui-components" has no products yet, so it shows the empty state until
//    you add a product with category: "ui-components".
export const FILTER_OPTIONS = [
  { id: "all", label: "All Categories" },
  { id: "tech-laravel", label: "Laravel", tech: "Laravel" },
  { id: "tech-react", label: "React", tech: "React" },
  { id: "tech-nextjs", label: "Next.js", tech: "Next.js" },
  { id: "admin-dashboards", label: "Admin Dashboard" },
  { id: "web-templates", label: "Web Templates" },
  { id: "saas-starter-kits", label: "Starter Kits" },
  { id: "ui-components", label: "UI Components" },
  { id: "scripts-tools", label: "Developer Tools" },
];

export const PRODUCTS = [
  {
    slug: "laravel-saas-starter-kit",
    name: "Laravel SaaS Starter Kit",
    price: 49,
    category: "saas-starter-kits",
    technologies: ["Laravel", "PHP", "MySQL"],
    description:
      "A practical Laravel foundation for building modern SaaS applications faster.",
    image: "/images/products/laravel-saas-starter-kit.png",
  },
  {
    slug: "react-admin-dashboard",
    name: "React Admin Dashboard",
    price: 29,
    category: "admin-dashboards",
    technologies: ["React", "Tailwind CSS"],
    description:
      "A modern dashboard template for managing application data and workflows.",
    image: "/images/products/react-admin-dashboard.png",
  },
  {
    slug: "nextjs-landing-page",
    name: "Next.js Landing Page",
    price: 19,
    category: "web-templates",
    technologies: ["Next.js", "Tailwind CSS"],
    description:
      "A clean and responsive landing page template for modern digital products.",
    image: "/images/products/nextjs-landing-page.png",
  },
  {
    slug: "laravel-boilerplate",
    name: "Laravel Boilerplate",
    price: 15,
    category: "saas-starter-kits",
    technologies: ["Laravel", "PHP", "MySQL"],
    description:
      "A reusable Laravel boilerplate to accelerate application development.",
    image: "/images/products/laravel-boilerplate.png",
  },
];
