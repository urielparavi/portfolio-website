import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <div className="text-6xl mb-6">🔍</div>
          <h2 className="text-3xl font-bold mb-4">הדף לא נמצא</h2>
          <p className="text-lg text-muted-foreground mb-8">
            מצטערים, הדף שחיפשת לא קיים או הוסר.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="h-5 w-5" />
              חזרה לדף הבית
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/contact">
              צור קשר
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm text-muted-foreground mb-4">דפים פופולריים:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link 
              href="/services" 
              className="text-sm hover:text-primary transition-colors"
            >
              השירותים שלי
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/portfolio" 
              className="text-sm hover:text-primary transition-colors"
            >
              אתרים שבניתי
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/about" 
              className="text-sm hover:text-primary transition-colors"
            >
              אודות
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
