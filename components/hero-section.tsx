import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 gradient-bg-2 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              פיתוח אתרים מותאמים אישית
              <span className="block mt-2 gradient-text">
                לעסק שלך
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              בונה אתרים מקצועיים ומודרניים עם טכנולוגיות מתקדמות.
              מאתרי נחיתה ועד חנויות מקוונות מלאות.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-lift">
                <Link href="/contact">
                  צור קשר
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link href="/portfolio">
                  צפה בפרויקטים
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
