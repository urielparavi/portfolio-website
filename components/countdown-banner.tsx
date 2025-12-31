'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HIDDEN_PATHS = ['/privacy-policy', '/terms-of-service', '/accessibility'];

export function CountdownBanner() {
  const pathname = usePathname();

  const shouldHide = HIDDEN_PATHS.some((path) => pathname.startsWith(path));

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const targetDate = new Date('2026-02-01T23:59:59').getTime();

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = (): TimeLeft | null => {
      const difference = targetDate - Date.now();

      if (difference <= 0) return null;

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (!newTimeLeft) setIsVisible(false);
    }, 1000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetDate]);

  // תנאי יחיד - נקי וברור
  if (!isMounted || !isVisible || !timeLeft || isScrolled || shouldHide) {
    return null;
  }

  return (
    <div
      className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden"
      style={{
        animation: 'gentleElastic 0.65s cubic-bezier(0.34, 1.15, 0.64, 1)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="text-sm md:text-base font-bold">
              🎁 הטבה מיוחדת למזמינים עכשיו – אל תחמיצו!
            </span>
          </div>

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

      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 left-2 z-20 p-1 rounded-full hover:bg-white/20 transition-colors"
        aria-label="סגור באנר"
      >
        <X className="h-4 w-4" />
      </button>

      <style jsx>{`
        @keyframes gentleElastic {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.9;
          }
          65% {
            transform: translateY(0.5%);
          }
          80% {
            transform: translateY(-0.2%);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
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
