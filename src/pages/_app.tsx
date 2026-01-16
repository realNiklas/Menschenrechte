import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Menschenrechte - Schulprojekt',
  description: 'Eine umfassende Website über Menschenrechte für einen Schulwettbewerb',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-gray-50">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
