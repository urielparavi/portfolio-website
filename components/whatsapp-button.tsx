// 'use client';

// import { MessageCircle } from 'lucide-react';

// export function WhatsAppButton() {
//   const phoneNumber = '972546803661'; // 054-6803661 בפורמט בינלאומי
//   const message = 'שלום! אשמח לקבל מידע נוסף'; // הודעה ברירת מחדל (אופציונלי)

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-50 group"
//       aria-label="צור קשר בWhatsApp"
//     >
//       {/* Main button - Static */}
//       <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/50">
//         <MessageCircle className="h-7 w-7 text-white" strokeWidth={2} />
//       </div>

//       {/* Tooltip on hover */}
//       <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
//         שלח הודעה ב-WhatsApp
//         <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
//       </div>
//     </a>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '972546803661';
    const message = encodeURIComponent(
      'שלום! אני מעוניין לשמוע עוד על השירותים שלך'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={openWhatsApp}
          size="icon"
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-in fade-in slide-in-from-bottom-5"
          aria-label="פתח WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}
