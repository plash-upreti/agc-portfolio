import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center"
      aria-label="Hero section - Welcome to Agarwal Garg & Company"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-500 bg-opacity-80" aria-hidden="true"></div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.h1 
          className="text-white mb-6 text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Strategic Financial Solutions <br className="hidden md:block" />
          for Growing Businesses
        </motion.h1>
        
        <motion.p 
          className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Leading Chartered Accountants firm in India specializing in audit, taxation, GST, financial advisory, and business consulting services since 2024
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#services" 
            className="btn bg-white text-primary-500 hover:bg-gray-100"
            aria-label="Explore our comprehensive CA services"
          >
            Explore Our Services
          </a>
          <a 
            href="#contact" 
            className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10"
            aria-label="Contact us for professional CA services"
          >
            Contact Us <ArrowRight size={18} className="ml-2" aria-hidden="true" />
          </a>
        </motion.div>
        
        {/* Additional SEO content */}
        <motion.div
          className="mt-12 text-white text-sm opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>Trusted by businesses across India • Expert CA Services • 24/7 Support</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;