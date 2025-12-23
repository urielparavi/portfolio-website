"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "צ'אטבוט AI חכם עם חיפוש סמנטי",
    description: "מערכת צ'אטבוט מתקדמת המבצעת חיפוש סמנטי במסמכים שהועלו על ידי המשתמש, משלבת AI ופייתון עם טכנולוגיות web.",
    technologies: ["Python", "AI", "OpenAI SDK", "RAG"],
    year: "2025",
  },
  {
    id: 2,
    title: "מערכת Blockchain ומטבע קריפטו",
    description: "פרויקט מעשי שבו בניתי מערכת Blockchain ומטבע קריפטו מלאה באמצעות Python מהבסיס.",
    technologies: ["Python", "Blockchain", "Cryptocurrency"],
    year: "2025",
  },
  {
    id: 3,
    title: "NextCart - פלטפורמת E-commerce",
    description: "פלטפורמת סחר אלקטרוני מתקדמת הבנויה עם Next.js, TypeScript ו-PostgreSQL, כוללת תשלומים, פאנל ניהול ואימות מלא.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Payments"],
    year: "2025",
  },
  {
    id: 4,
    title: "Cozy - חנות אונליין מודרנית",
    description: "עיין במבצעים בלעדיים והגעות אחרונות. חווית קנייה חלקה ואמינה עם מוצרים איכותיים המיועדים לנוחות וסטייל.",
    technologies: ["React", "E-commerce", "UI/UX"],
    year: "2024",
  },
  {
    id: 5,
    title: "FocusFlow - אפליקציית פוקוס",
    description: "אפליקציית טיימר מינימליסטית שנועדה לעזור למשתמשים לשפר ריכוז באמצעות טכניקת Pomodoro.",
    technologies: ["React", "Timer", "Productivity"],
    year: "2024",
  },
  {
    id: 6,
    title: "Natours - אתר הזמנת טיולים",
    description: "אתר הזמנת טיולים מעוצב להפליא הבנוי עם טכנולוגיות frontend מודרניות, עם דגש על חוויית משתמש ועיצוב רספונסיבי.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    year: "2023",
  },
  {
    id: 7,
    title: "Jobify - מערכת ניהול חיפוש עבודה",
    description: "אפליקציה לניהול וארגון חיפוש עבודה, מסייעת למשתמשים לארגן את חיפוש העבודה ביעילות עם דשבורד נקי ויכולות חזקות.",
    technologies: ["React", "Dashboard", "Job Tracking"],
    year: "2022",
  },
  {
    id: 8,
    title: "Tailwind Shoes - תבנית חנות נעליים",
    description: "תבנית אלגנטית המופעלת על ידי Tailwind CSS להצגה ומכירה של נעליים אונליין, כוללת עיצוב רספונסיבי וקומפוננטות UI נקיות.",
    technologies: ["Tailwind CSS", "Template", "E-commerce"],
    year: "2021",
  },
];

const ITEMS_PER_PAGE = 4;

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">הפורטפוליו שלי</h1>
            <p className="text-lg text-muted-foreground">
              מבחר פרויקטים שבניתי - מאתרי נחיתה ועד מערכות מתקדמות
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {currentProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm">תמונת פרויקט {project.id}</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.year}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronRight className="h-4 w-4 ml-2" />
              הקודם
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              הבא
              <ChevronLeft className="h-4 w-4 mr-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
