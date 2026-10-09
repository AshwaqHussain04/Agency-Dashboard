'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32" aria-label="Services section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading row */}
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={`Our\nServices`}
            className="whitespace-pre-line"
          />
          <p className="max-w-sm text-stone-500 md:text-right">
            From initial concept through to launch and beyond — we&apos;re your end-to-end
            creative and digital partner.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom cta strip */}
        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-bold text-stone-900">
              Not sure which service fits your needs?
            </p>
            <p className="text-sm text-stone-500 mt-1">
              Drop us a line and we&apos;ll help you figure out the best path forward.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
