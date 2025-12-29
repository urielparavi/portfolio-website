import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'צור קשר | Weby – אוריאל בניית אתרים',
  description:
    'רוצה לבנות אתר לעסק? צור קשר עם אוריאל מ-Weby לפיתוח אתרים מקצועי ב-React ו-Next.js. קבל ייעוץ חינם!',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'צור קשר | Weby – אוריאל בניית אתרים',
    description:
      'דברו עם אוריאל מ-Weby ונבנה אתר מותאם אישית ומקצועי עבור העסק שלכם',
    type: 'website',
    locale: 'he_IL',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
