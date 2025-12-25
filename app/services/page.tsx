import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Zap, Globe, ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/fade-in';

export const metadata: Metadata = {
  title: 'השירותים שלי - פיתוח אתרים מקצועי',
  description:
    'שירותי פיתוח אתרים: אתרי נחיתה, אתרי תדמית עסקיים, וחנויות מקוונות. פתרונות מותאמים אישית לכל עסק.',
  openGraph: {
    title: 'השירותים שלי - אוריאל בניית אתרים',
    description:
      'שירותי פיתוח אתרים מקצועיים: Landing Pages, אתרי תדמית, וחנויות אונליין',
  },
};

const services = [
  {
    icon: Zap,
    title: 'אתרי נחיתה (Landing Pages)',
    description:
      'דף יחיד ממוקד בהמרות ומכירות, אידיאלי לקמפיינים ומוצרים ספציפיים.',
    features: [
      'עיצוב מותאם למסר שלך',
      'אופטימיזציה להמרות',
      'טעינה מהירה במיוחד',
      'טופס לידים / קריאה לפעולה',
      'אינטגרציה עם כלי שיווק',
      'ניתוח וביצועים',
    ],
    price: 'החל מ-₪1,000',
    color: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-600 dark:text-blue-400',
    highlight: false,
  },
  {
    icon: Globe,
    title: 'אתרי תדמית עסקיים',
    description:
      'אתר מלא ומקצועי לעסק שלך עם מספר דפים, תוכן עשיר וזהות ויזואלית.',
    features: [
      '5-10 דפים מעוצבים',
      'ניהול תוכן פשוט',
      'בלוג / חדשות (אופציונלי)',
      'פורטפוליו / גלריה',
      'טופס יצירת קשר מתקדם',
      'SEO מלא ומקיף',
    ],
    price: 'החל מ-₪2,500',
    color: 'from-purple-500/10 to-pink-500/10',
    iconColor: 'text-purple-600 dark:text-purple-400',
    highlight: true,
  },
  {
    icon: ShoppingCart,
    title: 'חנויות מקוונות (E-commerce)',
    description:
      'מערכת מכירה אונליין מלאה עם ניהול מוצרים, סל קניות ותשלומים מאובטחים.',
    features: [
      'ניהול מוצרים וקטגוריות',
      'סל קניות ותשלומים',
      'ניהול משלוחים',
      'פאנל ניהול מתקדם',
      'אינטגרציה עם מלאי',
      'דוחות ואנליטיקס',
    ],
    price: 'החל מ-₪6,000',
    color: 'from-green-500/10 to-emerald-500/10',
    iconColor: 'text-green-600 dark:text-green-400',
    highlight: false,
  },
];

const additionalServices = [
  'תחזוקה ועדכונים שוטפים',
  'אחסון ודומיין',
  'הדרכה ותמיכה טכנית',
  'שיפורי SEO מתקדמים',
  'אינטגרציות עם מערכות',
  "הרחבות ופיצ'רים נוספים",
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                השירותים שלי
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                פתרונות פיתוח אתרים מותאמים אישית לכל סוג של עסק
              </p>
            </div>
          </FadeIn>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 100} direction="up">
                <Card
                  className={`h-full hover-lift hover-shadow-medium transition-all duration-300 relative overflow-hidden ${
                    service.highlight ? 'border-primary shadow-lg' : ''
                  }`}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} -z-10`}
                  />

                  {service.highlight && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      פופולרי
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-background shadow-soft flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <service.icon
                        className={`h-8 w-8 ${service.iconColor}`}
                      />
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="pt-4 border-t">
                      <p className="text-2xl font-bold gradient-text mb-4">
                        {service.price}
                      </p>
                      <Button asChild className="w-full" size="lg">
                        <Link href="/contact">
                          בוא נדבר
                          <ArrowLeft className="mr-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Additional Services */}
          <FadeIn delay={300}>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    שירותים נוספים
                  </CardTitle>
                  <CardDescription className="text-center">
                    פתרונות משלימים לאחר השקת האתר
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {additionalServices.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn delay={400}>
            <div className="max-w-3xl mx-auto text-center mt-20">
              <h2 className="text-3xl font-bold mb-4">
                לא בטוח איזה שירות מתאים לך?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                בוא נדבר ונמצא ביחד את הפתרון המושלם לעסק שלך
              </p>
              <Button asChild size="lg" className="hover-lift">
                <Link href="/contact">
                  צור קשר עכשיו
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
