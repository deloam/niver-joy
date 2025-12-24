import type { Metadata } from 'next';
import { Outfit, Great_Vibes, Indie_Flower } from 'next/font/google';
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

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie-flower',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Para Joyce 🍓',
  description: 'Um cantinho especial para você.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${outfit.variable} ${greatVibes.variable} ${indieFlower.variable} antialiased text-[#5D4037]`}>
        {children}
      </body>
    </html>
  );
}
