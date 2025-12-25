import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'הפורטפוליו שלי - פרויקטים שבניתי',
  description:
    "מבחר פרויקטים שבניתי: צ'אטבוט AI, Blockchain, E-commerce, ועוד. טכנולוגיות: React, Next.js, TypeScript, Python, AI.",
  openGraph: {
    title: 'הפורטפוליו שלי - אוריאל בניית אתרים',
    description:
      '51 פרויקטים מגוונים: AI, Blockchain, E-commerce, ואפליקציות web מתקדמות',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
