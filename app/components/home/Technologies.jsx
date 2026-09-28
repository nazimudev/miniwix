import React from 'react'
import technologies from '@/lib/technology';
import TechnologyList from './projects/TechnologyList';

const Technologies = () => {
  return (
    <section className="mx-auto mb-5 max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="my-10">
        <h2 className="text-3xl font-bold tracking-tight text-(--color-text) md:text-4xl">
          Technologies We Use
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-(--color-muted)">
          We work with modern technologies and tools to build scalable,
          reliable, and high-performance digital products.
        </p>
      </div>
      {/* Technology List */}
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-4 md:grid-cols-8">
        {technologies.map((tech) => (
          <TechnologyList key={tech.id} tech={tech} />
        ))}
      </div>
    </section>
  );
}

export default Technologies