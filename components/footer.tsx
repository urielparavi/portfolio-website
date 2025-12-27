import Link from 'next/link';
import { Mail, Phone, Github, Linkedin, Facebook, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/urielparavi',
      icon: Github,
      ariaLabel: 'GitHub Profile',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/uriel-paravi',
      icon: Linkedin,
      ariaLabel: 'LinkedIn Profile',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/uriel.paravi',
      icon: Facebook,
      ariaLabel: 'Facebook Profile',
    },
  ];

  const quickLinks = [
    { href: '/', label: 'בית' },
    { href: '/services', label: 'שירותים' },
    { href: '/portfolio', label: 'אתרים שבניתי' },
    { href: '/about', label: 'אודות' },
    { href: '/contact', label: 'צור קשר' },
  ];

  return (
    <footer className="border-t bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background -z-10" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-block mb-4">
              <h3 className="text-xl font-bold gradient-text group-hover:gradient-text-vibrant transition-all duration-500 ease-in-out">
                Weby
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              פיתוח אתרים מקצועיים ומותאמים אישית. מאתרי נחיתה ועד מערכות
              מתקדמות.
            </p>

            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground hover:scale-110 flex items-center justify-center transition-all duration-500 ease-in-out focus-ring"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">קישורים מהירים</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-500 ease-in-out focus-ring rounded inline-block w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">יצירת קשר</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:urielpa308@gmail.com"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-500 ease-in-out focus-ring rounded"
              >
                <div className="w-8 h-8 rounded-lg bg-muted group-hover:bg-primary/10 group-hover:scale-110 flex items-center justify-center transition-all duration-500 ease-in-out shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="break-all">urielpa308@gmail.com</span>
              </a>
              <a
                href="tel:0546803661"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-500 ease-in-out focus-ring rounded"
              >
                <div className="w-8 h-8 rounded-lg bg-muted group-hover:bg-primary/10 group-hover:scale-110 flex items-center justify-center transition-all duration-500 ease-in-out shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span>054-6803661</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">מוכן להתחיל?</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              בוא ונדבר על הפרויקט הבא שלך!
            </p>
            <Button asChild size="sm" className="w-full hover-lift">
              <Link href="/contact">צור קשר עכשיו</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © {currentYear} אוריאל - פיתוח תוכנה, בניית אתרים ואפליקציות. כל
            הזכויות שמורות.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              מדיניות פרטיות
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
