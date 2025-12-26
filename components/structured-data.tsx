export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://www.uriel-sites.com/#person',
        name: 'אוריאל',
        url: 'https://www.uriel-sites.com',
        email: 'urielpa308@gmail.com',
        telephone: '+972-54-6803661',
        jobTitle: 'Full Stack Web Developer',
        description: 'מפתח Full Stack המתמחה בבניית אתרים מקצועיים',
        knowsAbout: [
          'Web Development',
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'Python',
          'Node.js',
          'MongoDB',
          'Tailwind CSS',
        ],
        sameAs: [],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.uriel-sites.com/#business',
        name: 'אוריאל - פיתוח תוכנה, אתרים ואפליקציות',
        url: 'https://www.uriel-sites.com',
        telephone: '+972-54-6803661',
        email: 'urielpa308@gmail.com',
        priceRange: '$$',
        image: 'https://www.uriel-sites.com/logo.png',
        description:
          'פיתוח תוכנה, אתרים ואפליקציות בהתאמה אישית לעסק שלך. מתמחה ב‑Web Development, כולל אתרי נחיתה, אתרי תדמית, חנויות מקוונות ועוד.',
        areaServed: {
          '@type': 'Country',
          name: 'Israel',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'שירותי פיתוח אתרים',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'אתרי נחיתה (Landing Pages)',
                description: 'דף יחיד ממוקד להמרות ומכירות',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'אתרי תדמית עסקיים',
                description: 'אתר מלא ומקצועי לעסק עם מספר דפים',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'חנויות מקוונות (E-commerce)',
                description: 'מערכת מכירה אונליין מלאה',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.uriel-sites.com/#website',
        url: 'https://www.uriel-sites.com',
        name: 'אוריאל - פיתוח תוכנה, אתרים ואפליקציות',
        description: 'פיתוח אתרים מותאמים אישית לעסק שלך',
        publisher: {
          '@id': 'https://www.uriel-sites.com/#person',
        },
        inLanguage: 'he',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
