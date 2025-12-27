'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user already accepted
    const accepted = localStorage.getItem('cookie-consent');

    if (!accepted) {
      // Show after 3 seconds (better UX)
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-500"
      role="dialog"
      aria-label="הודעת Cookies"
    >
      {/* Gradient border wrapper */}
      <div className="p-[1px] bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20">
        <div className="bg-card backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Content */}
              <div className="flex items-start gap-3 flex-1">
                {/* Cookie Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Cookie className="h-5 w-5 text-primary" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    אנחנו משתמשים ב-Cookies ושירותי צד שלישי (Tawk.to, Google
                    Analytics) לשיפור חוויית המשתמש וניתוח תעבורה.{' '}
                    <Link
                      href="/privacy-policy"
                      className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors font-medium"
                    >
                      מדיניות פרטיות
                    </Link>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button
                  onClick={accept}
                  className="flex-1 sm:flex-none bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 shadow-lg shadow-primary/20 hover-lift"
                >
                  הבנתי ✓
                </Button>
                <Button
                  onClick={accept}
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0 hover:bg-muted"
                  aria-label="סגור"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
