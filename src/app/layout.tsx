import type { Metadata } from 'next';
import { Outfit, Great_Vibes } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Parabéns!',
  description: 'Um site especial para um dia especial.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
