'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    image: '/projects/nextcart.jpg',
    alt: 'NextCart - E-commerce Platform',
    title: 'NextCart – פלטפורמת E-commerce',
    description: 'Next.js, TypeScript, PostgreSQL',
    date: 'July 2025',
  },
  {
    id: 2,
    image: '/projects/ai-chatbot.jpg',
    alt: 'AI Semantic Search Chatbot',
    title: "צ'אטבוט AI חכם",
    description: 'Python, AI, Semantic Search',
    date: 'November 2025',
  },
  {
    id: 3,
    image: '/projects/blockchain.jpg',
    alt: 'Python Blockchain Project',
    title: 'Blockchain - מערכת מטבעות קריפטוגרפיים',
    description: 'Python, Cryptocurrency, Blockchain',
    date: 'October 2025',
  },
  {
    id: 4,
    image: '/projects/cozy.jpg',
    alt: 'Cozy - E-commerce Platform',
    title: 'Cozy – פלטפורמת קנייה מתקדמת',
    description: 'חנות אונליין עם מוצרים איכותיים ונוחים',
    date: 'June 2024',
  },
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          פרויקטים נבחרים
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-lg">
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].alt}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-bold">
                {projects[currentIndex].title}
              </h3>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={nextSlide}
            aria-label="התמונה הבאה"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={prevSlide}
            aria-label="התמונה הקודמת"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`עבור לתמונה ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
