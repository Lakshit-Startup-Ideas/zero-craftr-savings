import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'organization' | 'product' | 'faq' | 'review';
  data?: any;
}

const StructuredData = ({ type = 'organization', data }: StructuredDataProps) => {
  useEffect(() => {
    let structuredData;

    switch (type) {
      case 'organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ZeroCraftr",
          "description": "IoT + AI energy, carbon and waste tracking for SMB manufacturers. Cut energy costs 8-15% in 30 days.",
          "url": "https://zerocraftr.com",
          "logo": "https://zerocraftr.com/logo.png",
          "foundingDate": "2024",
          "industry": "Industrial IoT and Energy Management",
          "serviceArea": {
            "@type": "Place",
            "name": "India and Southeast Asia"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "email": "zero_craftr@gmail.com"
          },
          "offers": {
            "@type": "Offer",
            "name": "30-day Pilot Program",
            "description": "Proof of Value with guaranteed energy measurement results"
          }
        };
        break;

      case 'product':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "ZeroCraftr Energy Management Platform",
          "description": "Plug-and-play IoT sensors + AI analytics for manufacturing energy optimization",
          "brand": {
            "@type": "Brand",
            "name": "ZeroCraftr"
          },
          "category": "Industrial IoT Software",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "ZeroCraftr"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "12"
          }
        };
        break;

      case 'faq':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How quickly can I see results with ZeroCraftr?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most manufacturers see measurable energy savings within 30 days of installation. Our pilot program is designed to show concrete results in this timeframe."
              }
            },
            {
              "@type": "Question", 
              "name": "What types of manufacturing plants work with ZeroCraftr?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We specialize in small to medium manufacturers (50-500 employees) including injection molding, metal fabrication, automotive components, and similar industrial operations."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need engineers to install ZeroCraftr?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "No. Our sensors are plug-and-play and don't require PLC rework. Installation typically takes 1-3 business days with minimal disruption to operations."
              }
            }
          ]
        };
        break;

      case 'review':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Product",
            "name": "ZeroCraftr Energy Management Platform"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Manufacturing Plant Manager"
          },
          "reviewBody": "12% energy reduction in 45 days - exceeded our expectations. The real-time insights helped us identify waste we never knew existed.",
          ...data
        };
        break;

      default:
        return;
    }

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;