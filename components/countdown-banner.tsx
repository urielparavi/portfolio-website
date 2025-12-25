'use client';

import { useState, useEffect } from 'react';
import { X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Target date: 01.02.2025 23:59:59
  const targetDate = new Date('2026-02-01T23:59:59').getTime();

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = (): TimeLeft | null => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return null; // Timer expired
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Auto-hide when expired
      if (!newTimeLeft) {
        setIsVisible(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Don't render on server or if hidden or expired
  if (!isMounted || !isVisible || !timeLeft) {
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
          {/* Icon + Message */}
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="text-sm md:text-base font-bold">
              🎁 מבצע מיוחד - חסכו 400 ש"ח!
            </span>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-medium opacity-90">
              נותרו:
            </span>
            <div className="flex gap-1.5">
              <TimeBox value={timeLeft.days} label="ימים" />
              <span className="text-lg font-bold">:</span>
              <TimeBox value={timeLeft.hours} label="שעות" />
              <span className="text-lg font-bold">:</span>
              <TimeBox value={timeLeft.minutes} label="דקות" />
              <span className="text-lg font-bold">:</span>
              <TimeBox value={timeLeft.seconds} label="שניות" />
            </div>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-white/90 font-bold shadow-lg hover-lift"
          >
            <Link href="/contact">צור קשר עכשיו!</Link>
          </Button>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-2 left-2 z-20 p-1 rounded-full hover:bg-white/20 transition-colors"
        aria-label="סגור באנר"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[40px] md:min-w-[50px]">
        <span className="text-lg md:text-2xl font-bold tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] md:text-xs mt-0.5 opacity-80 font-medium">
        {label}
      </span>
    </div>
  );
}
