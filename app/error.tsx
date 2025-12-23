"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">משהו השתבש</h1>
        
        <p className="text-muted-foreground mb-8">
          מצטערים, נתקלנו בשגיאה בלתי צפויה. אנא נסה שוב.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => reset()}>
            נסה שוב
          </Button>
          <Button variant="outline" onClick={() => window.location.href = "/"}>
            חזרה לדף הבית
          </Button>
        </div>
        
        {process.env.NODE_ENV === "development" && (
          <details className="mt-8 text-right">
            <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
              פרטי שגיאה (למפתחים)
            </summary>
            <pre className="mt-4 p-4 bg-muted rounded-lg text-xs overflow-auto text-left">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
