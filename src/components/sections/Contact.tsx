'use client';

import { useState, useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { Send, MapPin, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import type { FormData, FormState } from '@/types';

const initialForm: FormData = { name: '', email: '', message: '' };

function validate(data: FormData): Partial<Record<keyof FormData, string>> {
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.message.trim()) errors.message = 'Please enter a message.';
  else if (data.message.trim().length < 10)
    errors.message = 'Your message must be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [state, setState] = useState<FormState>({ status: 'idle' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setState({ status: 'loading' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { message: string };
      if (res.ok) {
        setState({ status: 'success', message: data.message });
        setForm(initialForm);
      } else {
        setState({ status: 'error', message: data.message ?? 'Something went wrong.' });
      }
    } catch {
      setState({
        status: 'error',
        message: 'Unable to send — please check your connection and try again.',
      });
    }
  };

  const inputBase =
    'w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent';
  const inputValid = 'border-stone-200 hover:border-stone-300';
  const inputError = 'border-red-300 focus:ring-red-400';

  return (
    <section id="contact" className="bg-stone-900 py-24 md:py-32" aria-label="Contact section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: heading + details */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-lime-400">
                <span className="block h-px w-6 bg-lime-400" />
                Get in touch
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Let&apos;s Build Something{' '}
                <span className="text-lime-400">Great</span>.
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-stone-400">
                Tell us about your project and we&apos;ll come back to you with ideas, a timeline,
                and a tailored proposal — usually within 48 hours.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-stone-400">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-800 text-lime-400">
                  <Mail size={16} />
                </span>
                <a
                  href="mailto:[email@example.com]"
                  className="text-sm hover:text-lime-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded"
                >
                  [Email Address]
                </a>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-800 text-lime-400">
                  <MapPin size={16} />
                </span>
                <span className="text-sm">[Location]</span>
              </div>
            </div>

            {/* Process blurb */}
            <div className="rounded-2xl bg-stone-800/60 border border-stone-700 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-lime-400 mb-3">
                Our process
              </p>
              <ol className="flex flex-col gap-2">
                {['Discovery call', 'Proposal & scoping', 'Design sprint', 'Build & launch'].map(
                  (step, i) => (
                    <li key={step} className="flex items-center gap-3 text-sm text-stone-400">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-stone-600 text-xs font-bold text-stone-500">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ),
                )}
              </ol>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-stone-800 bg-stone-800/40 p-8 backdrop-blur-sm md:p-10">
            {state.status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle size={48} className="text-lime-400" />
                <h3 className="text-2xl font-bold text-white">Message received!</h3>
                <p className="text-stone-400 max-w-xs">{state.message}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 text-lime-400 hover:text-lime-300 hover:bg-stone-700"
                  onClick={() => setState({ status: 'idle' })}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-stone-300">
                    Name <span aria-hidden="true" className="text-lime-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`${inputBase} ${errors.name ? inputError : inputValid}`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-stone-300">
                    Email <span aria-hidden="true" className="text-lime-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`${inputBase} ${errors.email ? inputError : inputValid}`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-stone-300">
                    Message <span aria-hidden="true" className="text-lime-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project…"
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${inputBase} resize-none ${errors.message ? inputError : inputValid}`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {state.status === 'error' && (
                  <div role="alert" className="flex items-start gap-2 rounded-xl bg-red-950/50 border border-red-800 p-3 text-sm text-red-300">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    {state.message}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  id="contact-submit"
                  disabled={state.status === 'loading'}
                  className="w-full"
                >
                  {state.status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-stone-500">
                  No spam. We&apos;ll only use this to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
