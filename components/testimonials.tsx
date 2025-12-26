import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/fade-in';

const testimonials = [
  {
    name: 'דני כהן',
    role: 'בעל עסק - DK Design',
    content:
      'אוריאל בנה לי אתר נחיתה שהכפיל את המרות המכירות שלי! העיצוב מקצועי, האתר מהיר, והתהליך היה חלק. ממליץ בחום!',
    rating: 5,
  },
  {
    name: 'שירה לוי',
    role: 'מנהלת שיווק - TechStart',
    content:
      'עבדתי עם אוריאל על אתר החברה החדש שלנו. הוא מקצועי, זמין, ומבין בדיוק מה שצריך. האתר הושק בזמן ועבד מצוין מהיום הראשון!',
    rating: 5,
  },
  {
    name: 'מיכאל אברהם',
    role: 'יזם - FitLife',
    content:
      'חיפשתי מישהו שיבנה לי חנות אונליין מתקדמת וקיבלתי בדיוק את מה שרציתי. אוריאל מקצוען, יודע מה הוא עושה, ומספק תמיכה מעולה!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary)/0.05)_0%,transparent_50%)] -z-10" />

      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              מה לקוחות אומרים
            </h2>
            <p className="text-lg text-muted-foreground">
              המלצות אמיתיות מלקוחות מרוצים
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              {/* Gradient border wrapper */}
              <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 hover:from-primary/30 hover:via-primary/20 hover:to-primary/30 transition-all duration-300 h-full group">
                <Card className="h-full relative bg-card overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <CardContent className="pt-6 relative">
                    {/* Quote icon with gradient */}
                    <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <div className="relative">
                        <Quote className="h-12 w-12 text-primary" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-transparent blur-xl" />
                      </div>
                    </div>

                    {/* Rating stars with gradient */}
                    <div className="flex gap-1 mb-4 relative z-10">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <div key={i} className="relative">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                          </div>
                        )
                      )}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground mb-6 relative z-10 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author with gradient border */}
                    <div className="relative pt-4">
                      {/* Gradient top border */}
                      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                      <div className="flex items-center gap-3">
                        {/* Avatar placeholder with gradient */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-md shadow-primary/20">
                          <span className="text-primary font-bold text-sm">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>

                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
