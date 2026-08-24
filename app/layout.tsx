import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

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
  metadataBase: new URL('https://anjaniinfrap.com'),
  title: "Anjani Infra | India's Premier Design & Build and Turnkey Contracting Firm",
  description: "Anjani Infra delivers end-to-end Turnkey Design and Build, Civil Construction, Luxury Workplace Fitouts, and Exterior Facades across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#F6F4EE] text-[#383735] font-sans min-h-screen antialiased selection:bg-[#2B5573] selection:text-[#FCF9EB]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
