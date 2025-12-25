'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '972546803661'; // 054-6803661 בפורמט בינלאומי
  const message = 'שלום! אשמח לקבל מידע נוסף'; // הודעה ברירת מחדל (אופציונלי)

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="צור קשר בWhatsApp"
    >
      {/* Main button - Static */}
      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/50">
        <MessageCircle className="h-7 w-7 text-white" strokeWidth={2} />
      </div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        שלח הודעה ב-WhatsApp
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
      </div>
    </a>
  );
}
