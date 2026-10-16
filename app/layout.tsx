import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond, Outfit } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { FloatingActions } from '@/components/FloatingActions';
import { CustomCursor } from '@/components/CustomCursor';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

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
  metadataBase: new URL('https://www.anjaniinfrap.com'),
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/',
  },
  title: "Anjani Infra | Luxury Interior & Architecture in Hyderabad",
  description: "Anjani Infra delivers high-end bespoke residential, villa, and corporate infrastructure solutions across Hyderabad. Turnkey execution, direct factory precision, and 10-year warranty.",
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} ${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="bg-[#0a0a0a] text-[#e8e4de] font-sans min-h-screen antialiased selection:bg-[#c9a96e] selection:text-[#0a0a0a]">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <FloatingActions />
      </body>
    </html>
  );
}
