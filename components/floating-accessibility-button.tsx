'use client';

import { useState, useRef } from 'react';
import { Accessibility } from 'lucide-react';
import { AccessibilityMenu } from './accessibility-menu';

export function FloatingAccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
        className="fixed right-6 top-64 md:top-40 z-50 group focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-full"
        aria-label="פתח תפריט נגישות"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        type="button"
      >
        <div className="relative">
          {/* Button */}
          <div className="relative w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/50 group-focus-visible:scale-110 group-focus-visible:shadow-2xl group-focus-visible:shadow-primary/50 transform-gpu">
            <Accessibility
              className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12 group-focus-visible:rotate-12"
              aria-hidden="true"
            />
          </div>

          {/* Hover Ring Effect */}
          <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 scale-100 group-hover:scale-125 group-hover:opacity-0 group-focus-visible:scale-125 group-focus-visible:opacity-0 transition-all duration-500 ease-out pointer-events-none" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          נגישות
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-[-4px] border-4 border-transparent border-r-gray-900 dark:border-r-gray-100" />
        </div>
      </button>

      {isOpen && (
        <AccessibilityMenu
          onClose={() => setIsOpen(false)}
          returnFocusRef={buttonRef}
        />
      )}
    </>
  );
}
