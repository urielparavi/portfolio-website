import { MessageCircle, Palette, Code, Rocket, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "פגישת היכרות",
    description: "נפגשים להבנת הצרכים, היעדים, והחזון שלך. אני שואל הרבה שאלות כדי להבין בדיוק מה אתה צריך.",
  },
  {
    number: 2,
    icon: Palette,
    title: "עיצוב והצעה",
    description: "יוצר הצעת מחיר מפורטת ועיצוב ראשוני. אנחנו מתאמים ציפיות, לוחות זמנים, ומאשרים את הכיוון העיצובי.",
  },
  {
    number: 3,
    icon: Code,
    title: "פיתוח",
    description: "בונה את האתר שלך עם קוד נקי ומקצועי. מעדכן אותך לאורך הדרך ומקבל משוב בנקודות ציון חשובות.",
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: "בדיקות ואישור",
    description: "בודק את האתר לעומק - ביצועים, נייד, דפדפנים שונים. אתה מקבל גישה לבדיקה ואנחנו מבצעים תיקונים אחרונים.",
  },
  {
    number: 5,
    icon: Rocket,
    title: "השקה ותמיכה",
    description: "משיקים את האתר לאוויר! מספק לך הדרכה, תיעוד, ו-30 יום של תמיכה מלאה. האתר שלך מוכן לעבודה!",
  },
];

export function Process() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-background -z-10" />
      
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              תהליך העבודה
            </h2>
            <p className="text-lg text-muted-foreground">
              5 שלבים פשוטים מהרעיון ועד לאתר מוכן
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 100} direction="left">
                <div className="relative">
                  {/* Connection line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute right-[2.4rem] top-20 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20 -z-10" />
                  )}

                  <div className="flex gap-6 items-start group">
                    {/* Number and Icon */}
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <step.icon className="h-10 w-10 text-primary" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
