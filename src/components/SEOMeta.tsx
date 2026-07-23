import React, { useEffect } from 'react';
import { STORE_INFO, FAQS_LIST } from '../data/storeData';
import { PageTab } from '../types';

interface SEOMetaProps {
  activeTab: PageTab;
}

export const SEOMeta: React.FC<SEOMetaProps> = ({ activeTab }) => {
  useEffect(() => {
    // Dynamic page title update
    const titleMap: Record<PageTab, string> = {
      home: `${STORE_INFO.name} - Genuine Medicines & Pharmacy in Kurtha, Arwal, Bihar`,
      about: `About Us | ${STORE_INFO.name} - Trusted Medical Store Kurtha`,
      services: `Healthcare Services & Medicine Range | ${STORE_INFO.name}`,
      gallery: `Store Photo Gallery & Facilities | ${STORE_INFO.name}`,
      testimonials: `Customer Reviews & Ratings | ${STORE_INFO.name}`,
      faq: `Frequently Asked Pharmacy Questions | ${STORE_INFO.name}`,
      contact: `Contact Us & Directions | ${STORE_INFO.name} Sakura Mor Kurtha`
    };

    document.title = titleMap[activeTab] || STORE_INFO.name;
  }, [activeTab]);

  // Pharmacy JSON-LD Schema
  const pharmacySchema = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": STORE_INFO.name,
    "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80",
    "@id": "https://nishantmedicalhall.com/#pharmacy",
    "url": "https://nishantmedicalhall.com",
    "telephone": STORE_INFO.phone,
    "priceRange": "₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sakura Mor, Kurtha Kinjar Road",
      "addressLocality": "Kurtha",
      "addressRegion": "Bihar",
      "postalCode": "804421",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.0456,
      "longitude": 84.8722
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
    "currenciesAccepted": "INR"
  };

  // FAQ Page Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_LIST.slice(0, 10).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nishantmedicalhall.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": activeTab.charAt(0).toUpperCase() + activeTab.slice(1),
        "item": `https://nishantmedicalhall.com/#${activeTab}`
      }
    ]
  };

  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </React.Fragment>
  );
};
