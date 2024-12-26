import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';
import '@/assets/styles/globals.css';
import ThemeProvider from '@/components/providers/ThemeProvider/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Next-store',
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
