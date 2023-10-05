import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FreeConverter - Free Unlimited Media Files Converter',
  description: `Unleash your creativity with FreeConverter – the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
  creator: 'Joseph Opio',
  keywords:
    'image converter, video converter, audio converter, unlimited image converter, unlimited video converter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className="container max-w-4xl min-h-screen pt-32 lg:pt-36 2xl:pt-44 lg:max-w-6xl 2xl:max-w-7xl">
          {children}
        </div>
        <Script
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4270414032614783'
          crossOrigin='anonymous'
        />
      </body>
    </html>
  );
}
