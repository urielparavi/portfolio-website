import { FadeIn } from '@/components/fade-in';
import {
  Store,
  Rocket,
  Palette,
  User,
  Building2,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

const audiences = [
  {
    icon: Store,
    title: 'בעלי עסקים קטנים ובינוניים',
    description:
      'הזקוקים לנוכחות דיגיטלית מקצועית שמביאה לקוחות ומסייעת לצמיחה',
    position: 'md:translate-x-0',
  },
  {
    icon: Rocket,
    title: 'סטארטאפים וחברות צעירות',
    description:
      'שרוצים אתר או MVP שמציג את החזון ומושך משקיעים ולקוחות ראשונים',
    position: 'md:translate-x-8',
  },
  {
    icon: Palette,
    title: 'מעצבים, אמנים ויוצרים',
    description:
      'שצריכים Portfolio או אתר אישי שמציג את העבודות בצורה המרשימה ביותר ומושך פרויקטים חדשים',
    position: 'md:translate-x-16',
  },
  {
    icon: TrendingUp,
    title: 'למי שרוצה למכור אונליין',
    description:
      'חנות אינטרנט מקצועית עם מערכת תשלומים, ניהול מלאי ותמיכה מלאה – מתאים גם לפרויקטים קטנים ואישיים',
    position: 'md:translate-x-24',
  },
  {
    icon: User,
    title: 'עצמאיים, פרילנסרים ובעלי מקצוע חופשי',
    description:
      'הזקוקים לאתר תדמית או אישי שמציג את השירותים ומקל על לקוחות ליצור קשר',
    position: 'md:translate-x-32',
  },
  {
    icon: Building2,
    title: 'אנשים עם אתר קיים או פרויקט ישן',
    description:
      'שרוצים לשדרג את האתר או הפרויקט שלהם לטכנולוגיות מודרניות עם חוויית משתמש משופרת – מתאים לעסקים וגם לפרויקטים אישיים',
    position: 'md:translate-x-40',
  },
];

export function WhoItsForDiagonal() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary)/0.05)_0%,transparent_50%)] -z-10" />

      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              למי זה מתאים?
            </h2>
            <p className="text-lg text-muted-foreground">
              עובד עם מגוון לקוחות – מעצמאים, פרטיים, ובעלי מקצוע ועד חברות
              וסטארטאפים – ועוזר להם ליצור את הבייבי שלהם.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Diagonal overlapping cards */}
          <div className="relative space-y-4">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              const zIndex = audiences.length - index;

              return (
                <FadeIn key={index} delay={index * 100} direction="up">
                  <div
                    className={`group relative transition-all duration-500 hover:scale-105 hover:z-50 ${audience.position}`}
                    style={{ zIndex }}
                  >
                    {/* Gradient border wrapper */}
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-primary/30 transition-all duration-300">
                      <div className="relative bg-card rounded-2xl p-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex gap-4 items-start relative z-10">
                          {/* Icon with gradient background */}
                          <div className="shrink-0">
                            <div className="relative">
                              {/* Glow effect behind icon */}
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                              {/* Icon container */}
                              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-primary/30">
                                <Icon
                                  className="h-8 w-8 text-primary-foreground"
                                  strokeWidth={1.5}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                              {audience.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {audience.description}
                            </p>
                          </div>
                        </div>

                        {/* Number indicator */}
                        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <FadeIn delay={500}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              לא בטוח אם זה מתאים לך?{' '}
              <Link
                href="/contact"
                className="text-primary hover:underline font-medium transition-all duration-300 hover:text-primary/80"
              >
                בוא נדבר
              </Link>{' '}
              ונראה יחד מה הפתרון הטוב ביותר עבורך
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
