import React from "react";
import { PROJECTS } from "./data/projects";
import { Container, SectionHeading } from "./shared";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  // First three featured projects: one large lead + two supporting cards.
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  const bento = featured.length === 3;
  const [lead, ...rest] = featured;

  return (
    <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-24">
      <Container>
        <SectionHeading
          title="Selected Projects"
          description="A collection of digital solutions built with modern technologies, practical thinking, and attention to detail."
        />

        {bento ? (
          <div className="mt-12 grid gap-5 lg:grid-cols-5 lg:grid-rows-2">
            <div className="lg:col-span-3 lg:row-span-2">
              <ProjectCard
                project={lead}
                variant="lead"
                surface="soft"
                priority
              />
            </div>
            {rest.map((p) => (
              <div key={p.id} className="lg:col-span-2">
                <ProjectCard project={p} surface="soft" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {featured.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                surface="soft"
                priority={i === 0}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProjects;
