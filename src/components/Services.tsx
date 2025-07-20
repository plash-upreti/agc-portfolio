import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  LineChart, 
  Calculator, 
  BookOpen, 
  FileCheck, 
  Briefcase, 
  Rocket, 
  Heart, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const Services = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      id: 1,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services to ensure financial statement accuracy and compliance with Indian regulations.',
      icon: <LineChart className="h-10 w-10 text-primary-500" aria-hidden="true" />,
      details: [
        'Statutory Audit under Companies Act, 2013',
        'Tax Audit under Income Tax Act, 1961',
        'Internal Audits and Controls Testing',
        'Concurrent Audits and Revenue Audits for Banks and Financial Institutions',
        'Stock Audits',
        'Special Purpose Audits'
      ]
    },
    {
      id: 2,
      title: 'Taxation Services',
      description: 'Strategic tax planning and compliance services for individuals and businesses in India.',
      icon: <Calculator className="h-10 w-10 text-primary-500" aria-hidden="true" />,
      details: [
        'Income Tax Planning and Compliance',
        'GST Registration and Returns',
        'GST Reconciliation with Books',
        'International Taxation',
        'Tax Dispute Resolution',
        'Transfer Pricing'
      ]
    },
    {
      id: 3,
      title: 'Accounting Services',
      description: 'Reliable accounting and bookkeeping services for businesses of all sizes across India.',
      icon: <BookOpen className="h-10 w-10 text-primary-500" aria-hidden="true" />,
      details: [
        'Bookkeeping and Accounting',
        'Financial Statement Preparation',
        'Payroll Processing',
        'Accounts Receivable and Payable Management',
        'Financial Analysis and Reporting'
      ]
    },
    {
      id: 4,
      title: 'Compliance Services',
      description: 'End-to-end compliance services to navigate complex Indian regulatory requirements.',
      icon: <FileCheck className="h-10 w-10 text-primary-500" aria-hidden="true" />,
      details: [
        'Company Law Compliance',
        'MSME Compliances',
        'ROC Filings',
        'Due Diligence',
        'Secretarial Services'
      ]
    },
    {
      id: 5,
      title: 'Business Advisory',
      description: 'Strategic business consulting to help your organization thrive and grow in the Indian market.',
      icon: <Briefcase className="h-10 w-10 text-primary-500" aria-hidden="true" />,
      details: [
        'Business Restructuring',
        'Mergers and Acquisitions',
        'Financial Planning',
        'Risk Assessment',
        'Management Consulting'
      ]
    },
    {
      id: 6,
      title: 'Startup Services',
      description: 'Specialized services for Indian startups from inception through growth phases.',
      icon: <Rocket className="h-10 w-10 text-primary-500" aria-hidden="true" />,
      details: [
        'Business Registration and Incorporation',
        'Start up India Registration',
        'Funding Advisory',
        'Compliance Setup',
        'Financial Projections',
        'Growth Strategy'
      ]
    },
    {
      id: 7,
      title: 'Not-for-Profit Services',
      description: 'Specialized accounting and compliance services for NGOs and charitable organizations in India.',
      icon: <Heart className="h-10 w-10 text-primary-500" aria-hidden="true" />,
      details: [
        'NGO Registration',
        '80G/12A Registration',
        'Grant Management',
        'Donor Reporting'
      ]
    },
  ];

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section 
      id="services" 
      className="section bg-white"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive Financial Solutions" 
          alignment="center"
          id="services-heading"
        />
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          role="list"
          aria-label="Our professional CA services"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              className="service-card group relative overflow-hidden bg-white rounded-lg shadow-card p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              role="listitem"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4" aria-hidden="true">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-800">{service.title}</h3>
                <p className="text-charcoal-600 mb-4 flex-grow">{service.description}</p>
                
                <button
                  className="flex items-center text-primary-500 hover:text-primary-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                  onClick={() => toggleExpanded(service.id)}
                  aria-expanded={expandedId === service.id}
                  aria-controls={`service-details-${service.id}`}
                  aria-label={`${expandedId === service.id ? 'Hide' : 'Show'} details for ${service.title}`}
                >
                  {expandedId === service.id ? (
                    <>
                      <span>Show less</span>
                      <ChevronUp size={16} className="ml-1" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <span>Learn more</span>
                      <ChevronDown size={16} className="ml-1" aria-hidden="true" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expandedId === service.id && (
                    <motion.div
                      id={`service-details-${service.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden"
                      role="region"
                      aria-label={`Detailed services for ${service.title}`}
                    >
                      <ul className="space-y-2" role="list">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start" role="listitem">
                            <span className="bg-primary-100 text-primary-500 rounded-full h-1.5 w-1.5 mt-2 mr-2 flex-shrink-0" aria-hidden="true"></span>
                            <span className="text-charcoal-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;