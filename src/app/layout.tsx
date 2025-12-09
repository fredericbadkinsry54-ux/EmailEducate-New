import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google'
import { Footer } from '@/components/layout/Footer';
import { CookieConsentCard } from '@/components/layout/CookieConsentCard';

export const metadata: Metadata = {
  title: 'Learn Email Marketing Faster, Using Brevo’s Best Features',
  description: 'Clear, practical lessons that help you understand campaigns, segmentation, automation, and CRM inside Brevo — without complexity or technical confusion.',
  verification: {
    google: 'google5b466ffc8c3f7b9e',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <CookieConsentCard />
      </body>
    </html>
  );
}
