"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/fade-in";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "React & Next.js", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "Python", level: 85, category: "Backend" },
  
  // DevOps
  { name: "Docker", level: 75, category: "DevOps" },
  { name: "Git & GitHub", level: 90, category: "DevOps" },
  
  // AI & Tools
  { name: "OpenAI & AI", level: 85, category: "AI & Tools" },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
      
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              הכישורים שלי
            </h2>
            <p className="text-lg text-muted-foreground">
              רמת מומחיות בטכנולוגיות שאני עובד איתן
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, catIndex) => (
              <FadeIn key={category} delay={catIndex * 100}>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skills
                      .filter((s) => s.category === category)
                      .map((skill, index) => (
                        <SkillBar
                          key={skill.name}
                          skill={skill}
                          delay={catIndex * 100 + index * 50}
                        />
                      ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
