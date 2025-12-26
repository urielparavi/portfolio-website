'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Code2,
  Database,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    image: '/projects/nextcart.jpg',
    alt: 'NextCart - E-commerce Platform',
    title: 'NextCart',
    subtitle: 'פלטפורמת E-commerce',
    tech: [
      { name: 'Next.js', icon: Zap },
      { name: 'TypeScript', icon: Code2 },
      { name: 'PostgreSQL', icon: Database },
    ],
    badge: 'פרויקט לדוגמה',
  },
  {
    id: 2,
    image: '/projects/ai-chatbot.jpg',
    alt: 'AI Semantic Search Chatbot',
    title: "צ'אטבוט AI",
    subtitle: 'חיפוש סמנטי חכם',
    tech: [
      { name: 'Python', icon: Code2 },
      { name: 'AI', icon: Zap },
      { name: 'Semantic Search', icon: Database },
    ],
    badge: 'פרויקט לדוגמה',
  },
  {
    id: 3,
    image: '/projects/blockchain.jpg',
    alt: 'Python Blockchain Project',
    title: 'Blockchain',
    subtitle: 'מערכת מטבעות קריפטוגרפיים',
    tech: [
      { name: 'Python', icon: Code2 },
      { name: 'Cryptocurrency', icon: Zap },
      { name: 'Blockchain', icon: Database },
    ],
    badge: 'פרויקט לדוגמה',
  },
  {
    id: 4,
    image: '/projects/cozy.jpg',
    alt: 'Cozy - E-commerce Platform',
    title: 'Cozy',
    subtitle: 'פלטפורמת קנייה מתקדמת',
    tech: [
      { name: 'Next.js', icon: Zap },
      { name: 'React', icon: Code2 },
      { name: 'Commerce', icon: Database },
    ],
    badge: 'פרויקט לדוגמה',
  },
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 5000);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') nextSlide();
      if (e.key === 'ArrowRight') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  const nextIndex = (currentIndex + 1) % projects.length;
  const currentProject = projects[currentIndex];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          פרויקטים נבחרים
        </h2>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <link rel="preload" as="image" href={projects[nextIndex].image} />

          {/* Main carousel card - using theme primary */}
          <div className="relative p-1 rounded-2xl bg-gradient-to-r from-primary/90 via-primary to-primary/90 shadow-2xl shadow-primary/20 transition-shadow duration-300 hover:shadow-3xl hover:shadow-primary/30">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-card">
              {/* Badge - theme primary gradient */}
              <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-primary-foreground shadow-xl flex items-center gap-2 text-sm font-bold">
                <Sparkles className="h-4 w-4" />
                {currentProject.badge}
              </div>

              {/* Current Image with transition */}
              <div
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  isTransitioning
                    ? direction === 'next'
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                    : 'opacity-100 translate-x-0'
                }`}
              >
                <Image
                  src={currentProject.image}
                  alt={currentProject.alt}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />

                {/* Theme-based gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/15 to-primary/30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-primary/20 mix-blend-overlay" />

                {/* Content card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                  <div className="space-y-4">
                    {/* Title with theme gradient text */}
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent drop-shadow-2xl">
                      {currentProject.title}
                    </h3>

                    <p className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                      {currentProject.subtitle}
                    </p>

                    {/* Tech stack - hidden on mobile */}
                    <div className="hidden sm:flex flex-wrap gap-2">
                      {currentProject.tech.map((tech, idx) => {
                        const Icon = tech.icon;
                        const gradients = [
                          'from-primary/80 to-primary',
                          'from-primary to-primary/90',
                          'from-primary/90 to-primary/80',
                        ];
                        return (
                          <div
                            key={idx}
                            className={`px-4 py-2 rounded-lg bg-gradient-to-r ${
                              gradients[idx % 3]
                            } text-primary-foreground shadow-xl transition-shadow duration-300 hover:shadow-2xl flex items-center gap-2 text-sm font-medium`}
                          >
                            <Icon className="h-4 w-4" strokeWidth={2.5} />
                            {tech.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - hidden on mobile */}
          <Button
            variant="outline"
            size="icon"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/90 text-primary-foreground border-0 shadow-2xl shadow-primary/30 transition-all duration-300"
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="התמונה הבאה"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 shadow-2xl shadow-primary/30 transition-all duration-300"
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="התמונה הקודמת"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Theme-based gradient dots */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-primary/80 via-primary to-primary/80 shadow-lg shadow-primary/50'
                    : 'w-3 bg-muted-foreground/50 hover:w-6 hover:bg-primary/70'
                }`}
                aria-label={`עבור לתמונה ${index + 1}`}
              />
            ))}
          </div>

          {/* Pause indicator - theme primary */}
          {isPaused && (
            <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-primary/80 to-primary text-primary-foreground rounded-full shadow-xl flex items-center gap-2 text-sm font-bold">
              <div className="h-2 w-2 rounded-full bg-primary-foreground animate-pulse" />
              מושהה
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
