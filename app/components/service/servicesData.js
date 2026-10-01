import {
  Globe,
  Smartphone,
  Cloud,
  Server,
  Terminal,
  Blocks,
} from "lucide-react";

// `span` classes are written out in full so Tailwind can detect them.
// variant: "dark" | "accent" | "default"
export const SERVICES = [
  {
    id: "web",
    number: "01",
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern, responsive, and scalable web applications built to deliver smooth user experiences and reliable performance.",
    tags: ["Next.js", "React", "Laravel", "PHP", "MySQL"],
    variant: "dark",
    featured: true,
    span: "md:col-span-2 lg:col-span-7",
  },
  {
    id: "android",
    number: "02",
    icon: Smartphone,
    title: "Android Application Development",
    description:
      "Native Android applications designed with intuitive interfaces, reliable functionality, and maintainable architecture.",
    tags: ["Java", "Kotlin", "Android SDK"],
    variant: "accent",
    span: "lg:col-span-5",
  },
  {
    id: "saas",
    number: "03",
    icon: Cloud,
    title: "SaaS Product Development",
    description:
      "Build scalable software-as-a-service products with practical features, modern interfaces, and reliable backend architecture.",
    tags: ["Laravel", "Next.js", "MySQL", "REST APIs"],
    variant: "default",
    span: "lg:col-span-5",
  },
  {
    id: "backend",
    number: "04",
    icon: Server,
    title: "Backend & API Development",
    description:
      "Robust backend systems and well-structured REST APIs designed to power modern applications and digital products.",
    tags: ["Laravel", "PHP", "MySQL", "Sanctum"],
    variant: "default",
    visual: "api",
    span: "md:col-span-2 lg:col-span-7",
  },
  {
    id: "devtools",
    number: "05",
    icon: Terminal,
    title: "Developer Tools & Starter Kits",
    description:
      "Reusable development resources, starter templates, and practical tools that help developers build products faster.",
    tags: ["Laravel", "React", "Next.js", "JavaScript"],
    variant: "default",
    span: "lg:col-span-6",
  },
  {
    id: "custom",
    number: "06",
    icon: Blocks,
    title: "Custom Software Solutions",
    description:
      "Purpose-built software solutions designed around specific business requirements, workflows, and product ideas.",
    tags: ["Modern Web Technologies", "APIs", "Databases"],
    variant: "default",
    span: "lg:col-span-6",
  },
];

export const FAQS = [
  {
    q: "What types of software solutions does MINIWIX build?",
    a: "MINIWIX works on web applications, Android applications, SaaS products, backend and API systems, developer tools and starter kits, and custom software solutions.",
  },
  {
    q: "Can I discuss a custom software idea with MINIWIX?",
    a: "Yes. If you have a product idea or a specific business need, get in touch and describe what you have in mind. We will talk through the goals and what the right approach could look like.",
  },
  {
    q: "Does MINIWIX develop Android applications?",
    a: "Yes. Android development is one of our core areas, using Java, Kotlin, and the Android SDK.",
  },
  {
    q: "Can MINIWIX help with SaaS product development?",
    a: "Yes. We build SaaS products using technologies such as Laravel, Next.js, MySQL, and REST APIs, focusing on practical features and a maintainable backend.",
  },
  {
    q: "How can I get started with a project?",
    a: "Use the contact page to send a short message about your idea and the type of project. From there, we can start a conversation about what you need.",
  },
];
