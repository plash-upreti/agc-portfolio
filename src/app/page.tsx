'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Partners from '../components/Partners';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Structured data for the business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Agarwal Garg & Company",
    "description": "Leading Chartered Accountants firm in India specializing in audit, taxation, GST, financial advisory, and business consulting.",
    "url": "https://agc-portfolio.vercel.app",
    "logo": "https://agc-portfolio.vercel.app/clipart702255.png",
    "image": "https://agc-portfolio.vercel.app/og-image.jpg",
    "telephone": "+91-8779967557",
    "email": "camehulgarg@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6139,
      "longitude": 77.2090
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": "India",
    "serviceType": [
      "Audit Services",
      "Taxation Services",
      "GST Services",
      "Financial Advisory",
      "Business Consulting",
      "Compliance Management"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CA Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audit Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Taxation Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GST Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Advisory"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Consulting"
          }
        }
      ]
    },
    "employee": [
      {
        "@type": "Person",
        "name": "CA Archana Agarwal",
        "jobTitle": "Financial Advisory",
        "description": "Chartered Accountant with over 4 years of experience in audit, taxation, and financial advisory",
        "email": "caarchanaagarwal@gmail.com",
        "telephone": "+91-8726186964",
        "sameAs": "https://www.linkedin.com/in/caarchanaagarwal"
      },
      {
        "@type": "Person",
        "name": "CA Mehul Garg",
        "jobTitle": "Founding Partner",
        "description": "Chartered Accountant with over 4 years of expertise in audit, financial consulting, and business advisory",
        "email": "camehulgarg@gmail.com",
        "telephone": "+91-8779967557",
        "sameAs": "https://www.linkedin.com/in/camehulgarg"
      }
    ],
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Satisfied Client"
      },
      "reviewBody": "Excellent service and professional approach. Highly recommended for all CA services."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <link rel="canonical" href="https://agc-portfolio.vercel.app" />
        <meta name="author" content="Agarwal Garg & Company" />
        <meta name="copyright" content="Agarwal Garg & Company" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header isScrolled={isScrolled} />
        <main role="main">
          <Hero />
          <About />
          <Services />
          <Partners />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
} 