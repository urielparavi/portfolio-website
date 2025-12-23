"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const faqs = [
  {
    question: "כמה זמן לוקח לבנות אתר?",
    answer: "זמן הפיתוח משתנה לפי סוג האתר. אתר נחיתה פשוט יכול להיות מוכן תוך שבוע-שבועיים, בעוד אתר תדמית מלא או חנות אונליין יכול לקחת 3-6 שבועות. אני מתחייב לעמוד בלוחות זמנים ולעדכן אותך לאורך כל התהליך."
  },
  {
    question: "האם אני מקבל את הקוד של האתר?",
    answer: "כן! אחרי סיום הפרויקט ותשלום מלא, הקוד שייך לך 100%. אני מוסר לך את כל קבצי המקור, תיעוד, והסברים כדי שתוכל לנהל את האתר בעצמך או להעביר למפתח אחר בעתיד."
  },
  {
    question: "מה כלול במחיר?",
    answer: "המחיר כולל: עיצוב מותאם אישית, פיתוח מלא של האתר, אופטימיזציה לנייד, SEO בסיסי, טופס יצירת קשר, אינטגרציה עם Google Analytics, והדרכה על ניהול האתר. אחריות לתקופת אחריות של 30 יום לתיקון באגים."
  },
  {
    question: "האם תומך אחרי השקת האתר?",
    answer: "כן! אני מספק 30 יום של תמיכה מלאה לאחר ההשקה. במהלך תקופה זו אני זמין לתיקון באגים, שאלות, ושינויים קטנים. לאחר מכן ניתן להמשיך בחבילת תחזוקה חודשית או לפנות לתמיכה נקודתית לפי צורך."
  },
  {
    question: "איך התהליך נראה?",
    answer: "התהליך כולל 5 שלבים: (1) פגישת היכרות והבנת הצרכים (2) הצעת מחיר ותכנון (3) עיצוב ראשוני לאישור (4) פיתוח האתר (5) בדיקות והשקה. בכל שלב אני מעדכן אותך ומקבל משוב כדי להבטיח שהתוצאה בדיוק כמו שרצית."
  },
  {
    question: "האם האתר יהיה מותאם לנייד?",
    answer: "בהחלט! כל אתר שאני בונה הוא responsive ומותאם באופן מושלם לכל המכשירים - סמארטפונים, טאבלטים, ומחשבים. היום יותר ממחצית מהגולשים נכנסים מנייד, אז זה חלק בסיסי ומובן מאליו בכל פרויקט."
  },
  {
    question: "מה קורה אם אני רוצה לעשות שינויים באתר אחרי ההשקה?",
    answer: "ב-30 הימים הראשונים שינויים קטנים כלולים בשירות. לאחר מכן, שינויים ותוספות מתומחרים לפי היקף העבודה. אני תמיד זמין לעדכונים, תוספת תכנים, שיפורים, ופיצ'רים חדשים - פשוט תיצור איתי קשר ונתאם."
  },
  {
    question: "האם אני צריך לספק תוכן (טקסטים ותמונות)?",
    answer: "כן, רצוי שתספק את התכנים - טקסטים, תמונות, לוגו, ומידע על העסק. אבל אם אין לך, אני יכול לעזור! אני מציע ייעוץ בכתיבת תכנים, המלצות על בנקי תמונות, ויכול לחבר אותך למעצבים גרפיים ומצלמים במידת הצורך."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background -z-10" />
      
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              שאלות נפוצות
            </h2>
            <p className="text-lg text-muted-foreground">
              תשובות לשאלות שלקוחות שואלים הכי הרבה
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-right flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-4 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
