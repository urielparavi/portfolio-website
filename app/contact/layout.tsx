import { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר - בוא נדבר על הפרויקט שלך",
  description: "יש לך פרויקט במחשבה? צור קשר עם אוריאל לפיתוח אתרים מקצועיים. אימייל: urielpa308@gmail.com | טלפון: 054-6803661",
  openGraph: {
    title: "צור קשר - אוריאל בניית אתרים",
    description: "בוא נדבר על הפרויקט שלך ונבנה משהו מדהים ביחד",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
