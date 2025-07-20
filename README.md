# Agarwal Garg & Company - Chartered Accountants

A professional website for Agarwal Garg & Company, a leading Chartered Accountants firm in India specializing in audit, taxation, GST, financial advisory, and business consulting services.

## 🌟 Features

- **SEO Optimized**: Comprehensive SEO implementation with structured data, meta tags, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient bundle splitting
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Beautiful animations with Framer Motion
- **PWA Ready**: Progressive Web App support with manifest.json

## 🚀 SEO Features

### Meta Tags & Structured Data
- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data (Schema.org) for business information
- Canonical URLs and sitemap generation

### Technical SEO
- Semantic HTML5 structure
- Proper heading hierarchy (H1-H6)
- Alt text for all images
- Internal linking strategy
- XML sitemap and robots.txt
- Google Analytics ready

### Performance Optimization
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Bundle optimization
- Compression enabled
- Security headers

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Intersection Observer**: React Intersection Observer

## 📁 Project Structure

```
agc-portfolio/
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   └── clipart702255.png
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page with structured data
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   └── robots.ts           # Robots.txt generation
│   ├── components/
│   │   ├── Header.tsx          # Navigation with accessibility
│   │   ├── Hero.tsx            # Hero section with SEO content
│   │   ├── About.tsx           # About section with semantic HTML
│   │   ├── Services.tsx        # Services with structured data
│   │   ├── Partners.tsx        # Team section with accessibility
│   │   ├── WhyChooseUs.tsx     # Value proposition
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── Logo.tsx            # Logo component
│   │   └── SectionHeading.tsx  # Reusable heading component
│   └── index.css               # Global styles
├── next.config.mjs             # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/agc-portfolio.git
cd agc-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deployment

### Production Build
```bash
npm run build
npm start
```

### Deployment
The project is optimized for deployment on Vercel, Netlify, or any static hosting platform.

## 🔧 Configuration

### SEO Configuration
Update the following files for your specific business:

1. **Metadata** (`src/app/layout.tsx`):
   - Update title, description, and keywords
   - Replace verification codes
   - Update Open Graph images

2. **Structured Data** (`src/app/page.tsx`):
   - Update business information
   - Modify service offerings
   - Update contact details

3. **Sitemap** (`src/app/sitemap.ts`):
   - Update base URL
   - Add/remove pages as needed

### Environment Variables
Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📊 SEO Checklist

- [x] Meta tags implementation
- [x] Structured data (Schema.org)
- [x] XML sitemap
- [x] Robots.txt
- [x] Semantic HTML structure
- [x] Alt text for images
- [x] Proper heading hierarchy
- [x] Internal linking
- [x] Mobile responsiveness
- [x] Page speed optimization
- [x] Security headers
- [x] PWA support
- [x] Accessibility compliance

## 🔍 SEO Monitoring

### Google Search Console
1. Add your domain to Google Search Console
2. Submit sitemap.xml
3. Monitor search performance

### Google Analytics
1. Add Google Analytics tracking code
2. Set up conversion tracking
3. Monitor user behavior

### Core Web Vitals
The site is optimized for Core Web Vitals:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Agarwal Garg & Company**
- **CA Mehul Garg**: +91 8779967557 | camehulgarg@gmail.com
- **CA Archana Agarwal**: +91 8726186964 | caarchanaagarwal@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

**Built with ❤️ for Agarwal Garg & Company** 