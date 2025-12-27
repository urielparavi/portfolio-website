import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, UserCheck, FileText, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות',
  description: 'מדיניות הפרטיות של אוריאל - פיתוח תוכנה, אתרים ואפליקציות',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">מדיניות פרטיות</h1>
            <p className="text-lg text-muted-foreground">
              אנו מחויבים לשקיפות מלאה ולשמירה על המידע האישי שלך בכל פעולה
              באתר.
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
                  ברוכים הבאים לאתר של אוריאל - פיתוח תוכנה, אתרים ואפליקציות.
                  מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, משתפים
                  ומגנים על המידע האישי שלך. השימוש באתר מהווה הסכמה למדיניות
                  זו.
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    1. איזה מידע אנחנו אוספים
                  </h2>
                </div>
                <div className="pr-15 space-y-4">
                  <div className="p-6 rounded-lg bg-muted/50 border">
                    <h3 className="text-lg font-semibold mb-3">
                      מידע שאתה מספק:
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• טפסי יצירת קשר: שם, אימייל, טלפון, תוכן ההודעה</li>
                      <li>
                        • צ'אט חי (Tawk.to, WhatsApp או מערכות אחרות): תוכן
                        השיחה, שם אם נמסר
                      </li>
                      <li>
                        • מידע שניתן בעת הרשמה, פניות, הרשמות לניוזלטר או שימוש
                        בשירותים נוספים
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-muted/50 border">
                    <h3 className="text-lg font-semibold mb-3">
                      מידע שנאסף אוטומטית:
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • כתובת IP לצורכי אבטחה, מניעת הונאות וניתוח תעבורה
                      </li>
                      <li>
                        • מידע על המכשיר והדפדפן: סוג דפדפן, מערכת הפעלה,
                        רזולוציה, חיבור אינטרנט
                      </li>
                      <li>
                        • מיקום גיאוגרפי כללי (מדינה, עיר) לצורך התאמה ושירות
                        טוב יותר
                      </li>
                      <li>
                        • התנהגות באתר: דפים שנצפו, לחיצות, תנועה בין עמודים
                        ושימוש בתכונות
                      </li>
                      <li>
                        • Cookies וטכנולוגיות דומות לאיסוף מידע סטטיסטי ושיפור
                        חוויית המשתמש
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    2. למה אנחנו משתמשים במידע
                  </h2>
                </div>
                <div className="pr-15 space-y-3">
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ מענה לפניות ושירות לקוחות: נוכל לענות לשאלות, לפתור
                      בעיות ולהציע שירות מותאם.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ ניתוח ושיפור השירות: הבנה של התנהגות המשתמשים באתר כדי
                      לשפר חוויית המשתמש.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ אבטחה: זיהוי, מניעה וטיפול בניסיונות שימוש לא חוקי או
                      רמאויות.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ תקשורת ושיווק מותאם אישית: שליחת מידע ועדכונים רק אם
                      הסכמת לכך.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border-r-4 border-primary/50">
                    <p className="text-foreground/90">
                      ✓ ניהול שירותים נוספים: התאמה אישית של חוויית המשתמש
                      ושירותי צד שלישי.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">3. שירותי צד שלישי</h2>
                </div>
                <div className="pr-15 space-y-4">
                  <p className="text-muted-foreground">
                    אנו עשויים להשתמש בשירותי צד שלישי מהימנים (למשל, צ'אט,
                    ניתוח תעבורה, אחסון ושירותי API נוספים) כדי לשפר את השירות.
                    שירותים אלו עשויים לאסוף מידע עליך בהתאם למדיניות הפרטיות
                    שלהם.
                  </p>

                  <div className="grid gap-4">
                    <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500/5 to-blue-500/10 border border-blue-500/20">
                      <h3 className="text-lg font-semibold mb-2">
                        Tawk.to - צ'אט חי
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        פלטפורמת צ'אט לתמיכה בזמן אמת
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• נאסף: IP, תוכן שיחה, דפדפן</li>
                        <li>
                          • מדיניות:{' '}
                          <a
                            href="https://www.tawk.to/privacy-policy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Tawk.to Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-lg bg-gradient-to-r from-green-500/5 to-green-500/10 border border-green-500/20">
                      <h3 className="text-lg font-semibold mb-2">
                        Google Analytics
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        ניתוח תעבורה והתנהגות באתר
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• נאסף: IP, דפים, זמן שהייה, מקור הגעה</li>
                        <li>
                          • מדיניות:{' '}
                          <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Google Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500/5 to-purple-500/10 border border-purple-500/20">
                      <h3 className="text-lg font-semibold mb-2">
                        Vercel - אחסון
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        פלטפורמת האחסון של האתר
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• נאסף: Logs, IP, ביצועים</li>
                        <li>
                          • מדיניות:{' '}
                          <a
                            href="https://vercel.com/legal/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Vercel Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">4. אבטחת המידע</h2>
                </div>
                <div className="pr-15 space-y-3">
                  <p className="text-muted-foreground">
                    אנו נוקטים אמצעי אבטחה מתקדמים ומעודכנים כדי להגן על המידע
                    שלך, כולל הצפנה, גישה מוגבלת, ניטור פעילות חשודה ושמירה על
                    שרתים מאובטחים. יחד עם זאת, אין מערכת שאינה ניתנת לפריצה
                    ב-100%.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 border">
                      <p className="font-semibold mb-1">🔒 HTTPS/SSL</p>
                      <p className="text-sm text-muted-foreground">
                        הצפנת תעבורה מלאה
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border">
                      <p className="font-semibold mb-1">🛡️ שרתים מאובטחים</p>
                      <p className="text-sm text-muted-foreground">
                        Vercel - תקני SOC 2
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border">
                      <p className="font-semibold mb-1">🔐 גישה מוגבלת</p>
                      <p className="text-sm text-muted-foreground">
                        רק לצוות מורשה
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border">
                      <p className="font-semibold mb-1">🗑️ מחיקה תקופתית</p>
                      <p className="text-sm text-muted-foreground">
                        ניקוי מידע ישן
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">5. הזכויות שלך</h2>
                </div>
                <div className="pr-15 space-y-3">
                  <p className="text-muted-foreground mb-4">
                    בהתאם לחוקי הגנת הפרטיות המקומיים ו-GDPR, יש לך זכויות
                    הכוללות:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ לדעת איזה מידע אנו אוספים עליך</li>
                    <li>✓ לתקן מידע לא מדויק או לא מעודכן</li>
                    <li>✓ לבקש מחיקה או הגבלת שימוש במידע</li>
                    <li>✓ לקבל עותק של המידע בפורמט אלקטרוני נוח</li>
                    <li>✓ להתנגד לעיבוד מידע למטרות שיווקיות</li>
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Cookies</h2>
                <div className="pr-0 space-y-3">
                  <p className="text-muted-foreground">
                    אנו משתמשים ב-Cookies ובטכנולוגיות דומות לשיפור חוויית
                    המשתמש והבנת התנהגות באתר. ניתן לחסום Cookies דרך הדפדפן, אך
                    זה עלול להשפיע על פונקציות מסוימות באתר.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. שמירת מידע</h2>
                <div className="pr-0">
                  <p className="text-muted-foreground mb-3">
                    אנו שומרים מידע רק למשך הזמן הנדרש למטרות חוקיות, שירותיות
                    או משפטיות:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• פניות: עד 2 שנים לאחר סיום התכתבות</li>
                    <li>• שיחות צ'אט: עד שנה</li>
                    <li>• Analytics: עד 26 חודשים</li>
                    <li>• Logs: עד 90 יום</li>
                  </ul>
                </div>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. קטינים</h2>
                <div className="pr-0">
                  <p className="text-muted-foreground">
                    האתר אינו מיועד לקטינים מתחת לגיל 18 ואינו אוסף מידע מהם
                    במכוון. אם אתה הורה ומגלה שילדך מסר מידע, אנא פנה אלינו
                    למחיקה.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">9. שינויים במדיניות</h2>
                <div className="pr-0">
                  <p className="text-muted-foreground">
                    אנו עשויים לעדכן מדיניות זו מעת לעת. שינויים משמעותיים
                    יפורסמו באתר עם תאריך עדכון חדש. שימוש מתמשך באתר מהווה
                    הסכמה למדיניות המעודכנת.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-8 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
                <h2 className="text-2xl font-bold mb-4">יצירת קשר</h2>
                <p className="text-muted-foreground mb-4">
                  לשאלות, בקשות או הפעלת זכויות בנוגע לפרטיות, ניתן ליצור קשר:
                </p>
                <div className="space-y-2 text-foreground/90">
                  <p>
                    📧 <strong>אימייל:</strong> urielpa308@gmail.com
                  </p>
                  <p>
                    📞 <strong>טלפון:</strong> דרך{' '}
                    <Link
                      href="/contact"
                      className="text-primary hover:underline"
                    >
                      טופס יצירת קשר
                    </Link>
                  </p>
                  <p>
                    💬 <strong>צ'אט:</strong> דרך הצ'אט החי באתר
                  </p>
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
