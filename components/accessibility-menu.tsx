'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import {
  Accessibility,
  Type,
  Contrast,
  Link as LinkIcon,
  Pause,
  RotateCcw,
  X,
  Palette,
  Lightbulb,
  Moon,
  Sun,
  MousePointer2,
  AlignCenter,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type AccessibilitySettings = {
  fontSize: number;
  contrast: 'normal' | 'high' | 'light' | 'dark';
  grayscale: boolean;
  readableFont: boolean;
  highlightLinks: boolean;
  highlightHeaders: boolean;
  reduceMotion: boolean;
  bigCursor: boolean;
  textAlign: boolean;
  lineHeight: boolean;
};

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 100,
  contrast: 'normal',
  grayscale: false,
  readableFont: false,
  highlightLinks: false,
  highlightHeaders: false,
  reduceMotion: false,
  bigCursor: false,
  textAlign: false,
  lineHeight: false,
};

const CONTRAST_OPTIONS = [
  { value: 'normal', label: 'רגיל', icon: Sparkles },
  { value: 'high', label: 'גבוהה', icon: Contrast },
  { value: 'light', label: 'בהירה', icon: Sun },
  { value: 'dark', label: 'כהה', icon: Moon },
] as const;

const TOGGLE_OPTIONS = [
  {
    key: 'grayscale',
    icon: Palette,
    title: 'שחור לבן',
    label: 'הצג את האתר בשחור לבן',
    description: 'מועיל לאנשים עם ליקויי ראייה',
  },
  {
    key: 'readableFont',
    icon: Type,
    title: 'כתב קריא',
    label: 'שימוש בפונט קריא ומרווח',
    description: 'פונט ברור יותר לקריאה נוחה',
  },
  {
    key: 'highlightLinks',
    icon: LinkIcon,
    title: 'הדגש קישורים',
    label: 'הדגש את כל הקישורים באתר',
    description: 'מאתר קישורים בקלות',
  },
  {
    key: 'highlightHeaders',
    icon: Lightbulb,
    title: 'הדגש כותרות',
    label: 'הדגש כותרות לזיהוי מהיר',
    description: 'ניווט מהיר בעמוד',
  },
  {
    key: 'reduceMotion',
    icon: Pause,
    title: 'עצור אנימציות',
    label: 'הפחת תנועה ואנימציות באתר',
    description: 'מונע סחרחורת וחוסר נוחות',
  },
  {
    key: 'bigCursor',
    icon: MousePointer2,
    title: 'סמן גדול',
    label: 'הגדל את סמן העכבר',
    description: 'סמן בולט יותר למעקב קל',
  },
  {
    key: 'textAlign',
    icon: AlignCenter,
    title: 'יישור טקסט',
    label: 'יישור טקסט לימין',
    description: 'קריאה נוחה יותר',
  },
  {
    key: 'lineHeight',
    icon: Type,
    title: 'ריווח שורות',
    label: 'הגדל ריווח בין שורות',
    description: 'קריאה נוחה יותר',
  },
] as const;

const ACCESSIBILITY_CSS = `
.grayscale-mode{filter:grayscale(100%)!important}
.high-contrast{filter:contrast(1.3) brightness(1.1)!important}
.high-contrast *{border-color:currentColor!important}
.light-contrast{background:#fff!important;color:#000!important}
.light-contrast *{background:transparent!important;color:#000!important}
.light-contrast a,.light-contrast button{color:#0066cc!important}
.dark-contrast{background:#000!important;color:#fff!important}
.dark-contrast *{background:transparent!important;color:#fff!important}
.dark-contrast a,.dark-contrast button{color:#66b3ff!important}
.readable-font,.readable-font *{font-family:Arial,Helvetica,sans-serif!important;letter-spacing:.05em!important;word-spacing:.1em!important;line-height:1.8!important}
.highlight-links a,.highlight-links button[class*="text-primary"]{text-decoration:underline!important;text-underline-offset:4px!important;text-decoration-thickness:3px!important;font-weight:700!important;background:rgba(255,255,0,.3)!important;padding:2px 4px!important;border-radius:2px!important}
.highlight-headers h1,.highlight-headers h2,.highlight-headers h3,.highlight-headers h4,.highlight-headers h5,.highlight-headers h6{background:rgba(255,255,0,.3)!important;padding:8px!important;border-right:4px solid #000!important;font-weight:900!important}
.reduce-motion *,.reduce-motion *::before,.reduce-motion *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
.big-cursor,.big-cursor *{cursor:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="black" stroke="white" stroke-width="2" d="M3 3 L3 27 L11 19 L15 27 L17 26 L13 18 L21 18 Z"/></svg>') 0 0,auto!important}
.text-align *{text-align:right!important}
.line-height *{line-height:2!important}
*:focus-visible{outline:3px solid hsl(var(--primary))!important;outline-offset:2px!important;border-radius:4px!important}
`;

interface AccessibilityMenuProps {
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement>;
}

export function AccessibilityMenu({
  onClose,
  returnFocusRef,
}: AccessibilityMenuProps) {
  const [settings, setSettings] =
    useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and ESC key handler
  useEffect(() => {
    // Don't auto-focus - let screen readers announce dialog first
    // Users can Tab to navigate naturally

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = menuRef.current?.querySelectorAll(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('keydown', handleTabKey);

      // Return focus to button
      if (returnFocusRef?.current) {
        returnFocusRef.current.focus();
      }
    };
  }, [onClose, returnFocusRef]);

  useEffect(() => {
    const styleId = 'accessibility-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = ACCESSIBILITY_CSS;
    document.head.appendChild(style);

    return () => document.getElementById(styleId)?.remove();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
      applySettings(parsed);
    } catch {
      console.error('Failed to load accessibility settings');
    }
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;

    root.style.fontSize = `${newSettings.fontSize}%`;

    root.classList.remove('high-contrast', 'light-contrast', 'dark-contrast');
    if (newSettings.contrast !== 'normal') {
      root.classList.add(`${newSettings.contrast}-contrast`);
    }

    root.classList.toggle('grayscale-mode', newSettings.grayscale);
    root.classList.toggle('readable-font', newSettings.readableFont);
    root.classList.toggle('highlight-links', newSettings.highlightLinks);
    root.classList.toggle('highlight-headers', newSettings.highlightHeaders);
    root.classList.toggle('reduce-motion', newSettings.reduceMotion);
    root.classList.toggle('big-cursor', newSettings.bigCursor);
    root.classList.toggle('text-align', newSettings.textAlign);
    root.classList.toggle('line-height', newSettings.lineHeight);
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    applySettings(DEFAULT_SETTINGS);
    localStorage.removeItem('accessibility-settings');
  };

  const adjustFontSize = (increment: number) => {
    const newSize = Math.min(Math.max(settings.fontSize + increment, 80), 150);
    updateSetting('fontSize', newSize);
  };

  const activeCount = Object.entries(settings).filter(
    ([key, value]) => key !== 'fontSize' && key !== 'contrast' && value === true
  ).length;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        ref={menuRef}
        className="fixed top-0 right-0 h-screen w-[400px] max-w-[95vw] bg-gradient-to-br from-background via-background to-primary/5 border-r-4 border-primary/20 shadow-[0_0_80px_rgba(0,0,0,0.4)] z-[110] animate-in slide-in-from-right duration-300 flex flex-col"
        role="dialog"
        aria-label="תפריט נגישות"
        aria-modal="true"
        aria-describedby="accessibility-description"
        style={{ direction: 'rtl' }}
      >
        <header className="p-6 border-b border-primary/10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-sm flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Accessibility
                    className="h-7 w-7 text-primary-foreground"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <h2
                  id="accessibility-title"
                  className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                >
                  תפריט נגישות
                </h2>
                {activeCount > 0 && (
                  <p
                    className="text-xs text-muted-foreground mt-1"
                    aria-live="polite"
                  >
                    {activeCount} תכונות פעילות
                  </p>
                )}
              </div>
            </div>
            <Button
              ref={closeButtonRef}
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="סגור תפריט נגישות (לחץ Escape)"
              className="hover:bg-primary/10 hover:rotate-90 transition-all duration-300 h-10 w-10"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
          <p
            id="accessibility-description"
            className="text-xs text-muted-foreground"
          >
            התאם את האתר לצרכים שלך בקלות ובמהירות. השתמש ב-Tab לניווט ו-Enter
            להפעלה.
          </p>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Font Size */}
          <section className="space-y-3" aria-labelledby="font-size-heading">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Type className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 id="font-size-heading" className="text-base font-semibold">
                  גודל טקסט
                </h3>
                <p className="text-xs text-muted-foreground">
                  התאם לנוחות הקריאה שלך
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-2 bg-muted/50 p-3 rounded-xl"
              role="group"
              aria-labelledby="font-size-heading"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => adjustFontSize(-10)}
                disabled={settings.fontSize <= 80}
                aria-label="הקטן גודל טקסט"
                className="flex-1 h-11 text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all disabled:opacity-50"
              >
                הקטן
              </Button>
              <div
                className="min-w-[70px] text-center"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="text-xl font-bold text-primary">
                  {settings.fontSize}%
                </div>
                <div className="text-[10px] text-muted-foreground">נוכחי</div>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => adjustFontSize(10)}
                disabled={settings.fontSize >= 150}
                aria-label="הגדל גודל טקסט"
                className="flex-1 h-11 text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all disabled:opacity-50"
              >
                הגדל
              </Button>
            </div>
          </section>

          {/* Contrast Modes */}
          <section className="space-y-3" aria-labelledby="contrast-heading">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Contrast className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 id="contrast-heading" className="text-base font-semibold">
                  ניגודיות
                </h3>
                <p className="text-xs text-muted-foreground">
                  בחר את מצב הצבעים
                </p>
              </div>
            </div>
            <div
              className="grid grid-cols-2 gap-2"
              role="radiogroup"
              aria-labelledby="contrast-heading"
            >
              {CONTRAST_OPTIONS.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => updateSetting('contrast', value)}
                  role="radio"
                  aria-checked={settings.contrast === value}
                  aria-label={`ניגודיות ${label}`}
                  className={`group relative p-3 rounded-xl border-2 transition-all duration-300 font-medium h-14 flex items-center justify-center gap-2 transform-gpu text-sm ${
                    settings.contrast === value
                      ? 'border-primary bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg shadow-primary/20 scale-[1.03]'
                      : 'border-muted hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.03]'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 transition-all ${
                      settings.contrast === value
                        ? 'text-primary'
                        : 'text-muted-foreground group-hover:text-primary'
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={
                      settings.contrast === value ? 'text-primary' : ''
                    }
                  >
                    {label}
                  </span>
                  {settings.contrast === value && (
                    <div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-2.5 h-2.5 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Toggle Options */}
          {TOGGLE_OPTIONS.map(
            ({ key, icon: Icon, title, label, description }) => {
              const isActive = settings[key];
              return (
                <section
                  key={key}
                  className="space-y-2"
                  aria-labelledby={`${key}-heading`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                        isActive ? 'bg-primary/20' : 'bg-muted/50'
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 transition-all ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        id={`${key}-heading`}
                        className="text-sm font-semibold"
                      >
                        {title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => updateSetting(key, !isActive)}
                    role="switch"
                    aria-checked={isActive}
                    aria-labelledby={`${key}-heading`}
                    aria-describedby={`${key}-description`}
                    className={`group w-full p-4 rounded-xl border-2 transition-all duration-300 transform-gpu ${
                      isActive
                        ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-md shadow-primary/10'
                        : 'border-muted hover:border-primary/30 hover:bg-primary/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        id={`${key}-description`}
                        className="text-sm font-medium text-right"
                      >
                        {label}
                      </span>
                      <div
                        className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                          isActive ? 'bg-primary shadow-inner' : 'bg-muted'
                        }`}
                        aria-hidden="true"
                      >
                        <div
                          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ${
                            isActive
                              ? 'left-0.5 translate-x-[24px]'
                              : 'right-0.5'
                          }`}
                        />
                      </div>
                    </div>
                  </button>
                </section>
              );
            }
          )}
        </div>

        <footer className="p-6 border-t border-primary/10 bg-gradient-to-t from-primary/5 to-transparent backdrop-blur-sm flex-shrink-0 space-y-2">
          <div
            className="flex items-center justify-between text-xs text-muted-foreground mb-2"
            aria-live="polite"
          >
            <span>כל ההגדרות נשמרות אוטומטית</span>
            {activeCount > 0 && <span>{activeCount} פעילות</span>}
          </div>
          <Button
            variant="outline"
            size="lg"
            className="w-full gap-2 h-11 text-sm font-medium hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 transition-all group"
            onClick={resetSettings}
            aria-label="אפס את כל הגדרות הנגישות לברירת מחדל"
          >
            <RotateCcw
              className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500"
              aria-hidden="true"
            />
            איפוס כל ההגדרות
          </Button>
        </footer>
      </aside>
    </>
  );
}
