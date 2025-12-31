'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const checkChatState = () => {
      const chatOpen = document.body.getAttribute('data-chat-open') === 'true';
      setIsChatOpen(chatOpen);
    };

    window.addEventListener('scroll', toggleVisibility);

    checkChatState();
    const observer = new MutationObserver(checkChatState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-chat-open'],
    });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (isChatOpen) return null;

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed right-[2.125rem] bottom-[184px] z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-in fade-in slide-in-from-bottom-5"
          aria-label="חזור למעלה"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}
