'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Loader2, CheckCircle2, XCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'שם מלא הוא שדה חובה';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'שם חייב להכיל לפחות 2 תווים';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'אימייל הוא שדה חובה';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'אנא הכנס כתובת אימייל תקינה';
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'הודעה היא שדה חובה';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'ההודעה חייבת להכיל לפחות 10 תווים';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'ההודעה נשלחה בהצלחה! אחזור אליך בהקדם האפשרי.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        setStatus({
          type: 'error',
          message: 'אירעה שגיאה בשליחת ההודעה. אנא נסה שוב או צור קשר ישירות.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'אירעה שגיאה בשליחת ההודעה. אנא בדוק את החיבור לאינטרנט ונסה שוב.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">צור קשר</h1>
            <p className="text-lg text-muted-foreground">
              יש לך פרויקט במחשבה? בוא נדבר ונבנה משהו מדהים ביחד
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>שלח הודעה</CardTitle>
                  <CardDescription>
                    מלא את הפרטים ואחזור אליך בהקדם האפשרי
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        שם מלא{' '}
                        <span className="text-red-500" aria-label="שדה חובה">
                          *
                        </span>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="איך קוראים לך?"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? 'name-error' : undefined
                        }
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-sm text-red-500 mt-1"
                          role="alert"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        אימייל{' '}
                        <span className="text-red-500" aria-label="שדה חובה">
                          *
                        </span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? 'email-error' : undefined
                        }
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-sm text-red-500 mt-1"
                          role="alert"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        טלפון{' '}
                        <span className="text-sm text-muted-foreground">
                          (אופציונלי)
                        </span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="050-1234567"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? 'phone-error' : undefined
                        }
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="text-sm text-red-500 mt-1"
                          role="alert"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        הודעה{' '}
                        <span className="text-red-500" aria-label="שדה חובה">
                          *
                        </span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="ספר לי על הפרויקט שלך..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          handleChange('message', e.target.value)
                        }
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? 'message-error' : undefined
                        }
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="text-sm text-red-500 mt-1"
                          role="alert"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {status && (
                      <div
                        className={`p-4 rounded-md flex items-start gap-3 ${
                          status.type === 'success'
                            ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                            : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                        }`}
                        role="alert"
                        aria-live="polite"
                      >
                        {status.type === 'success' ? (
                          <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        )}
                        <p>{status.message}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isLoading}
                      aria-label={isLoading ? 'שולח הודעה...' : 'שלח הודעה'}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                          שולח...
                        </>
                      ) : (
                        'שלח הודעה'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">אימייל</h3>
                      <a
                        href="mailto:urielpa308@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      >
                        urielpa308@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">טלפון</h3>
                      <a
                        href="tel:0546803661"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      >
                        054-6803661
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
