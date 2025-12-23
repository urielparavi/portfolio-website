import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">אוריאל - בניית אתרים</h3>
            <p className="text-sm text-muted-foreground">
              פיתוח אתרים מותאמים אישית לעסק שלך
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">קישורים מהירים</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                בית
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                שירותים
              </Link>
              <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                פורטפוליו
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                אודות
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                צור קשר
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">יצירת קשר</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:urielpa308@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                urielpa308@gmail.com
              </a>
              <a
                href="tel:0546803661"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                054-6803661
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} אוריאל - בניית אתרים ואפליקציות. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
