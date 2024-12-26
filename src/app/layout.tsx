import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants';
import '@/assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Next-store',
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
