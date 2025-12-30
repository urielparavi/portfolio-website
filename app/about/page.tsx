import { Metadata } from 'next';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  Briefcase,
  Code2,
  Sparkles,
  ArrowLeft,
  Rocket,
  Layout,
  Server,
  Container,
  Brain,
} from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/fade-in';

export const metadata: Metadata = {
  title: 'אודות | Weby – אוריאל בניית אתרים לעסקים',
  description:
    'אוריאל – בונה אתרים לעסקים עם ניסיון של מעל 6 שנים. מתמחה בבניית אתרי תדמית, אתרי נחיתה וחנויות אונליין בטכנולוגיות מודרניות.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'אודות | Weby – אוריאל בניית אתרים',
    description:
      'הכירו את אוריאל מ-Weby – מומחה לבניית אתרים עם 6+ שנות ניסיון: אתרי תדמית, נחיתה וחנויות אונליין בטכנולוגיות מודרניות',
    type: 'website',
    locale: 'he_IL',
  },
};

const timeline = [
  {
    year: '2025',
    icon: Sparkles,
    title: 'התמחות ב-AI & Web Development',
    description:
      "בניית פרויקטים מתקדמים המשלבים בינה מלאכותית עם טכנולוגיות web מודרניות. פיתוח צ'אטבוטים חכמים עם RAG, מערכות Blockchain, ופלטפורמות E-commerce מתקדמות.",
    color: 'text-purple-600 dark:text-purple-400',
  },
  {
    year: '2024',
    icon: Code2,
    title: 'Full Stack Development מתקדם',
    description:
      'התמחות ב-Next.js, React, TypeScript ו-Node.js. בניית אתרים ואפליקציות מתקדמות עם דגש על ביצועים, נגישות וחווית משתמש מעולה. פיתוח מערכות עם PostgreSQL ואינטגרציה עם תשלומים.',
    color: 'text-blue-600 dark:text-blue-400',
  },
  {
    year: '2022-2023',
    icon: Container,
    title: 'DevOps & Backend Mastery',
    description:
      'למידת Docker, Kubernetes וכלי DevOps. בניית פרויקטים hands-on למידה על deployment, scaling וניהול containers. התמקדות ב-Node.js, Express ומסדי נתונים.',
    color: 'text-orange-600 dark:text-orange-400',
  },
  {
    year: '2020-2021',
    icon: Rocket,
    title: 'React & Modern Frontend',
    description:
      'מעבר ל-React וספריות מודרניות. בניית אפליקציות עם React, Tailwind CSS, וכלי styling מתקדמים. למידת Unit Testing, Git ו-GitHub בצורה מעמיקה.',
    color: 'text-green-600 dark:text-green-400',
  },
  {
    year: '2018-2019',
    icon: Briefcase,
    title: 'התחלת המסע',
    description:
      'התחלתי את הדרך בפיתוח web עם HTML, CSS ו-JavaScript. בניית פרויקטים ראשונים, למידת מבני נתונים ואלגוריתמים, והנחת היסודות לקריירה בפיתוח.',
    color: 'text-indigo-600 dark:text-indigo-400',
  },
];

const technologies = {
  frontend: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'React Native',
    'HTML & CSS',
    'Tailwind CSS',
  ],
  backend: [
    'Node.js',
    'Express',
    'Python',
    'MongoDB',
    'PostgreSQL',
    'Firebase',
  ],
  devops: ['Docker', 'Kubernetes', 'Git', 'GitHub'],
  ai: ['OpenAI SDK', 'RAG Chatbot', 'ChatGPT', 'AI Integration'],
  other: [
    'Data Structures',
    'Algorithms',
    'Unit Testing',
    'Postman',
    'REST APIs',
  ],
};

const techCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'text-blue-600 dark:text-blue-400',
    items: technologies.frontend,
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-green-600 dark:text-green-400',
    items: technologies.backend,
  },
  {
    title: 'DevOps',
    icon: Container,
    color: 'text-orange-600 dark:text-orange-400',
    items: technologies.devops,
  },
  {
    title: 'AI & Tools',
    icon: Brain,
    color: 'text-purple-600 dark:text-purple-400',
    items: technologies.ai,
  },
];

const values = [
  {
    title: 'קוד נקי ואיכותי',
    description: 'אני מאמין בכתיבת קוד מתוחזק, קריא ומקצועי שקל להרחיב ולשפר.',
  },
  {
    title: 'תקשורת שקופה',
    description: 'עדכונים שוטפים, זמינות ותגובה מהירה לאורך כל הפרויקט.',
  },
  {
    title: 'למידה מתמדת',
    description:
      'העולם הטכנולוגי משתנה מהר, ואני תמיד מעדכן את הידע והכלים שלי.',
  },
  {
    title: 'התמקדות בתוצאות',
    description: 'המטרה היא לא רק לבנות אתר יפה, אלא אתר שעובד ומביא תוצאות.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                    היי 👋 אני אוריאל – בונה אתרים לעסקים
                  </h1>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      אני מפתח{' '}
                      <span className="font-semibold text-foreground">
                        Full Stack
                      </span>{' '}
                      עם למעלה מ-6 שנות ניסיון בפיתוח תוכנה, אתרים ואפליקציות
                      web מתקדמות.
                    </p>
                    <p>
                      מתמחה ב-JavaScript, TypeScript, React, Next.js, Node.js
                      ופיתוח AI – מאתרי נחיתה ועד מערכות E-commerce מורכבות,
                      צ'אטבוטים חכמים ופתרונות Blockchain.
                    </p>
                    <p>
                      הגישה שלי: קוד נקי,{' '}
                      <span className="font-semibold text-foreground">
                        ביצועים מהירים
                      </span>
                      , וחווית משתמש שמביאה תוצאות אמיתיות.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={100} direction="left">
                <div className="aspect-square rounded-2xl p-1 bg-gradient-to-br from-blue-500 via-blue-300 to-blue-100 shadow-strong hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="אוריאל - מפתח Full Stack"
                      width={600}
                      height={600}
                      className="object-cover object-[center_20%] w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={150}>
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                הטכנולוגיות שאני עובד איתן
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                ניסיון מעשי עם מגוון רחב של טכנולוגיות מודרניות
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techCategories.map((category, index) => (
                  <FadeIn key={index} delay={index * 50} direction="up">
                    <Card className="h-full hover-lift hover-shadow-soft transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <category.icon
                              className={`h-5 w-5 ${category.color}`}
                            />
                          </div>
                          <h3 className="text-lg font-bold">
                            {category.title}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={200}>
                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    טכנולוגיות נוספות וכלים:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                    {technologies.other.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                המסע שלי
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                6+ שנים של למידה, בניה והתפתחות מתמדת
              </p>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <FadeIn key={index} delay={index * 100} direction="right">
                    <div className="relative">
                      {index < timeline.length - 1 && (
                        <div className="absolute right-10 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20 -z-10" />
                      )}

                      <div className="flex gap-6 items-start group">
                        <div className="relative shrink-0">
                          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 shadow-soft">
                            <item.icon className={`h-10 w-10 ${item.color}`} />
                          </div>
                        </div>

                        <Card className="flex-1 hover-lift hover-shadow-medium transition-all duration-300">
                          <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-2xl font-bold gradient-text">
                                {item.year}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                הערכים שמנחים אותי
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <FadeIn key={index} delay={index * 50} direction="up">
                    <Card className="hover-lift hover-shadow-soft transition-all duration-300">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="max-w-3xl mx-auto text-center">
              <Card className="shadow-medium">
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-3xl font-bold mb-4">בוא נעבוד ביחד</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    רוצה להפוך את הרעיון שלך לאתר או אפליקציה? אני כאן כדי
                    לעזור.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button asChild size="lg" className="hover-lift">
                      <Link href="/contact">
                        בואו נבנה את האתר שלכם ביחד!
                        <ArrowLeft className="mr-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="hover-lift"
                    >
                      <a href="mailto:urielpa308@gmail.com">
                        <Mail className="ml-2 h-5 w-5" />
                        urielpa308@gmail.com
                      </a>
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <a
                      href="tel:0546803661"
                      className="flex items-center gap-2 hover:text-primary transition-colors focus-ring"
                    >
                      <Phone className="h-4 w-4" />
                      054-6803661
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
