import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.uriel-sites.com'),
  title: {
    default: 'אוריאל - בניית אתרים ואפליקציות | מפתח Full Stack',
    template: '%s | אוריאל - בניית אתרים',
  },
  description:
    'פיתוח אתרים מותאמים אישית לעסק שלך. מתמחה באתרי נחיתה, אתרי תדמית וחנויות מקוונות. טכנולוגיות מתקדמות: Next.js, React, TypeScript.',
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
    title: 'אוריאל - בניית אתרים ואפליקציות | מפתח Full Stack',
    description:
      'פיתוח אתרים מותאמים אישית לעסק שלך. מתמחה באתרי נחיתה, אתרי תדמית וחנויות מקוונות.',
    siteName: 'אוריאל - בניית אתרים',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אוריאל - בניית אתרים ואפליקציות',
    description: 'פיתוח אתרים מותאמים אישית לעסק שלך',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
