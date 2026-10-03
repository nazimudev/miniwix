import FeaturedProjects from "../components/projects/FeaturedProjects";
import ProjectPhilosophy from "../components/projects/ProjectPhilosophy";
import ProjectsCTA from "../components/projects/ProjectsCTA";
import ProjectsExplorer from "../components/projects/ProjectsExplorer";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectTechnologies from "../components/projects/ProjectTechnologies";

export const metadata = {
  title: "Projects | MINIWIX",
  description:
    "Selected projects from MINIWIX: web applications, mobile apps, SaaS platforms, APIs, and UI templates.",
};

const ProjectsPage = () => {
  return (
    <>
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectsExplorer />
      <ProjectPhilosophy />
      <ProjectTechnologies />
      <ProjectsCTA />
    </>
  );
};

export default ProjectsPage;
