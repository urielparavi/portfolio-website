import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'פורטפוליו | Weby – אוריאל בניית אתרים',
  description:
    "צפה במבחר פרויקטים מקצועיים: אתרי Next.js, אתרי React, צ'אטבוטים AI, פתרונות Blockchain וחנויות E-commerce. עבודות אמיתיות של אוריאל.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'פורטפוליו | Weby – אוריאל בניית אתרים',
    description:
      'מבחר פרויקטים מגוונים: אתרים מקצועיים, Chatbot AI, Blockchain, E-commerce, וטכנולוגיות מתקדמות ליצירת פתרונות דיגיטליים',
    type: 'website',
    locale: 'he_IL',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
