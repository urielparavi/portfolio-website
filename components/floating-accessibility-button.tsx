'use client';

import { useState } from 'react';
import { Accessibility } from 'lucide-react';
import { AccessibilityMenu } from './accessibility-menu';

export function FloatingAccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 top-40 z-50 group"
        aria-label="פתח תפריט נגישות"
      >
        <div className="relative">
          {/* Button */}
          <div className="relative w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/50 transform-gpu">
            <Accessibility className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
          </div>

          {/* Hover Ring Effect */}
          <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500 ease-out pointer-events-none" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          נגישות
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-[-4px] border-4 border-transparent border-r-gray-900 dark:border-r-gray-100" />
        </div>
      </button>

      {isOpen && <AccessibilityMenu onClose={() => setIsOpen(false)} />}
    </>
  );
}
