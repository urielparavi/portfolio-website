import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

const testimonials = [
  {
    name: "דני כהן",
    role: "בעל עסק - DK Design",
    content: "אוריאל בנה לי אתר נחיתה שהכפיל את המרות המכירות שלי! העיצוב מקצועי, האתר מהיר, והתהליך היה חלק. ממליץ בחום!",
    rating: 5,
  },
  {
    name: "שירה לוי",
    role: "מנהלת שיווק - TechStart",
    content: "עבדתי עם אוריאל על אתר החברה החדש שלנו. הוא מקצועי, זמין, ומבין בדיוק מה שצריך. האתר הושק בזמן ועבד מצוין מהיום הראשון!",
    rating: 5,
  },
  {
    name: "מיכאל אברהם",
    role: "יזם - FitLife",
    content: "חיפשתי מישהו שיבנה לי חנות אונליין מתקדמת וקיבלתי בדיוק את מה שרציתי. אוריאל מקצוען, יודע מה הוא עושה, ומספק תמיכה מעולה!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5 -z-10" />
      
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
              <Card className="h-full hover-lift hover-glow relative">
                <CardContent className="pt-6">
                  {/* Quote icon */}
                  <div className="absolute top-4 left-4 opacity-10">
                    <Quote className="h-12 w-12 text-primary" />
                  </div>

                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
