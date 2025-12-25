import { FadeIn } from '@/components/fade-in';
import { Store, Rocket, Palette, User, Building2, TrendingUp } from 'lucide-react';

const audiences = [
  {
    icon: Store,
    title: 'עסקים קטנים ובינוניים',
    description: 'צריכים נוכחות דיגיטלית מקצועית שמביאה לקוחות ומגדילה מכירות',
    gradient: 'from-blue-500 to-cyan-500',
    position: 'md:translate-x-0',
  },
  {
    icon: Rocket,
    title: 'סטארטאפים וחברות צעירות',
    description: 'רוצים MVP מהיר או אתר שמציג את החזון ומושך משקיעים ולקוחות ראשונים',
    gradient: 'from-purple-500 to-pink-500',
    position: 'md:translate-x-8',
  },
  {
    icon: Palette,
    title: 'מעצבים, אמנים ויוצרים',
    description: 'צריכים portfolio יפה שמציג את העבודות בצורה הטובה ביותר ומושך פרויקטים חדשים',
    gradient: 'from-pink-500 to-rose-500',
    position: 'md:translate-x-16',
  },
  {
    icon: TrendingUp,
    title: 'עסקים שרוצים למכור אונליין',
    description: 'זקוקים לחנות אינטרנט מקצועית עם מערכת תשלומים, ניהול מלאי ותמיכה מלאה',
    gradient: 'from-green-500 to-emerald-500',
    position: 'md:translate-x-24',
  },
  {
    icon: User,
    title: 'עצמאיים ובעלי מקצוע חופשי',
    description: 'זקוקים לאתר תדמית שמציג את השירותים ומקל על לקוחות ליצור קשר',
    gradient: 'from-orange-500 to-amber-500',
    position: 'md:translate-x-32',
  },
  {
    icon: Building2,
    title: 'חברות עם אתר ישן',
    description: 'רוצים לשדרג לטכנולוגיות מודרניות עם ביצועים טובים יותר וחווית משתמש משופרת',
    gradient: 'from-indigo-500 to-blue-500',
    position: 'md:translate-x-40',
  },
];

export function WhoItsForDiagonal() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10" />

      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              למי זה מתאים?
            </h2>
            <p className="text-lg text-muted-foreground">
              עובד עם מגוון רחב של לקוחות - מעסקים קטנים ועד חברות מבוססות
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
                    <div className="relative bg-card border-2 border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
                      {/* Gradient border on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${audience.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
                      
                      <div className="flex gap-4 items-start">
                        {/* Icon with gradient background */}
                        <div className="shrink-0">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                            <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {audience.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {audience.description}
                          </p>
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
              <a href="#contact" className="text-primary hover:underline font-medium">
                בוא נדבר
              </a>{' '}
              ונראה יחד מה הפתרון הטוב ביותר עבורך
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
