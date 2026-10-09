'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, AtSign, Link2, Code2 } from 'lucide-react';


const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: AtSign, label: 'Twitter / X', href: '#' },
  { icon: Link2, label: 'LinkedIn', href: '#' },
  { icon: Code2, label: 'GitHub', href: '#' },
];

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="border-t border-stone-200 bg-stone-50" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-black tracking-tight text-stone-900">
              <span className="text-lime-500">[</span>Agency<span className="text-lime-500">]</span>
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-stone-500">
              We design and build digital products that move brands forward. Based in{' '}
              <span className="font-medium text-stone-700">[Location]</span>.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
              Navigation
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-600 transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + Contact */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
                Social
              </p>
              <ul className="flex gap-3" role="list">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-stone-500 transition-all hover:border-lime-400 hover:bg-lime-400 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                    >
                      <Icon size={15} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400 mb-2">
                Say hello
              </p>
              <a
                href="mailto:[email@example.com]"
                className="text-sm font-medium text-stone-700 underline underline-offset-4 hover:text-lime-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded"
              >
                [Email Address]
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-stone-200 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-stone-400">
            &copy; {year} <span className="font-medium text-stone-600">[Agency Name]</span>. All rights reserved.
          </p>
          <p className="text-xs text-stone-400">
            Crafted with care for ambitious brands.
          </p>
        </div>
      </div>
    </footer>
  );
}
