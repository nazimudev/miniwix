import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import ProjectList from './projects/ProjectList';

const Projects = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between gap-6">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-(--color-text) md:text-4xl">
              Our Projects
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-(--color-muted)">
              {`A selection of real-world projects we've built.`}
            </p>
          </div>

          {/* Right */}
          <Link
            href="/products"
            className="group hidden items-center gap-2 text-sm font-semibold text-(--color-text) sm:flex"
          >
            View All Projects
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Project */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* The latest 4 Project */}
          <ProjectList />
          <ProjectList />
          <ProjectList />
          <ProjectList />
        </div>
      </div>
    </section>
  );
}

export default Projects