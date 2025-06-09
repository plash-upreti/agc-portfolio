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
      role: 'Founding Partner',
      bio: 'With over 6 years of experience in audit, taxation, and financial advisory, CA Archana Agarwal specializes in strategic tax planning and compliance management. Her expertise in direct taxation and corporate restructuring has helped numerous clients optimize their tax positions and improve financial performance.',
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
      bio: 'CA Mehul Garg brings over 6 years of expertise in audit, financial consulting, and business advisory. He specializes in GST implementation, international taxation, and startup financial structuring. Mehul is known for his client-first approach and ability to simplify complex financial matters for business owners and entrepreneurs.',
      imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      education: [
        'Chartered Accountant',
        'B.Com (Hons.), Lucknow University'
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
    <section id="partners" className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="Our Leadership" 
          subtitle="Meet Our Partners" 
          alignment="center" 
        />
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.id} 
              className="bg-white rounded-lg shadow-card overflow-hidden"
              variants={itemVariants}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-2/5">
                  <img 
                    className="h-64 w-full object-cover md:h-full md:w-full" 
                    src={partner.imageUrl} 
                    alt={partner.name} 
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-primary-500">{partner.name}</h3>
                      <p className="text-charcoal-600 font-medium">{partner.role}</p>
                    </div>
                    
                    <p className="text-charcoal-700 mb-4 text-sm">{partner.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-charcoal-800 mb-2">Education</h4>
                      <ul className="text-sm space-y-1">
                        {partner.education.map((edu, index) => (
                          <li key={index} className="text-charcoal-600">{edu}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex space-x-3">
                        {partner.social.email && (
                          <a 
                            href={`mailto:${partner.social.email}`} 
                            className="text-primary-500 hover:text-primary-600 transition-colors"
                            aria-label={`Email ${partner.name}`}
                          >
                            <Mail size={18} />
                          </a>
                        )}
                        {partner.social.linkedin && (
                          <a 
                            href={partner.social.linkedin} 
                            className="text-primary-500 hover:text-primary-600 transition-colors"
                            aria-label={`LinkedIn profile of ${partner.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin size={18} />
                          </a>
                        )}
                        {partner.social.phone && (
                          <a 
                            href={`tel:${partner.social.phone}`} 
                            className="text-primary-500 hover:text-primary-600 transition-colors"
                            aria-label={`Call ${partner.name}`}
                          >
                            <Phone size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;