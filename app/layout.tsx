import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { GoogleAnalytics } from '@/components/google-analytics';
import { BackToTop } from '@/components/back-to-top';
import { ScrollProgressBar } from '@/components/scroll-progress';
import { PageLoadingIndicator } from '@/components/page-loading-indicator';
import { Toaster } from '@/components/toaster';
import { CountdownBanner } from '@/components/countdown-banner';
import { WhatsAppButton } from '@/components/whatsapp-button';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.uriel-sites.com'),
  title: {
    default: 'אוריאל - פיתוח תוכנה, אתרים ואפליקציות | מפתח Full Stack',
    template: '%s | אוריאל - פיתוח תוכנה',
  },
  description:
    'פיתוח תוכנה, אתרים ואפליקציות בהתאמה אישית לעסק שלך. מתמחה ב‑Web Development, כולל אתרי נחיתה, אתרי תדמית, חנויות מקוונות ועוד.',
  keywords: [
    'בניית אתרים',
    'פיתוח אתרים',
    'מפתח Full Stack',
    'אתרי נחיתה',
    'אתרי תדמית',
    'חנות אונליין',
    'Next.js',
    'React',
    'TypeScript',
    'אוריאל',
  ],
  authors: [{ name: 'אוריאל', url: 'https://www.uriel-sites.com' }],
  creator: 'אוריאל',
  publisher: 'אוריאל',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.uriel-sites.com',
    title: 'אוריאל - פיתוח תוכנה, אתרים ואפליקציות | מפתח Full Stack',
    description:
      'פיתוח תוכנה, אתרים ואפליקציות בהתאמה אישית לעסק שלך. מתמחה ב‑Web Development, כולל אתרי נחיתה, אתרי תדמית, חנויות מקוונות ועוד.',
    siteName: 'אוריאל - פיתוח תוכנה',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אוריאל - פיתוח תוכנה, אתרים ואפליקציות',
    description: 'פיתוח תוכנה, אתרים ואפליקציות בהתאמה אישית לעסק שלך',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.uriel-sites.com" />
      </head>
      <body className={heebo.className}>
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics
            measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
          />
        )}

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CountdownBanner />
          <ScrollProgressBar />
          <PageLoadingIndicator />

          {children}

          <BackToTop />
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
