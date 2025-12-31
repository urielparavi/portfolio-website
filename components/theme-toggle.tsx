'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative w-9 h-9">
        <div className="w-5 h-5" />
      </Button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group relative w-9 h-9 rounded-full hover:bg-primary/10 transition-colors duration-300"
      aria-label={isDark ? 'עבור למצב בהיר' : 'עבור למצב כהה'}
    >
      {/* Sun Icon - בצבע primary של האתר */}
      <Sun
        className={`absolute h-5 w-5 text-primary transition-all duration-500 ease-out transform-gpu ${
          isDark
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100 group-hover:rotate-[15deg] group-hover:scale-110'
        }`}
      />

      {/* Moon Icon - בצבע primary של האתר */}
      <Moon
        className={`absolute h-5 w-5 text-primary transition-all duration-500 ease-out transform-gpu ${
          isDark
            ? 'rotate-0 scale-100 opacity-100 group-hover:-rotate-[15deg] group-hover:scale-110'
            : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </Button>
  );
}
