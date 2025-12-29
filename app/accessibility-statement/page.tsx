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
  title: 'הצהרת נגישות | Weby – אוריאל בניית אתרים',
  description:
    'הצהרת נגישות של Weby: התאמות נגישות לפי תקן ישראלי 5568 ו-WCAG 2.1. מחויבות לנגישות דיגיטלית מלאה לכל משתמשי האתר.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'הצהרת נגישות | Weby',
    description: 'הצהרת נגישות של Weby - התאמות נגישות לפי תקן ישראלי 5568',
    type: 'website',
    locale: 'he_IL',
  },
};

export default function AccessibilityStatement() {
  const lastUpdated = 'דצמבר 2024';
  const contactEmail = 'urielpa308@gmail.com';
  const contactPhone = '054-680-3661';
  const companyName = 'Weby בניית אתרים';
  const websiteUrl = 'https://www.uriel-sites.com';

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20"
      role="main"
      aria-label="הצהרת נגישות"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-6">
            <Accessibility
              className="h-10 w-10 text-primary"
              aria-hidden="true"
            />
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
              <CheckCircle2
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
              מחויבות לנגישות
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong>{companyName}</strong> מחויבת להנגשת אתר האינטרנט שלה
                ולהבטחת חוויית גלישה נגישה, שוויונית ונוחה עבור כלל המשתמשים,
                לרבות אנשים עם מוגבלות.
              </p>
              <p>
                באתר יושמו מגוון התאמות נגישות מתקדמות, במטרה לאפשר שימוש נוח
                באתר גם עבור אנשים עם מוגבלויות ראייה, שמיעה, מוטוריקה
                וקוגניציה.
              </p>
              <p>
                אנו פועלים באופן שוטף לשיפור נגישות האתר, תוך השקעת מאמצים
                סבירים ומשאבים זמינים, ובהתאם להנחיות ולתקנים המקובלים בתחום
                הנגישות הדיגיטלית. נגישות דיגיטלית מהווה זכות בסיסית, ואנו
                שואפים לאפשר לכל אדם גלישה נוחה ומכבדת באתר.
              </p>
            </div>
          </section>

          {/* Standards Compliance */}
          <section className="bg-primary/5 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <CheckCircle2
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
              תקנים ועמידה בדרישות
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 text-primary flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="text-muted-foreground">
                  <strong>תקן ישראלי 5568:</strong> האתר מותאם, ככל הניתן ובהתאם
                  למאמצים סבירים, לדרישות{' '}
                  <strong>תקן ישראלי 5568 לנגישות תכנים באינטרנט</strong> ברמה
                  AA.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 text-primary flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="text-muted-foreground">
                  <strong>WCAG 2.1:</strong> האתר מותאם, ככל הניתן ובהתאם
                  למאמצים סבירים, להנחיות <strong>WCAG 2.1</strong> של ארגון
                  W3C, ברמה AA.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 text-primary flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
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
              <Accessibility
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
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
                  <CheckCircle2
                    className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
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
              <li>
                ייפתח תפריט נגישות מקיף ונוח לשימוש, המאפשר שליטה מלאה בהתאמות
                הנגישות של האתר
              </li>
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
              <AlertCircle
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
              מגבלות ידועות
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                על אף המאמצים הרבים המושקעים בהנגשת האתר, ייתכן כי חלק מהעמודים
                או הרכיבים אינם נגישים במלואם. אנו פועלים לצמצום פערים אלה ונשמח
                לקבל פניות בנושא.
              </p>
              <p>
                <strong>תוכן צד שלישי:</strong> האתר עשוי להכיל קישורים לאתרים
                חיצוניים שאינם בשליטתנו ועשויים להיות בעלי רמת נגישות שונה.
              </p>
            </div>
          </section>

          {/* Legal & Disclaimer - Upgraded */}
          <section className="bg-muted/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">אחריות וסייגים</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                אנו משקיעים מאמצים סבירים להבטיח נגישות מלאה באתר, אך אין אנו
                מתחייבים שכל התכנים או הרכיבים יהיו נגישים במלואם בכל מצב.
              </p>
              <p>
                השימוש באתר הינו על אחריות המשתמש בלבד. החברה לא תהיה אחראית לכל
                נזק, ישיר או עקיף, שייגרם כתוצאה משימוש באתר או מהסתמכות על מידע
                המוצג בו, לרבות נזקים כתוצאה מהיעדר נגישות חלקית, תקלות
                טכנולוגיות או תוכן צד שלישי.
              </p>
              <p>
                הצהרת נגישות זו אינה מהווה התחייבות חוזית או מצג משפטי מחייב,
                וכל סתירה תיושב בהתאם לדין החל. החברה רשאית לעדכן את הצהרת
                הנגישות בכל עת ללא הודעה מוקדמת.
              </p>
              <p>
                נגישות היא תהליך מתמשך. ייתכן שפתרון המתאים לאדם אחד לא יתאים
                לאחר, ואנו מזמינים כל משתמש לפנות אלינו לצורך התאמות נוספות
                במידת האפשר. פניות כאלה תטופלנה על ידי החברה בהתאם להערכה סבירה
                של זמינות המשאבים והמאמצים.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
              צור קשר בנושא נגישות
            </h2>
            <div className="space-y-6">
              <p>
                אנו רואים חשיבות רבה במתן מענה לפניות בנושא נגישות. אם נתקלתם
                בקושי בגלישה באתר או אם יש לכם הצעה לשיפור, נשמח שתפנו אלינו
                ונעשה כל מאמץ לטפל בפנייה בהקדם.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail
                    className="h-5 w-5 text-primary flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold mb-1">דואר אלקטרוני</p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-primary hover:underline"
                      aria-label={`שלח מייל ל-${contactEmail}`}
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="h-5 w-5 text-primary flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold mb-1">טלפון</p>
                    <a
                      href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`}
                      className="text-primary hover:underline"
                      dir="ltr"
                      aria-label={`התקשר ל-${contactPhone}`}
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
              <Calendar className="h-6 w-6 text-primary" aria-hidden="true" />
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
            aria-label="חזרה לדף הבית"
          >
            ← חזרה לדף הבית
          </Link>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>עדכון אחרון: {lastUpdated} | Weby – בניית אתרים לעסקים</p>
        </div>
      </div>
    </main>
  );
}
