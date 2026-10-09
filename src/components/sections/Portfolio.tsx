'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/data/projects';

export default function Portfolio() {
  return (
    <section id="work" className="bg-stone-50 py-24 md:py-32" aria-label="Portfolio section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between mb-16">
          <SectionHeading
            eyebrow="Selected work"
            title="Our Portfolio"
            subtitle="Sample project showcases — all titles are editable placeholders."
          />
          <p className="max-w-xs text-sm text-stone-400 md:text-right leading-relaxed">
            These are illustrative examples of project types we work on. Real client work
            details are shared under NDA upon request.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => {
            // First item spans full width on large screens for visual variety
            const isFeatured = index === 0;
            return (
              <article
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-stone-200/60 ${
                  isFeatured ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Image container */}
                <div
                  className={`relative w-full overflow-hidden bg-stone-100 ${
                    isFeatured ? 'h-[360px] md:h-[480px]' : 'h-[260px]'
                  }`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes={
                      isFeatured
                        ? '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px'
                        : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px'
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={isFeatured}
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-300 group-hover:bg-stone-900/20" />
                  {/* Category chip */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card footer */}
                <div className="flex items-end justify-between gap-4 p-6">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-stone-900 transition-colors group-hover:text-stone-700">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-sm text-stone-500 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </div>
                  <button
                    aria-label={`View ${project.title} details`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 text-stone-400 transition-all duration-200 hover:border-lime-400 hover:bg-lime-400 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-500 text-sm">
            Interested in working together?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-semibold text-stone-900 underline underline-offset-4 hover:text-lime-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded"
            >
              Let&apos;s talk
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
