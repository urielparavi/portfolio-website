import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          הדף לא נמצא
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          מצטערים, הדף שחיפשת אינו קיים או הועבר למקום אחר
        </p>
        
        <Button asChild size="lg">
          <Link href="/">
            <Home className="ml-2 h-5 w-5" />
            חזרה לדף הבית
          </Link>
        </Button>
      </div>
    </div>
  );
}
