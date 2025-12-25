import { FadeIn } from '@/components/fade-in';
import {
  Code2,
  Layers,
  FileCode,
  Palette,
  Server,
  Database,
  Terminal,
  Container,
  GitBranch,
  Sparkles,
  Zap,
  Cylinder,
} from 'lucide-react';

const technologies = [
  {
    name: 'React',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Next.js',
    icon: Layers,
    gradient: 'from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400',
  },
  {
    name: 'TypeScript',
    icon: FileCode,
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    name: 'Tailwind CSS',
    icon: Palette,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Node.js',
    icon: Server,
    gradient: 'from-green-600 to-green-400',
  },
  {
    name: 'MongoDB',
    icon: Database,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Python',
    icon: Terminal,
    gradient: 'from-yellow-500 to-blue-500',
  },
  {
    name: 'Docker',
    icon: Container,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Git',
    icon: GitBranch,
    gradient: 'from-orange-600 to-red-500',
  },
  {
    name: 'OpenAI',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Vercel',
    icon: Zap,
    gradient: 'from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300',
  },
  {
    name: 'PostgreSQL',
    icon: Cylinder,
    gradient: 'from-blue-600 to-blue-400',
  },
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
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <FadeIn key={index} delay={index * 30} direction="up">
                  <div className="group">
                    <div className="aspect-square rounded-2xl bg-card border border-border/50 flex flex-col items-center justify-center gap-3 hover-lift hover-glow transition-all duration-300 hover:border-primary/50">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon
                          className="h-8 w-8 text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-sm font-medium text-center px-2">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
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
