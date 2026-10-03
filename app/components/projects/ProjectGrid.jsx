import React from "react";
import { FolderOpen } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects, onReset }) => {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-[#080f20]/15 px-6 py-16 text-center dark:border-white/15">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF4D4D]/10 text-[#FF4D4D]">
          <FolderOpen
            className="h-6 w-6"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-[#080f20] dark:text-white">
          No projects in this category yet
        </h3>
        <p className="mt-1.5 text-sm text-[#6B7280] dark:text-slate-400">
          Check back soon, or browse everything we have.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="mt-6 rounded-lg bg-[#080f20] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#FF4D4D] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF4D4D] dark:bg-white dark:text-[#080f20] dark:hover:bg-[#FF4D4D] dark:hover:text-white"
        >
          View all projects
        </button>
      </div>
    );
  }

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <li key={p.id}>
          <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectGrid;
