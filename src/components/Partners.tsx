import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Partner {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  education: string[];
  social: {
    email?: string;
    linkedin?: string;
    phone?: string;
  };
}

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners: Partner[] = [
    {
      id: 1,
      name: 'CA Archana Agarwal',
      role: 'Financial Advisory',
      bio: 'With over 4 years of experience in audit, taxation, and financial advisory, CA Archana Agarwal specializes in strategic tax planning and compliance management. Her expertise in direct taxation and corporate restructuring has helped numerous clients optimize their tax positions and improve financial performance.',
      imageUrl: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      education: [
        'Chartered Accountant',
        'B.Com, Lucknow University'
      ],
      social: {
        email: 'caarchanaagarwal@gmail.com',
        linkedin: 'https://www.linkedin.com/in/caarchanaagarwal',
        phone: '+91 8726186964'
      }
    },
    {
      id: 2,
      name: 'CA Mehul Garg',
      role: 'Founding Partner',
      bio: 'CA Mehul Garg brings over 4 years of expertise in audit, financial consulting, and business advisory. He specializes in GST implementation, international taxation, and startup financial structuring. Mehul is known for his client-first approach and ability to simplify complex financial matters for business owners and entrepreneurs.',
      imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      education: [
        'Chartered Accountant',
        'B.Com (Hons.), NMIMS, Mumbai'
      ],
      social: {
        email: 'camehulgarg@gmail.com',
        linkedin: 'https://www.linkedin.com/in/camehulgarg',
        phone: '+91 8779967557'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      id="partners" 
      className="section bg-gray-50"
      aria-labelledby="partners-heading"
    >
      <div className="container-custom">
        <SectionHeading 
          title="Our Leadership" 
          subtitle="Meet Our Partners" 
          alignment="center"
          id="partners-heading"
        />
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          role="list"
          aria-label="Our Chartered Accountant partners"
        >
          {partners.map((partner) => (
            <motion.article 
              key={partner.id} 
              className="bg-white rounded-lg shadow-card overflow-hidden"
              variants={itemVariants}
              role="listitem"
            >
              <div className="md:flex">
                <div className="p-6">
                  <div className="flex flex-col h-full">
                    <header className="mb-4">
                      <h3 className="text-2xl font-bold text-primary-500">{partner.name}</h3>
                      <p className="text-charcoal-600 font-medium">{partner.role}</p>
                    </header>
                    
                    <p className="text-charcoal-700 mb-4 text-sm">{partner.bio}</p>
                    
                    <section className="mb-4">
                      <h4 className="text-sm font-semibold text-charcoal-800 mb-2">Education</h4>
                      <ul className="text-sm space-y-1" role="list">
                        {partner.education.map((edu, index) => (
                          <li key={index} className="text-charcoal-600" role="listitem">{edu}</li>
                        ))}
                      </ul>
                    </section>
                    
                    <footer className="mt-auto">
                      <div className="flex space-x-3" role="list" aria-label={`Contact ${partner.name}`}>
                        {partner.social.email && (
                          <a 
                            href={`mailto:${partner.social.email}`} 
                            className="text-primary-500 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                            aria-label={`Email ${partner.name}`}
                            role="listitem"
                          >
                            <Mail size={18} aria-hidden="true" />
                          </a>
                        )}
                        {partner.social.linkedin && (
                          <a 
                            href={partner.social.linkedin} 
                            className="text-primary-500 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                            aria-label={`LinkedIn profile of ${partner.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            role="listitem"
                          >
                            <Linkedin size={18} aria-hidden="true" />
                          </a>
                        )}
                        {partner.social.phone && (
                          <a 
                            href={`tel:${partner.social.phone}`} 
                            className="text-primary-500 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                            aria-label={`Call ${partner.name}`}
                            role="listitem"
                          >
                            <Phone size={18} aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;