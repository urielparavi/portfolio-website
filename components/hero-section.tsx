import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 gradient-bg-2 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              פיתוח אתרים מותאם אישית
              <span className="block mt-2 gradient-text">לעסק שלך</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              בונה אתרים מקצועיים ומודרניים עם טכנולוגיות מתקדמות. מאתרי נחיתה
              ועד חנויות מקוונות מלאות.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              {/* Primary CTA with gradient glow */}
              <div className="relative group inline-block">
                <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-md" />
                <Button
                  asChild
                  size="lg"
                  className="relative hover-lift bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 shadow-xl shadow-primary/20 w-full sm:w-auto"
                >
                  <Link href="/contact">
                    מוכנים להתחיל? בואו ונבנה משהו מדהים!
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Secondary CTA with gradient border */}
              <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 hover:from-primary/40 hover:via-primary/30 hover:to-primary/40 transition-all duration-300 inline-block">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="relative hover-lift bg-background hover:bg-gradient-to-r hover:from-primary/5 hover:via-primary/10 hover:to-primary/5 border-0 shadow-lg w-full sm:w-auto"
                >
                  <Link href="/portfolio">צפה בפרויקטים</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
