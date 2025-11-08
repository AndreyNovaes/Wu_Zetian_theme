import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wu Zetian: A Imperatriz Dragão | A Única Mulher Imperatriz da China',
  description:
    'Descubra a extraordinária história de Wu Zetian, a única mulher a governar a China em seu próprio direito. De concubina a imperatriz, explore sua ascensão implacável ao poder, reformas revolucionárias e um legado que desafiou mil anos de tradição.',
  keywords: 'Wu Zetian, Imperatriz da China, História Chinesa, Dinastia Tang, Dinastia Zhou, Mulheres na História',
  authors: [{ name: 'Wu Zetian Landing Page' }],
  openGraph: {
    title: 'Wu Zetian: A Imperatriz Dragão',
    description: 'A história da única mulher a fundar sua própria dinastia e governar a China.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
