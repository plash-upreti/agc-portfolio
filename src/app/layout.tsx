import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Agarwal Garg & Company - Chartered Accountants & Financial Advisors",
    template: "%s | Agarwal Garg & Company"
  },
  description: "Leading Chartered Accountants firm in India specializing in audit, taxation, GST, financial advisory, and business consulting. Expert CA services for businesses and individuals.",
  keywords: [
    "Chartered Accountants",
    "CA firm",
    "audit services",
    "taxation",
    "GST services",
    "financial advisory",
    "business consulting",
    "accounting services",
    "tax planning",
    "compliance management",
    "India CA",
    "Agarwal Garg",
    "CA Archana Agarwal",
    "CA Mehul Garg"
  ],
  authors: [{ name: "Agarwal Garg & Company" }],
  creator: "Agarwal Garg & Company",
  publisher: "Agarwal Garg & Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://agc-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://agc-portfolio.vercel.app',
    title: 'Agarwal Garg & Company - Chartered Accountants & Financial Advisors',
    description: 'Leading Chartered Accountants firm in India specializing in audit, taxation, GST, financial advisory, and business consulting.',
    siteName: 'Agarwal Garg & Company',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agarwal Garg & Company - Chartered Accountants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agarwal Garg & Company - Chartered Accountants & Financial Advisors',
    description: 'Leading Chartered Accountants firm in India specializing in audit, taxation, GST, financial advisory, and business consulting.',
    images: ['/og-image.jpg'],
    creator: '@agc_portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
