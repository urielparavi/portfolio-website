'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'בית' },
  { href: '/services', label: 'שירותים' },
  { href: '/portfolio', label: 'אתרים שבניתי' },
  { href: '/about', label: 'אודות' },
  { href: '/contact', label: 'צור קשר' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 transition-all hover:opacity-80"
          >
            <Image
              src="/logo.png"
              alt="Weby Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="text-xl font-bold gradient-text hover:gradient-text-vibrant">
              Weby
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md group outline-none"
              >
                <span
                  className={
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }
                >
                  {link.label}
                </span>

                <span
                  className={`absolute bottom-0 right-0 h-0.5 bg-primary transition-all duration-500 ease-in-out ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button asChild size="sm" className="hover-lift">
              <Link href="/contact">צור קשר</Link>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-in slide-in-from-top-5 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all relative overflow-hidden outline-none ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {link.label}

                {isActive(link.href) && (
                  <span className="absolute right-0 top-0 h-full w-1 bg-primary rounded-r" />
                )}
              </Link>
            ))}

            <div className="pt-4">
              <Button asChild className="w-full hover-lift">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  צור קשר
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
