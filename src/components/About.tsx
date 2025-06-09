import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    { title: 'Integrity', description: 'We uphold the highest standards of professional ethics and integrity in all our client engagements.' },
    { title: 'Excellence', description: 'We are committed to delivering exceptional quality and accuracy in our services.' },
    { title: 'Client Focus', description: 'We prioritize understanding our clients\' unique needs and providing tailored solutions.' },
    { title: 'Innovation', description: 'We embrace modern approaches and technologies to add value to our services.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeading title="About Us" subtitle="Our Story & Values" alignment="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <h3 className="text-primary-500 mb-4">Our Story</h3>
            <p className="mb-4">
              Founded in 2024 by Chartered Accountants Archana Agarwal and Mehul Garg, Agarwal Garg and Company is a professionally managed chartered accountancy firm headquartered in Lucknow.
            </p>
            <p className="mb-4">
              Though recently established, the firm draws on the founders' extensive prior experience in statutory audits, tax consultancy, and financial advisory across diverse industries. Within a short span, the firm has earned a reputation for precision, integrity, and client-centric service delivery.
            </p>
            <p>
              We offer a comprehensive suite of services including tax planning, business compliance, financial reporting, audit & assurance, and strategic advisory. Our approach integrates classical accounting discipline with forward-looking, tech-enabled solutions—positioning us as a value-driven partner for emerging and growth-stage businesses navigating India's evolving financial and regulatory ecosystem.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-3">
                  <CheckCircle size={20} className="text-primary-500 mr-2" />
                  <h4 className="font-bold text-lg">{value.title}</h4>
                </div>
                <p className="text-charcoal-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;