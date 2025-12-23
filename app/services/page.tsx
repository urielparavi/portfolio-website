import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Globe, Store, Rocket } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export const metadata: Metadata = {
  title: 'השירותים שלי - בניית אתרים מקצועיים',
  description:
    'שירותי פיתוח אתרים: אתרי נחיתה, אתרי תדמית עסקיים, וחנויות מקוונות. פתרונות מותאמים אישית לעסק שלך.',
  openGraph: {
    title: 'השירותים שלי - אוריאל בניית אתרים',
    description:
      'שירותי פיתוח אתרים מקצועיים: Landing Pages, אתרי תדמית, E-commerce',
  },
};

const services = [
  {
    icon: Rocket,
    title: 'אתרי נחיתה (Landing Pages)',
    description:
      'דף יחיד ממוקד להמרות ומכירות. מושלם לקמפיינים שיווקיים, השקת מוצרים, או קידום שירותים ספציפיים.',
    features: [
      'עיצוב ממוקד המרות',
      'זמני טעינה מהירים',
      'אופטימיזציה ל-SEO',
      'רספונסיבי לכל המכשירים',
    ],
  },
  {
    icon: Globe,
    title: 'אתרי תדמית עסקיים',
    description:
      'אתר מלא ומקצועי לעסק שלך עם מספר דפים. מציג את השירותים, הערכים, והייחודיות של המותג שלך.',
    features: [
      'עיצוב מותאם אישית',
      'ניהול תוכן קל',
      'אינטגרציה עם כלי שיווק',
      'תמיכה ותחזוקה שוטפת',
    ],
  },
  {
    icon: Store,
    title: 'חנויות מקוונות (E-commerce)',
    description:
      'מערכת מכירה אונליין מלאה עם עגלת קניות, תשלומים מאובטחים, וניהול מלאי. מתאים למקרים מיוחדים.',
    features: [
      'מערכת תשלומים מאובטחת',
      'ניהול מלאי והזמנות',
      'פאנל ניהול מתקדם',
      'אינטגרציה עם משלוחים',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                השירותים שלי
              </h1>
              <p className="text-lg text-muted-foreground">
                מתמחה בפיתוח אתרים מקצועיים ומותאמים אישית לצרכי העסק שלך
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 100} direction="up">
                <Card className="hover-lift hover-glow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
