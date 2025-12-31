'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const checkChatState = () => {
      const chatOpen = document.body.getAttribute('data-chat-open') === 'true';
      setIsChatOpen(chatOpen);
    };

    checkChatState();
    const observer = new MutationObserver(checkChatState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-chat-open'],
    });

    return () => observer.disconnect();
  }, []);

  const phoneNumber = '972546803661';
  const message = 'שלום! אשמח לקבל מידע נוסף';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  if (isChatOpen) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="צור קשר בWhatsApp"
    >
      <div className="relative">
        {/* Main Button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#25D366]/50 transform-gpu">
          <MessageCircle
            className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12"
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>

        {/* Hover Ring Effect */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500 ease-out pointer-events-none" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        שלח הודעה ב-WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-[-4px] border-4 border-transparent border-r-gray-900 dark:border-r-gray-100" />
      </div>
    </a>
  );
}
