'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-lime-400 disabled:opacity-60 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-lime-400 text-stone-950 hover:bg-lime-300 active:scale-[0.97] focus-visible:ring-lime-400',
    secondary:
      'border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50 active:scale-[0.97]',
    ghost:
      'text-stone-600 hover:text-stone-900 hover:bg-stone-100 active:scale-[0.97]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
