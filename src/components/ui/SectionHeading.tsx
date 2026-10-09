import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
          <span className="block h-px w-6 bg-lime-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl font-black tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-lg text-stone-500 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
