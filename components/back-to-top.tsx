// "use client";

// import { useState, useEffect } from "react";
// import { ArrowUp } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function BackToTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       // Show button when page is scrolled down 300px
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {isVisible && (
//         <Button
//           onClick={scrollToTop}
//           size="icon"
//           className="fixed bottom-8 left-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-in fade-in slide-in-from-bottom-5"
//           aria-label="חזור למעלה"
//         >
//           <ArrowUp className="h-5 w-5" />
//         </Button>
//       )}
//     </>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BackToTop() {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-28 left-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-in fade-in slide-in-from-bottom-5"
          aria-label="חזור למעלה"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}
