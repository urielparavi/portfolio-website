import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Scale,
  Shield,
  FileText,
  AlertCircle,
  CheckCircle,
  Ban,
  Gavel,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'תנאי שימוש',
  description: 'תנאי השימוש של אוריאל - פיתוח תוכנה, אתרים ואפליקציות',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-4">
              <Scale className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">תנאי שימוש</h1>
            <p className="text-lg text-muted-foreground">
              תנאי השימוש המסדירים את הקשר בינך לבין השירותים שלנו
            </p>
            <p className="text-sm text-muted-foreground">
              עדכון אחרון: דצמבר 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
                <p className="text-foreground/90 leading-relaxed m-0">
                  ברוכים הבאים לאתר של אוריאל – פיתוח תוכנה, אתרים ואפליקציות.
                  תנאי שימוש אלה מסדירים את השימוש שלך באתר ובשירותים המוצעים
                  בו. על ידי גישה לאתר או שימוש בו, אתה מסכים לתנאי שימוש אלה
                  במלואם.
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {/* Section 1: קבלת התנאים */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">1. קבלת התנאים</h2>
                </div>
                <div className="pr-15 space-y-3">
                  <p className="text-muted-foreground">
                    השימוש באתר מהווה הסכמה מלאה ומחייבת לתנאי שימוש אלה. אם
                    אינך מסכים לתנאים, אנא הימנע משימוש באתר.
                  </p>
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ השימוש באתר מיועד למטרות חוקיות בלבד
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ אנו שומרים את הזכות לשנות תנאים אלה בכל עת
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ המשך שימוש לאחר שינוי מהווה הסכמה לתנאים המעודכנים
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: השירותים המוצעים */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">2. השירותים המוצעים</h2>
                </div>
                <div className="pr-15 space-y-3">
                  <p className="text-muted-foreground mb-4">
                    אנחנו מספקים שירותי פיתוח תוכנה ואתרים, לרבות:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 border">
                      <p className="font-semibold mb-1">🌐 פיתוח אתרים</p>
                      <p className="text-sm text-muted-foreground">
                        אתרי נחיתה, תדמית, חנויות
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border">
                      <p className="font-semibold mb-1">💻 פיתוח אפליקציות</p>
                      <p className="text-sm text-muted-foreground">
                        Web apps מותאמות אישית
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border">
                      <p className="font-semibold mb-1">🎨 עיצוב UI/UX</p>
                      <p className="text-sm text-muted-foreground">
                        ממשקי משתמש מקצועיים
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border">
                      <p className="font-semibold mb-1">🔧 תחזוקה ותמיכה</p>
                      <p className="text-sm text-muted-foreground">
                        עדכונים ותיקונים
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * השירותים כפופים לזמינות, להסכמים מסחריים נפרדים ולהערכה
                    מקצועית
                  </p>
                </div>
              </div>

              {/* Section 3: זכויות יוצרים וקניין רוחני */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    3. זכויות יוצרים וקניין רוחני
                  </h2>
                </div>
                <div className="pr-15 space-y-4">
                  <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500/5 to-blue-500/10 border border-blue-500/20">
                    <h3 className="text-lg font-semibold mb-3">תוכן האתר</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • כל התוכן באתר (טקסטים, תמונות, לוגו, קוד) שייך לאוריאל
                      </li>
                      <li>• אסור להעתיק או לשכפל תוכן ללא אישור מפורש בכתב</li>
                      <li>• שימוש מסחרי בתוכן אסור ללא רישיון מתאים</li>
                      <li>• הפרת זכויות יוצרים תגרור צעדים משפטיים</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500/5 to-purple-500/10 border border-purple-500/20">
                    <h3 className="text-lg font-semibold mb-3">
                      פרויקטים שפותחו
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• זכויות על הקוד נקבעות בהסכם ספציפי לכל פרויקט</li>
                      <li>
                        • ברירת מחדל: הלקוח מקבל זכויות שימוש, לא בעלות על הקוד
                      </li>
                      <li>• רישיון מלא ניתן בתשלום נוסף</li>
                      <li>• אנו שומרים זכות להציג פרויקטים בתיק העבודות</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 4: שימוש אסור */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Ban className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">4. שימוש אסור</h2>
                </div>
                <div className="pr-15 space-y-3">
                  <p className="text-muted-foreground mb-4">
                    השימושים הבאים אסורים באתר:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ פעילות בלתי חוקית – כל שימוש המפר חוק
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ הפרעה לשירות – ניסיונות לפגוע בתפקוד האתר
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ העתקת תוכן – שכפול או הפצה ללא אישור
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ ספאם – שליחת תוכן פרסומי לא רצוי
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ פריצה – ניסיון לגישה לא מורשית למערכות
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ תוכן פוגעני – הטרדה, גזענות או תוכן מזיק
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: הגבלת אחריות */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">5. הגבלת אחריות</h2>
                </div>
                <div className="pr-15 space-y-4">
                  <div className="p-6 rounded-lg bg-muted/50 border">
                    <h3 className="text-lg font-semibold mb-3">
                      אחריות על השירות
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • האתר והשירותים מסופקים "כמות שהם" ללא אחריות מפורשת או
                        משתמעת
                      </li>
                      <li>
                        • אנו לא אחראים לנזקים עקיפים, תוצאתיים או מיוחדים
                        הנובעים משימוש באתר
                      </li>
                      <li>
                        • אנו לא מתחייבים שהשירות יהיה זמין 24/7 ללא הפסקות
                      </li>
                      <li>
                        • אנו עושים מאמץ סביר לספק שירות איכותי אך לא מבטיחים
                        תוצאות ספציפיות
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-muted/50 border">
                    <h3 className="text-lg font-semibold mb-3">
                      אחריות על תוכן צד שלישי
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • האתר עשוי לכלול קישורים לאתרים חיצוניים – אנו לא
                        אחראים לתוכן שלהם
                      </li>
                      <li>
                        • שירותי צד שלישי (כגון Tawk.to, Google Analytics)
                        כפופים לתנאי השימוש שלהם
                      </li>
                      <li>
                        • לא נישא באחריות לנזק הנגרם משימוש בשירותי צד שלישי
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-amber-500/5 border border-amber-500/20">
                    <p className="text-sm text-muted-foreground">
                      ⚠️ חשוב: הגבלת האחריות כפופה לחוק הגנת הצרכן הישראלי ולא
                      ניתן לשלול זכויות הקבועות בחוק.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6: הסכמים מסחריים */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Gavel className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">6. הסכמים מסחריים</h2>
                </div>
                <div className="pr-15 space-y-3">
                  <p className="text-muted-foreground mb-4">
                    שירותי פיתוח כפופים להסכמים נפרדים:
                  </p>
                  <div className="grid gap-3">
                    <div className="p-4 rounded-lg bg-muted/30 border">
                      <p className="font-semibold mb-1">📋 הסכם פרויקט</p>
                      <p className="text-sm text-muted-foreground">
                        כל פרויקט כרוך בהסכם ספציפי המפרט: היקף, לוחות זמנים,
                        תשלום, זכויות
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border">
                      <p className="font-semibold mb-1">💰 תנאי תשלום</p>
                      <p className="text-sm text-muted-foreground">
                        תשלום מקדמה 50%, יתרה עם השלמת הפרויקט. ללא החזר כספי
                        לאחר תחילת העבודה
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border">
                      <p className="font-semibold mb-1">⏱️ לוחות זמנים</p>
                      <p className="text-sm text-muted-foreground">
                        מועדים משוערים בלבד. עיכובים עקב שינויים מצד הלקוח לא
                        יזכו בפיצוי
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border">
                      <p className="font-semibold mb-1">🔄 שינויים ותוספות</p>
                      <p className="text-sm text-muted-foreground">
                        שינויים מעבר להיקף המוסכם כרוכים בתוספת תשלום ועדכון
                        לוחות זמנים
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7: ביטול והפסקת שירות */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. ביטול והפסקת שירות</h2>
                <div className="pr-0 space-y-3">
                  <div className="p-6 rounded-lg bg-muted/50 border">
                    <h3 className="text-lg font-semibold mb-3">
                      ביטול מצד הלקוח
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• ניתן לבטל פרויקט בכל שלב עם הודעה בכתב</li>
                      <li>• עבודה שבוצעה עד לביטול תחויב במלואה</li>
                      <li>• מקדמה ששולמה לא תוחזר</li>
                      <li>
                        • קבצי עבודה יועברו ללקוח רק לאחר סילוק מלא של החשבון
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-muted/50 border">
                    <h3 className="text-lg font-semibold mb-3">
                      הפסקת שירות מצדנו
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• שומרים זכות להפסיק שירות במקרה של הפרת תנאים</li>
                      <li>• אי תשלום במועד יוביל להשעיית שירות</li>
                      <li>• שימוש לרעה באתר או בשירותים יגרור סגירת חשבון</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 8: שינויים בתנאי השימוש */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. שינויים בתנאי השימוש</h2>
                <div className="pr-0">
                  <p className="text-muted-foreground mb-3">
                    אנו שומרים את הזכות לעדכן תנאי שימוש אלה בכל עת:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• שינויים יפורסמו באתר עם תאריך עדכון</li>
                    <li>• שינויים מהותיים יודעו במייל (אם סופק)</li>
                    <li>• המשך שימוש באתר מהווה הסכמה לתנאים החדשים</li>
                  </ul>
                </div>
              </div>

              {/* Section 9: פרטיות */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">9. פרטיות</h2>
                <div className="pr-0">
                  <p className="text-muted-foreground mb-3">
                    איסוף ושימוש במידע כפוף למדיניות פרטיות שלנו:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• אנו אוספים מידע לשם תפעול האתר ושירותים</li>
                    <li>• מידע אישי לא יימסר לצד שלישי ללא הסכמה</li>
                    <li>• ניתן לבקש עיון, עדכון או מחיקה של המידע האישי</li>
                    <li>
                      • אנו עושים מאמצים להגן על המידע אך אין אחריות מוחלטת
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 10: דין וסמכות */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">10. דין וסמכות</h2>
                <div className="pr-0">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• כל הסכסוכים כפופים לדין הישראלי</li>
                    <li>• סמכות השיפוט הבלעדית – בתי המשפט בתל אביב</li>
                    <li>
                      • אם סעיף מסוים יוכרז כבלתי חוקי – יתר הסעיפים נשארים
                      בתוקף
                    </li>
                    <li>• התנאים ניתנים להתאמה לפי דרישות חוק מחייבות</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Back to home */}
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                ← חזרה לדף הבית
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
