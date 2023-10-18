import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Listening Patterns',
  description: 'Analyzer spotify listening pattern',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen items-center justify-between  bg-emerald-950 text-white px-24">
          <Navbar />
          <div className="w-max flex justify-center flex-grow items-center p-12">
            <div className="basis-1/3">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
