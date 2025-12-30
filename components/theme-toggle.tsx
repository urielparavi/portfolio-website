'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'החלף למצב בהיר' : 'החלף למצב כהה'}
      className="relative hover-lift transition-all duration-300 rounded-md hover:bg-gradient-to-r hover:from-primary/5 hover:via-primary/10 hover:to-primary/5 hover:shadow-lg hover:shadow-primary/5"
    >
      <Sun className="h-5 w-5 absolute transition-all duration-700 ease-out rotate-0 scale-100 opacity-100 dark:rotate-90 dark:scale-0 dark:opacity-0" />
      <Moon className="h-5 w-5 transition-all duration-700 ease-out rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" />
    </Button>
  );
}
