'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

const projects = [
  {
    id: 1,
    image: '/projects/ai-chatbot.jpg',
    title: "צ'אטבוט AI חכם עם חיפוש סמנטי",
    description:
      "מערכת צ'אטבוט מתקדמת המבצעת חיפוש סמנטי במסמכים שהועלו על ידי המשתמש, משלבת AI ופייתון עם טכנולוגיות web.",
    technologies: ['Python', 'AI', 'OpenAI SDK', 'RAG'],
    category: 'Backend',
    year: '2025',
    link: '#',
  },
  {
    id: 2,
    image: '/projects/recipe-bot.jpg',
    title: "צ'אטבוט מודלה ליצירת מתכונים",
    description:
      "צ'אטבוט שמספק מתכונים מלאים – כולל מרכיבים, כמויות, שלבי הכנה וזמן הכנה – לכל מנה שתבחר, בצורה אינטראקטיבית ונוחה.",
    technologies: ['Next.js', 'AI', 'OpenAI SDK', 'Chatbot', 'Recipes'],
    category: 'Full Stack',
    year: '2025',
    link: '#',
  },
  {
    id: 3,
    image: '/projects/blockchain.jpg',
    title: 'מערכת Blockchain ומטבע קריפטו',
    description:
      'פרויקט מעשי שבו בניתי מערכת Blockchain ומטבע קריפטו מלאה באמצעות Python מהבסיס.',
    technologies: ['Python', 'Blockchain', 'Cryptocurrency'],
    category: 'Backend',
    year: '2025',
    link: '#',
  },
  {
    id: 4,
    image: '/projects/nextcart.jpg',
    title: 'NextCart - פלטפורמת E-commerce',
    description:
      'פלטפורמת סחר אלקטרוני מתקדמת הבנויה עם Next.js, TypeScript ו-PostgreSQL, כוללת תשלומים, פאנל ניהול ואימות מלא.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Payments'],
    category: 'Full Stack',
    year: '2025',
    link: '#',
  },
  {
    id: 5,
    image: '/projects/cozy.jpg',
    title: 'Cozy - חנות אונליין מודרנית',
    description:
      'עיין במבצעים בלעדיים והגעות אחרונות. חווית קנייה חלקה ואמינה עם מוצרים איכותיים המיועדים לנוחות וסטייל.',
    technologies: ['React', 'E-commerce', 'UI/UX'],
    category: 'Frontend',
    year: '2024',
    link: '#',
  },
  {
    id: 6,
    image: '/projects/focusflow.jpg',
    title: 'FocusFlow - אפליקציית פוקוס',
    description:
      'אפליקציית טיימר מינימליסטית שנועדה לעזור למשתמשים לשפר ריכוז באמצעות טכניקת Pomodoro.',
    technologies: ['React', 'Timer', 'Productivity'],
    category: 'Frontend',
    year: '2024',
    link: '#',
  },
  {
    id: 7,
    image: '/projects/natours.jpg',
    title: 'Natours - אתר הזמנת טיולים',
    description:
      'אתר הזמנת טיולים מעוצב להפליא הבנוי עם טכנולוגיות frontend מודרניות, עם דגש על חוויית משתמש ועיצוב רספונסיבי.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'Frontend',
    year: '2023',
    link: '#',
  },
  {
    id: 8,
    image: '/projects/jobify.jpg',
    title: 'Jobify - מערכת ניהול חיפוש עבודה',
    description:
      'אפליקציה לניהול וארגון חיפוש עבודה, מסייעת למשתמשים לארגן את חיפוש העבודה ביעילות עם דשבורד נקי ויכולות חזקות.',
    technologies: ['React', 'Dashboard', 'Job Tracking'],
    category: 'Full Stack',
    year: '2022',
    link: '#',
  },
  {
    id: 9,
    image: '/projects/tailwind-shoes.jpg',
    title: 'Tailwind Shoes - תבנית חנות נעליים',
    description:
      'תבנית אלגנטית המופעלת על ידי Tailwind CSS להצגה ומכירה של נעליים אונליין, כוללת עיצוב רספונסיבי וקומפוננטות UI נקיות.',
    technologies: ['Tailwind CSS', 'Template', 'E-commerce'],
    category: 'Frontend',
    year: '2021',
    link: '#',
  },
];

const ITEMS_PER_PAGE = 6;
const categories = ['הכל', 'Frontend', 'Backend', 'Full Stack'];

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('הכל');

  const filteredProjects =
    selectedCategory === 'הכל'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                הפורטפוליו שלי
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                מבחר פרויקטים שבניתי - מאתרי נחיתה ועד מערכות מתקדמות
              </p>
            </div>
          </FadeIn>

          {/* Filter Buttons */}
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? 'default' : 'outline'
                  }
                  onClick={() => handleCategoryChange(category)}
                  className="hover-lift"
                >
                  {category}
                </Button>
              ))}
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {currentProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 50} direction="up">
                <Card className="h-full hover-lift hover-shadow-medium transition-all duration-300 group overflow-hidden">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-primary-foreground">
                        <ExternalLink className="h-8 w-8" />
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="shrink-0">
                        {project.year}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <FadeIn delay={200}>
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="hover-lift"
                >
                  <ChevronRight className="h-4 w-4 ml-2" />
                  הקודם
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="icon"
                        onClick={() => setCurrentPage(page)}
                        className="hover-lift"
                      >
                        {page}
                      </Button>
                    )
                  )}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="hover-lift"
                >
                  הבא
                  <ChevronLeft className="h-4 w-4 mr-2" />
                </Button>
              </div>
            </FadeIn>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
