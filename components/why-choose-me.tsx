import { Check, Zap, Shield, Headphones } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const reasons = [
  {
    icon: Zap,
    title: "ביצועים מהירים",
    description: "אתרים מהירים וממוטבים שנטענים בשניות ומספקים חוויית משתמש מעולה",
  },
  {
    icon: Shield,
    title: "אבטחה ואמינות",
    description: "קוד נקי ומאובטח עם best practices מהתעשייה",
  },
  {
    icon: Check,
    title: "עיצוב מותאם אישית",
    description: "כל פרויקט מעוצב במיוחד בהתאם לצרכים ולמותג שלך",
  },
  {
    icon: Headphones,
    title: "תמיכה מלאה",
    description: "זמינות ותמיכה טכנית לאורך כל הדרך ואחרי השקה",
  },
];

export function WhyChooseMe() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              למה לבחור בי?
            </h2>
            <p className="text-lg text-muted-foreground">
              אני משלב ניסיון טכני עם תשומת לב לפרטים כדי לספק אתרים שמביאים תוצאות
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
