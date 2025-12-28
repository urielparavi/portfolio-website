'use client';

import { useState, useEffect } from 'react';
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
}

export function AccessibilityMenu({ onClose }: AccessibilityMenuProps) {
  const [settings, setSettings] =
    useState<AccessibilitySettings>(DEFAULT_SETTINGS);

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
        className="fixed top-0 right-0 h-screen w-[540px] max-w-[95vw] bg-gradient-to-br from-background via-background to-primary/5 border-r-4 border-primary/20 shadow-[0_0_80px_rgba(0,0,0,0.4)] z-[110] animate-in slide-in-from-right duration-300 flex flex-col"
        role="dialog"
        aria-label="תפריט נגישות"
        style={{ direction: 'rtl' }}
      >
        <header className="p-8 border-b border-primary/10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-sm flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Accessibility className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  תפריט נגישות
                </h2>
                {activeCount > 0 && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {activeCount} תכונות פעילות
                  </p>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="סגור תפריט נגישות"
              className="hover:bg-primary/10 hover:rotate-90 transition-all duration-300 h-10 w-10"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            התאם את האתר לצרכים שלך בקלות ובמהירות
          </p>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Font Size */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Type className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">גודל טקסט</h3>
                <p className="text-xs text-muted-foreground">
                  התאם לנוחות הקריאה שלך
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-muted/50 p-4 rounded-xl">
              <Button
                variant="outline"
                size="lg"
                onClick={() => adjustFontSize(-10)}
                disabled={settings.fontSize <= 80}
                className="flex-1 h-12 font-medium hover:bg-primary/10 hover:border-primary/50 transition-all disabled:opacity-50"
              >
                הקטן
              </Button>
              <div className="min-w-[90px] text-center">
                <div className="text-2xl font-bold text-primary">
                  {settings.fontSize}%
                </div>
                <div className="text-xs text-muted-foreground">גודל נוכחי</div>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => adjustFontSize(10)}
                disabled={settings.fontSize >= 150}
                className="flex-1 h-12 font-medium hover:bg-primary/10 hover:border-primary/50 transition-all disabled:opacity-50"
              >
                הגדל
              </Button>
            </div>
          </section>

          {/* Contrast Modes */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Contrast className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">ניגודיות</h3>
                <p className="text-xs text-muted-foreground">
                  בחר את מצב הצבעים המועדף
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {CONTRAST_OPTIONS.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => updateSetting('contrast', value)}
                  className={`group relative p-4 rounded-xl border-2 transition-all duration-300 font-medium h-16 flex items-center justify-center gap-2 transform-gpu ${
                    settings.contrast === value
                      ? 'border-primary bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg shadow-primary/20 scale-105'
                      : 'border-muted hover:border-primary/50 hover:bg-primary/5 hover:scale-105'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 transition-all ${
                      settings.contrast === value
                        ? 'text-primary'
                        : 'text-muted-foreground group-hover:text-primary'
                    }`}
                  />
                  <span
                    className={
                      settings.contrast === value ? 'text-primary' : ''
                    }
                  >
                    {label}
                  </span>
                  {settings.contrast === value && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-primary-foreground"
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
                <section key={key} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                        isActive ? 'bg-primary/20' : 'bg-muted/50'
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 transition-all ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold">{title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => updateSetting(key, !isActive)}
                    className={`group w-full p-5 rounded-xl border-2 transition-all duration-300 transform-gpu ${
                      isActive
                        ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-md shadow-primary/10'
                        : 'border-muted hover:border-primary/30 hover:bg-primary/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-right">
                        {label}
                      </span>
                      <div
                        className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                          isActive ? 'bg-primary shadow-inner' : 'bg-muted'
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                            isActive
                              ? 'left-0.5 translate-x-[28px]'
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

        <footer className="p-8 border-t border-primary/10 bg-gradient-to-t from-primary/5 to-transparent backdrop-blur-sm flex-shrink-0 space-y-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>כל ההגדרות נשמרות אוטומטית</span>
            {activeCount > 0 && <span>{activeCount} פעילות</span>}
          </div>
          <Button
            variant="outline"
            size="lg"
            className="w-full gap-2 h-12 text-base font-medium hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 transition-all group"
            onClick={resetSettings}
          >
            <RotateCcw className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            איפוס כל ההגדרות
          </Button>
        </footer>
      </aside>
    </>
  );
}
