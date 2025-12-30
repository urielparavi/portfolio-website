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
import { CookieBanner } from '@/components/cookie-banner';
import { SkipToMain } from '@/components/skip-to-main';
import { FloatingAccessibilityButton } from '@/components/floating-accessibility-button';
import { AIChat } from '@/components/ai-chat';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.uriel-sites.com'),
  title: {
    default: 'בניית אתרים לעסקים | Weby – אוריאל אתרי תדמית ונחיתה',
    template: '%s | Weby – אוריאל בניית אתרים',
  },

  description:
    'בניית אתרים מקצועית לעסקים עם Weby: אתרי תדמית, אתרי נחיתה וחנויות אונליין. פיתוח מהיר, מודרני ומותאם אישית על ידי אוריאל. החל מ-₪1,500.',

  authors: [{ name: 'אוריאל - Weby', url: 'https://www.uriel-sites.com' }],
  creator: 'Weby - אוריאל',
  publisher: 'Weby',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.uriel-sites.com',
    title: 'בניית אתרים לעסקים | Weby – אוריאל',
    description:
      'בניית אתרים מקצועית: אתרי תדמית, נחיתה וחנויות אונליין. פיתוח מהיר ומותאם אישית על ידי אוריאל.',
    siteName: 'Weby – אוריאל בניית אתרים',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Weby - בניית אתרים מקצועית לעסקים',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'בניית אתרים לעסקים | Weby – אוריאל',
    description:
      'אתרי תדמית, נחיתה וחנויות אונליין – בניית אתרים מקצועית על ידי אוריאל',
    images: ['/og-image.jpg'],
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
        <SkipToMain />
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

          <AIChat />
          <BackToTop />
          <WhatsAppButton />
          <CookieBanner />
          <Toaster />
          <FloatingAccessibilityButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
