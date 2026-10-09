'use client';

import { ArrowRight, Circle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-stone-50 pt-28 pb-16 md:pt-36 md:pb-24"
      aria-label="Hero section"
    >
      {/* Background decorative geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large lime blob top-right */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-lime-100/60 blur-3xl" />
        {/* Small blob bottom-left */}
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-amber-50/80 blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#1c1917 1px, transparent 1px), linear-gradient(90deg, #1c1917 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text content */}
          <div className="animate-fade-up flex flex-col gap-8">
            {/* Status indicator */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-medium text-stone-600 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-500" />
              </span>
              Currently available for new projects
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-stone-900 md:text-6xl lg:text-7xl">
                Designing Digital Experiences That{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Move</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-0 right-0 z-0 h-3 rounded bg-lime-300/60"
                  />
                </span>{' '}
                Brands Forward.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-stone-500">
                We combine strategy, design, and technology to create thoughtful digital
                experiences for ambitious brands.
              </p>
            </div>

            {/* CTA group */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                id="hero-start-project"
                onClick={() => handleScroll('contact')}
              >
                Start a Project
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                id="hero-explore-work"
                onClick={() => handleScroll('work')}
              >
                Explore Our Work
              </Button>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-6 border-t border-stone-200 pt-6">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-stone-900">40+</span>
                <span className="text-xs text-stone-500">Projects delivered</span>
              </div>
              <div className="h-8 w-px bg-stone-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-stone-900">5★</span>
                <span className="text-xs text-stone-500">Client satisfaction</span>
              </div>
              <div className="h-8 w-px bg-stone-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-stone-900">8yr</span>
                <span className="text-xs text-stone-500">Studio founded</span>
              </div>
            </div>
          </div>

          {/* Right: hero visual */}
          <div className="animate-fade-in relative">
            {/* Main card */}
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 shadow-2xl shadow-stone-400/30 aspect-[4/5]">
              {/* Geometric shapes inside hero card */}
              <div aria-hidden="true" className="absolute inset-0">
                {/* Large lime circle */}
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[40px] border-lime-400/30" />
                {/* Small filled circle */}
                <div className="absolute bottom-24 left-10 h-16 w-16 rounded-full bg-lime-400/20" />
                {/* Rectangle accent */}
                <div className="absolute top-1/3 left-8 h-1.5 w-24 rounded-full bg-lime-400" />
                {/* Dot grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #d4d0ca 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
              </div>

              {/* Floating label cards */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-lime-400 mb-1">
                    Current focus
                  </p>
                  <p className="text-lg font-bold text-white leading-tight">
                    Brand Strategy &amp; Web Design
                  </p>
                  <p className="text-xs text-stone-400 mt-1">for ambitious brands in 2026</p>
                </div>
              </div>

              {/* Agency wordmark center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-7xl font-black tracking-tighter text-white/10 select-none">
                  [Agency<br />Name]
                </p>
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-xl shadow-stone-200/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400">
                <Circle size={16} className="fill-stone-900 text-stone-900" />
              </div>
              <div>
                <p className="text-xs text-stone-500">Avg. project delivery</p>
                <p className="text-sm font-bold text-stone-900">6–8 weeks</p>
              </div>
            </div>

            {/* Floating top badge */}
            <div className="absolute -top-4 -right-4 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-xl shadow-stone-200/60">
              <p className="text-xs text-stone-500 mb-0.5">Studio status</p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-lime-400" />
                <p className="text-sm font-bold text-stone-900">Open for work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
