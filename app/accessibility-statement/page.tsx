import { Metadata } from 'next';
import Link from 'next/link';
import {
  Accessibility,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'הצהרת נגישות | Weby - בניית אתרים מקצועיים',
  description:
    'הצהרת נגישות של Weby - מחויבות לנגישות דיגיטלית לפי תקן ישראלי 5568 ו-WCAG 2.1 ברמה AA',
  robots: 'index, follow',
};

export default function AccessibilityStatement() {
  const lastUpdated = 'דצמבר 2024';
  const contactEmail = 'urielpa308@gmail.com';
  const contactPhone = '054-680-3661';
  const companyName = 'Weby בניית אתרים ואפליקציות';
  const websiteUrl = 'https://www.uriel-sites.com';

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-6">
            <Accessibility className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">הצהרת נגישות</h1>
          <p className="text-xl text-muted-foreground">
            מחויבות לנגישות דיגיטלית לכל משתמשי האתר
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-lg border p-8 md:p-12 space-y-10">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              מחויבות לנגישות
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong>{companyName}</strong> מחויבת להנגשת האתר שלה ולהפיכתו
                לנגיש ככל האפשר עבור כלל האוכלוסייה, לרבות אנשים עם מוגבלות.
              </p>
              <p>
                אנו פועלים לשיפור מתמיד של נגישות האתר, תוך השקעת מאמצים סבירים
                ומשאבים זמינים, ומקפידים ככל האפשר על עמידה בתקנים המחייבים.
                נגישות דיגיטלית היא זכות בסיסית של כל אדם, ואנו עושים את מיטב
                המאמצים להבטיח חוויית גלישה נגישה לכולם.
              </p>
            </div>
          </section>

          {/* Standards Compliance */}
          <section className="bg-primary/5 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              תקנים ועמידה בדרישות
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>תקן ישראלי 5568:</strong> האתר מותאם, ככל הניתן ובהתאם
                  למאמצים סבירים, לדרישות תקן ישראלי 5568 לנגישות תכנים באינטרנט
                  ברמה AA.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>WCAG 2.1:</strong> האתר מותאם, ככל הניתן ובהתאם
                  למאמצים סבירים, להנחיות WCAG 2.1 (Web Content Accessibility
                  Guidelines) ברמה AA.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>חוק שוויון זכויות:</strong> התאמות בוצעו לפי חוק
                  שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998 והתקנות על פיו.
                </p>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Accessibility className="h-6 w-6 text-primary" />
              תכונות נגישות באתר
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'שינוי גודל טקסט (80%-150%)',
                '4 מצבי ניגודיות (רגיל, גבוהה, בהירה, כהה)',
                'מצב שחור-לבן (Grayscale)',
                'פונט קריא עם מרווח מוגדל',
                'הדגשת קישורים',
                'הדגשת כותרות',
                'עצירת אנימציות',
                'סמן עכבר גדול',
                'יישור טקסט לימין',
                'ריווח שורות מוגדל',
                'ניווט מלא במקלדת',
                'תמיכה בקוראי מסך',
                'תגיות ARIA מלאות',
                'מבנה סמנטי תקין',
                'סימון Focus ברור',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How to Use */}
          <section className="bg-muted/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              כיצד להשתמש בתפריט הנגישות
            </h2>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>לחצו על כפתור "נגישות" בחלק העליון של הדף</li>
              <li>יפתח תפריט נגישות מקיף בצד ימין של המסך</li>
              <li>בחרו בהתאמות הרצויות לכם</li>
              <li>ההתאמות יישמרו אוטומטית וישארו בתוקף בביקורים הבאים</li>
              <li>
                ניתן לאפס את כל ההגדרות בלחיצה על כפתור "איפוס כל ההגדרות"
              </li>
            </ol>
          </section>

          {/* Known Issues */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-primary" />
              מגבלות ידועות
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                למרות מאמצינו להנגיש את כלל הדפים באתר, ייתכן שחלקים מסוימים
                עדיין אינם נגישים במלואם. אנו עובדים באופן שוטף על שיפור הנגישות
                ומוזמנים אתכם לדווח לנו על כל בעיה שתמצאו.
              </p>
              <p>
                <strong>תוכן צד שלישי:</strong> האתר עשוי להכיל קישורים לאתרים
                חיצוניים שאינם בשליטתנו ועשויים להיות בעלי רמת נגישות שונה.
              </p>
            </div>
          </section>

          {/* Legal & Disclaimer */}
          <section className="bg-muted/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">אחריות וסייגים</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                אנו משקיעים מאמצים סבירים להבטיח נגישות מלאה באתר, אך חלק
                מהתכנים או הרכיבים עלולים להיות לא נגישים במלואם עקב מגבלות
                טכנולוגיות, תוכן צד שלישי או עדכונים שבוצעו לאחרונה.
              </p>
              <p>
                הצהרה זו אינה מהווה התחייבות חוזית או מצג משפטי מחייב. במקרה של
                סתירה בין ההצהרה לבין החוק, יגבר החוק.
              </p>
              <p>
                נגישות היא תהליך מתמשך. ייתכן שפתרון המתאים לאדם אחד לא יתאים
                לאחר, ואנו מזמינים כל משתמש לפנות אלינו לצורך התאמות נוספות
                במידת האפשר.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              צור קשר בנושא נגישות
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                נשמח לקבל את פניותיכם בנושא נגישות האתר. אם נתקלתם בבעיית נגישות
                או אם יש לכם הצעות לשיפור, אנא צרו איתנו קשר:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">דואר אלקטרוני</p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-primary hover:underline"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">טלפון</p>
                    <a
                      href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`}
                      className="text-primary hover:underline"
                      dir="ltr"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg p-4 border">
                <p className="text-sm text-muted-foreground">
                  <strong>זמן תגובה:</strong> אנו מתחייבים לטפל בכל פניה תוך 5
                  ימי עסקים ולפעול לפתרון הבעיה בהקדם האפשרי.
                </p>
              </div>
            </div>
          </section>

          {/* Feedback Process */}
          <section>
            <h2 className="text-2xl font-bold mb-4">תהליך טיפול בפניות</h2>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>קבלת הפניה - תוך 24 שעות נאשר קבלת הפניה</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>
                  בדיקה וניתוח - נבדוק את הבעיה ונעדכן אתכם על הממצאים
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>
                  פתרון - נפעל לתיקון הבעיה בהתאם לחומרתה ולסדר העדיפויות
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>עדכון - נעדכן אתכם בסיום התיקון</span>
              </li>
            </ol>
          </section>

          {/* Updates */}
          <section className="bg-muted/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              עדכונים ושיפורים
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              אנו פועלים באופן שוטף לשיפור נגישות האתר ולעדכון ההצהרה בהתאם.
              הצהרה זו עודכנה לאחרונה ב<strong>{lastUpdated}</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              אנו ממליצים לבקר בעמוד זה מעת לעת כדי להתעדכן בשיפורים ובתכונות
              נגישות חדשות שהוספנו לאתר.
            </p>
          </section>
        </div>

        {/* Back to Home Button - Uniform Style */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            ← חזרה לדף הבית
          </Link>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>
            עדכון אחרון: {lastUpdated} | {companyName}
          </p>
        </div>
      </div>
    </main>
  );
}
