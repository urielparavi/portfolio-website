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
  title: 'תנאי שימוש | Weby – אוריאל בניית אתרים',
  description:
    'תנאי השימוש של Weby לבניית אתרים ואפליקציות: הסכם משתמש, זכויות יוצרים, הגבלת אחריות, תנאי תשלום ושירות. קרא את התנאים המלאים כאן.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'תנאי שימוש | Weby',
    description:
      'תנאי השימוש המסדירים את הקשר בין המשתמש לשירותי Weby: זכויות, חובות והתחייבויות',
    type: 'website',
    locale: 'he_IL',
  },
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
                  ברוכים הבאים ל-Weby – פיתוח תוכנה, אתרים ואפליקציות. תנאי
                  שימוש אלו מהווים הסכם משפטי מחייב בין המשתמש לבין החברה
                  המפעילה את האתר והשירותים המוצעים בו. בשימוש באתר או בכל שירות
                  הניתן על ידינו, המשתמש מסכים לכל התנאים המפורטים להלן. במידה
                  ואינך מסכים לתנאים, אין לעשות שימוש באתר או בשירותים כלשהם.
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
                    שימוש באתר מהווה הסכמה מלאה, בלתי מותנית ומחייבת למכלול תנאי
                    השימוש המפורטים להלן. אם אינך מסכים לתנאים, יש להימנע משימוש
                    בכל שירותי האתר.
                  </p>
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ השימוש באתר מותנה במטרות חוקיות בלבד ובהתאם לחוקי מדינת
                      ישראל
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ החברה רשאית לשנות או לעדכן את תנאי השימוש בכל עת וללא
                      הודעה מוקדמת, והמשך השימוש באתר לאחר שינוי מהווה הסכמה
                      מחייבת לתנאים החדשים
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ המשתמש אחראי לעקוב אחר תנאי השימוש המעודכנים
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
                    אנו מספקים שירותי פיתוח תוכנה ואתרים, לרבות אך לא מוגבל ל:
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
                        עדכונים, תיקונים ותמיכה טכנית
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * השירותים כפופים לזמינות, להסכמים מסחריים נפרדים ולהערכה
                    מקצועית. אין לראות בהם התחייבות להשלמת פרויקט או עמידה
                    במסגרת זמן מוגדרת.
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
                        • כל התוכן באתר (טקסטים, תמונות, לוגו, קוד, גרפיקות וכל
                        רכיב אחר) מוגן בזכויות יוצרים ובקניין רוחני ומוחזק על
                        ידי החברה או גורמים מורשים מטעם החברה
                      </li>
                      <li>
                        • אין להעתיק, לשכפל, להפיץ או להשתמש בתוכן האתר לצרכים
                        מסחריים ללא אישור כתוב ומפורש מהחברה
                      </li>
                      <li>
                        • הפרת זכויות יוצרים או שימוש בתוכן האתר ללא אישור חוקי
                        עלולה לגרור צעדים משפטיים, לרבות דרישה לפיצוי כספי
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500/5 to-purple-500/10 border border-purple-500/20">
                    <h3 className="text-lg font-semibold mb-3">
                      פרויקטים שפותחו
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • זכויות על קוד המקור או התוצר נקבעות לפי ההסכם הספציפי
                        לכל פרויקט
                      </li>
                      <li>
                        • ברירת המחדל: הלקוח מקבל זכויות שימוש בלבד, ולא בעלות
                        על הקוד
                      </li>
                      <li>
                        • ניתן לרכוש רישיון מלא או זכויות נוספות בהסכם נפרד
                        ובתשלום נוסף
                      </li>
                      <li>
                        • החברה רשאית להציג פרויקטים בתיק העבודות שלה, אלא אם
                        הוסכם אחרת בכתב
                      </li>
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
                    שימושים הבאים אסורים לחלוטין באתר או בשירותים המוצעים:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ כל פעילות בלתי חוקית או המפרת חוקים ותקנות
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ פגיעה או ניסיון לפגוע בזמינות האתר או במערכות השירות
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ העתקת תוכן, שכפול או הפצה ללא אישור חוקי
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ ספאם או שליחת תוכן פרסומי לא רצוי
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ ניסיון פריצה או גישה לא מורשית למערכות או חשבונות
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      ❌ הפצה או פרסום של תוכן פוגעני, מסית או מפלה
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    החברה רשאית לנקוט בכל אמצעי חוקי במקרה של הפרת תנאי שימוש
                    אלו, לרבות חסימה, השעיה או פעולה משפטית, מבלי לפגוע
                    בזכויותיה המשפטיות המלאות.
                  </p>
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
                        • האתר והשירותים ניתנים לשימוש "כמות שהם" וללא כל
                        התחייבות למדיוק, שלמות, יעילות או התאמה ספציפית
                      </li>
                      <li>
                        • החברה אינה אחראית לנזקים עקיפים, תוצאתיים או מיוחדים
                        הנגרמים כתוצאה משימוש באתר או בשירותים
                      </li>
                      <li>• אין התחייבות לזמינות רציפה 24/7 של השירותים</li>
                      <li>
                        • כל הבטחה או הצגה של תוצאה, יעילות או רווחיות אינה
                        מהווה התחייבות משפטית
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-muted/50 border">
                    <h3 className="text-lg font-semibold mb-3">
                      אחריות על תוכן צד שלישי
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • האתר עשוי להכיל קישורים לשירותי צד שלישי – החברה אינה
                        אחראית לתוכן, לנזקים או להפרת זכויות הנובעים משימוש בהם
                      </li>
                      <li>
                        • שירותים כמו Tawk.to, Google Analytics וכל שירות צד
                        שלישי כפופים לתנאי השימוש שלהם בלבד
                      </li>
                      <li>
                        • אין לחברה כל אחריות לנזקים, אובדן מידע או הפרת זכויות
                        הנגרמים משימוש בשירותי צד שלישי
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-amber-500/5 border border-amber-500/20">
                    <p className="text-sm text-muted-foreground">
                      ⚠️ הגבלת האחריות לא פוגעת בזכויות הצרכן המוקנות לפי חוק
                      הגנת הצרכן הישראלי או כל חוק מחייב אחר.
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
                    כל פרויקט או שירות מותנה בהסכם מסחרי נפרד, המפרט את התנאים
                    המלאים:
                  </p>
                  <div className="grid gap-3">
                    <div className="p-4 rounded-lg bg-muted/30 border">
                      <p className="font-semibold mb-1">📋 הסכם פרויקט</p>
                      <p className="text-sm text-muted-foreground">
                        כולל היקף העבודה, לוחות זמנים, עלויות וזכויות שימוש
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border">
                      <p className="font-semibold mb-1">💰 תנאי תשלום</p>
                      <p className="text-sm text-muted-foreground">
                        מקדמה של 50% נדרשת להתחלת העבודה. יתרה תידרש עם סיום
                        הפרויקט. החזר כספי יתאפשר רק בהתאם להסכם מראש.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border">
                      <p className="font-semibold mb-1">⏱️ לוחות זמנים</p>
                      <p className="text-sm text-muted-foreground">
                        מועדים הם הערכה בלבד. עיכובים עקב דרישות המשתמש או
                        שינויים בפרויקט אינם מחייבים פיצוי
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border">
                      <p className="font-semibold mb-1">🔄 שינויים ותוספות</p>
                      <p className="text-sm text-muted-foreground">
                        כל שינוי בהיקף העבודה או בדרישות יחייב הסכם ותוספת תשלום
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7: Force Majeure */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    7. כוח עליון (Force Majeure)
                  </h2>
                </div>
                <div className="pr-15 space-y-3">
                  <p className="text-muted-foreground mb-2">
                    החברה אינה אחראית לעיכובים או כשל בשירותים הנובעים מאירועים
                    בלתי צפויים, לרבות אך לא מוגבל ל:
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>אסונות טבע, שריפות, שטפונות או פגעי מזג אוויר</li>
                    <li>שביתות, מרידות או מחאות ציבוריות</li>
                    <li>
                      תקלות טכניות במערכות אינטרנט, שרתים או ספקי צד שלישי
                    </li>
                    <li>פעולות מלחמה, טרור או פעולות ממשלתיות</li>
                  </ul>
                </div>
              </div>

              {/* Section 8: פרטיות וקוקיז */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">8. פרטיות וקוקיז</h2>
                </div>
                <div className="pr-15 space-y-3">
                  <p className="text-muted-foreground mb-2">
                    שימוש באתר כרוך בקבלת מדיניות הפרטיות שלנו, כולל:
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>שמירת מידע אישי לצורך קשר ושירותים בלבד</li>
                    <li>
                      שימוש בקוקיז או כלי ניתוח צד שלישי (Google Analytics,
                      Tawk.to)
                    </li>
                    <li>
                      אין הפצת מידע אישי לצד שלישי ללא הסכמה, למעט דרישה חוקית
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 9: דין וסמכות */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Gavel className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">9. דין וסמכות</h2>
                </div>
                <div className="pr-15 space-y-3">
                  <p className="text-muted-foreground">
                    תנאי שימוש אלו כפופים לחוקי מדינת ישראל בלבד. כל מחלוקת בין
                    הצדדים תובא בפני בתי המשפט המוסמכים בעיר תל אביב.
                  </p>
                </div>
              </div>

              {/* Button at the bottom */}
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
        </div>
      </section>
    </div>
  );
}
