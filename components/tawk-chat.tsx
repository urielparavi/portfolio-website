'use client';

import { useEffect } from 'react';

export function TawkChat() {
  useEffect(() => {
    // Tawk.to script injection
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    (function () {
      var s1 = document.createElement('script');
      var s0 = document.getElementsByTagName('script')[0];

      s1.async = true;
      s1.src = 'https://embed.tawk.to/694eeaf961a703197b5ab22e/1jde4bnvj';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');

      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null;
}
