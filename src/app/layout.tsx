import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '[Agency Name] — Digital Design Studio',
  description:
    'We combine strategy, design, and technology to create thoughtful digital experiences for ambitious brands. UI/UX, Web Development, Brand Identity, and Digital Strategy.',
  keywords: ['design agency', 'UI/UX design', 'web development', 'brand identity', 'digital strategy'],
  authors: [{ name: '[Agency Name]' }],
  openGraph: {
    title: '[Agency Name] — Digital Design Studio',
    description:
      'We combine strategy, design, and technology to create thoughtful digital experiences for ambitious brands.',
    type: 'website',
    locale: 'en_US',
    siteName: '[Agency Name]',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Agency Name] — Digital Design Studio',
    description:
      'We combine strategy, design, and technology to create thoughtful digital experiences for ambitious brands.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-stone-50 text-stone-900">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
