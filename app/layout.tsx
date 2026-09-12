import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

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
  title: "Anjani Infra | Luxury Home Interior Designers in Hyderabad",
  description: "Anjani Infra is Hyderabad's premier Design & Build and home interior design enterprise providing 100% customized modular kitchens, wardrobes, and luxury living spaces with 35-40 day delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 font-sans min-h-screen antialiased selection:bg-[#C5A059] selection:text-[#132B3E]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
