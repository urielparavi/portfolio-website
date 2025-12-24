import { FadeIn } from "@/components/fade-in";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "📗" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "OpenAI", icon: "🤖" },
  { name: "Vercel", icon: "▲" },
  { name: "Firebase", icon: "🔥" },
];

export function TechStack() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-background -z-10" />
      
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              הטכנולוגיות שאני משתמש בהן
            </h2>
            <p className="text-lg text-muted-foreground">
              כלים וטכנולוגיות מודרניות לבניית אתרים מקצועיים
            </p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <FadeIn key={index} delay={index * 30} direction="up">
                <div className="group">
                  <div className="aspect-square rounded-2xl bg-card border border-border/50 flex flex-col items-center justify-center gap-3 hover-lift hover-glow transition-all duration-300 hover:border-primary/50">
                    <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-center px-2">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={400}>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              ועוד טכנולוגיות רבות נוספות לפי צרכי הפרויקט
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
