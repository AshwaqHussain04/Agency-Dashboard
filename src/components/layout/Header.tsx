'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/90 backdrop-blur-md shadow-sm shadow-stone-200/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="text-xl font-black tracking-tight text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded"
          aria-label="[Agency Name] — Home"
        >
          <span className="text-lime-500">[</span>Agency<span className="text-lime-500">]</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleNavClick('#contact')}
          >
            Start a Project
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-stone-700 transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="border-t border-stone-200 bg-stone-50/95 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-stone-200">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => handleNavClick('#contact')}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
