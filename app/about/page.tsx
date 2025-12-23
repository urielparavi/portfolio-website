import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'אודות - היי, אני אוריאל | מפתח Full Stack',
  description:
    'מפתח Full Stack עם ניסיון רחב בבניית תוכנה ואפליקציות. מתמחה בבניית אתרים מקצועיים עם טכנולוגיות מתקדמות: React, Next.js, TypeScript, Python.',
  openGraph: {
    title: 'אודות אוריאל - מפתח Full Stack',
    description: 'מפתח Full Stack המתמחה בבניית אתרים מקצועיים ומודרניים',
  },
};

const technologies = [
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'Next.js',
  'Node.js',
  'MongoDB',
  'Tailwind CSS',
  'Git',
  'Docker',
  'Kubernetes',
  'OpenAI SDK',
];

const skills = [
  {
    category: 'Frontend',
    items: [
      'React & React Native',
      'Next.js & SSR',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js & Express',
      'MongoDB & Firebase',
      'RESTful APIs',
      'Authentication',
    ],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Deployment'],
  },
  {
    category: 'נוספים',
    items: ['Git & GitHub', 'Testing', 'OpenAI SDK', 'Data Structures'],
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                היי, אני אוריאל
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                מפתח Full Stack עם תשוקה לבניית אתרים מודרניים
              </p>
              <Button asChild size="lg">
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="ml-2 h-5 w-5" />
                  הורד קורות חיים
                </a>
              </Button>
            </div>

            <Card className="mb-12">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">אודותיי</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    אני מפתח Full Stack עם ניסיון רחב בבניית תוכנה ואפליקציות
                    מודרניות. למדתי ועבדתי עם מגוון רחב של טכנולוגיות, והחלטתי
                    להתמקד בתחום שאני אוהב במיוחד - בניית אתרים.
                  </p>
                  <p>
                    היכולת שלי להבין את כל השכבות של פיתוח תוכנה - מהממשק ועד
                    לשרת ומסד הנתונים - מאפשרת לי לבנות אתרים מקצועיים, מהירים
                    ואיכותיים שמתאימים בדיוק לצרכי הלקוח.
                  </p>
                  <p>
                    בין אם מדובר באתר נחיתה פשוט, אתר תדמית מלא, או חנות אונליין
                    מורכבת - אני בונה פתרונות שמביאים תוצאות אמיתיות.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                הטכנולוגיות שלי
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-base px-4 py-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">
                תחומי מומחיות
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">
                        {skill.category}
                      </h3>
                      <ul className="space-y-2">
                        {skill.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
