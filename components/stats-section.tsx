import { FadeIn } from '@/components/fade-in';

const stats = [
  {
    value: '16+',
    label: 'טכנולוגיות',
    description: 'שאני עובד איתן',
  },
  {
    value: '51',
    label: 'פרויקטים',
    description: 'שהושלמו בהצלחה',
  },
  {
    value: '100%',
    label: 'מחויבות',
    description: 'לאיכות ולביצועים',
  },
  {
    value: '24/7',
    label: 'תמיכה',
    description: 'זמינות מלאה',
  },
];

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
