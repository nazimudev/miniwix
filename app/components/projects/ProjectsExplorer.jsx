"use client";

import React, { useMemo, useRef, useState } from "react";
import { PROJECTS, PROJECT_CATEGORIES, ALL_CATEGORY } from "./data/projects";
import { Container, SectionHeading } from "./shared";
import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";

/**
 * "Explore Our Projects": coordinates category filtering.
 *  - `selected` updates instantly (so the pill highlights right away)
 *  - `shown` updates after a short fade-out so the grid swaps smoothly
 */
const ProjectsExplorer = () => {
  const [selected, setSelected] = useState(ALL_CATEGORY);
  const [shown, setShown] = useState(ALL_CATEGORY);
  const [visible, setVisible] = useState(true);
  const timer = useRef(null);

  const counts = useMemo(() => {
    const c = { [ALL_CATEGORY]: PROJECTS.length };
    PROJECT_CATEGORIES.slice(1).forEach((cat) => {
      c[cat] = PROJECTS.filter((p) => p.category === cat).length;
    });
    return c;
  }, []);

  const projects = useMemo(
    () =>
      shown === ALL_CATEGORY
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === shown),
    [shown],
  );

  const select = (category) => {
    if (category === selected) return;
    setSelected(category);
    clearTimeout(timer.current);

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setShown(category);
      return;
    }
    setVisible(false);
    timer.current = setTimeout(() => {
      setShown(category);
      setVisible(true);
    }, 150);
  };

  return (
    <section className="bg-[#f7f9fd] py-20 dark:bg-[#080f20] sm:py-24">
      <Container>
        <SectionHeading
          title="Explore Our Projects"
          description="Browse our work across different technologies, platforms, and software solutions."
        />

        <div className="mt-8">
          <ProjectFilters
            categories={PROJECT_CATEGORIES}
            counts={counts}
            active={selected}
            onSelect={select}
          />
        </div>

        <p
          className="mt-6 text-sm text-[#6B7280] dark:text-slate-400"
          aria-live="polite"
        >
          Showing {projects.length} of {PROJECTS.length} projects
        </p>

        <div
          className={`mt-4 transition-opacity duration-150 motion-reduce:transition-none ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ProjectGrid
            projects={projects}
            onReset={() => select(ALL_CATEGORY)}
          />
        </div>
      </Container>
    </section>
  );
};

export default ProjectsExplorer;
