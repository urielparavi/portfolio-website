import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, GraduationCap, Briefcase, Code2, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "אודות - הסיפור שלי",
  description: "היי, אני אוריאל - מפתח Full Stack המתמחה בבניית אתרים מקצועיים. למד עוד על הרקע, הניסיון והגישה שלי לפיתוח.",
  openGraph: {
    title: "אודות - אוריאל בניית אתרים",
    description: "הכירו את אוריאל - מפתח Full Stack עם ניסיון בבניית אתרים מקצועיים",
  },
};

const timeline = [
  {
    year: "2025",
    icon: Sparkles,
    title: "התמחות ב-AI & Web Development",
    description: "בניית פרויקטים מתקדמים המשלבים בינה מלאכותית עם טכנולוגיות web מודרניות. פיתוח צ'אטבוטים חכמים ומערכות Blockchain.",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    year: "2024",
    icon: Code2,
    title: "Full Stack Development",
    description: "התמחות ב-Next.js, React, TypeScript ו-Node.js. בניית אתרים מקצועיים עם דגש על ביצועים, נגישות וחווית משתמש מעולה.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    year: "2022-2023",
    icon: Briefcase,
    title: "התחלת המסע",
    description: "התחלתי את הדרך בפיתוח web עם HTML, CSS ו-JavaScript. בניית פרויקטים ראשונים ולמידה מתמדת של טכנולוגיות חדשות.",
    color: "text-green-600 dark:text-green-400",
  },
];

const values = [
  {
    title: "קוד נקי ואיכותי",
    description: "אני מאמין בכתיבת קוד מתוחזק, קריא ומקצועי שקל להרחיב ולשפר.",
  },
  {
    title: "תקשורת שקופה",
    description: "עדכונים שוטפים, זמינות ותגובה מהירה לאורך כל הפרויקט.",
  },
  {
    title: "למידה מתמדת",
    description: "העולם הטכנולוגי משתנה מהר, ואני תמיד מעדכן את הידע והכלים שלי.",
  },
  {
    title: "מוקד בתוצאות",
    description: "המטרה היא לא רק לבנות אתר יפה, אלא אתר שעובד ומביא תוצאות.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                    היי, אני אוריאל 👋
                  </h1>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      אני מפתח <span className="font-semibold text-foreground">Full Stack</span> המתמחה בבניית אתרים מקצועיים ומותאמים אישית.
                    </p>
                    <p>
                      אני אוהב להפוך רעיונות למציאות דיגיטלית - מאתרי נחיתה פשוטים ועד מערכות מורכבות עם AI ו-Blockchain.
                    </p>
                    <p>
                      המטרה שלי היא לבנות אתרים שלא רק נראים טוב, אלא גם <span className="font-semibold text-foreground">עובדים מצוין</span>, טעינים מהר, ומביאים תוצאות.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={100} direction="left">
                {/* Image placeholder */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background shadow-strong flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍💻</div>
                    <p className="text-muted-foreground">תמונה אישית</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Timeline */}
          <FadeIn delay={200}>
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                המסע שלי
              </h2>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <FadeIn key={index} delay={index * 100} direction="right">
                    <div className="relative">
                      {/* Connection line */}
                      {index < timeline.length - 1 && (
                        <div className="absolute right-10 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20 -z-10" />
                      )}

                      <div className="flex gap-6 items-start group">
                        {/* Icon */}
                        <div className="relative shrink-0">
                          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 shadow-soft">
                            <item.icon className={`h-10 w-10 ${item.color}`} />
                          </div>
                        </div>

                        {/* Content */}
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

          {/* Values */}
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

          {/* Contact CTA */}
          <FadeIn delay={400}>
            <div className="max-w-3xl mx-auto text-center">
              <Card className="shadow-medium">
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    בוא נעבוד ביחד
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    יש לך פרויקט במחשבה? אשמח לשמוע ולעזור להפוך אותו למציאות
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button asChild size="lg" className="hover-lift">
                      <Link href="/contact">
                        שלח הודעה
                        <ArrowLeft className="mr-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="hover-lift">
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
