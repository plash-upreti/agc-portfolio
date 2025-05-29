import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Clock 
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedCounter from './AnimatedCounter';

interface Reason {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Stat {
  id: number;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const WhyChooseUs = () => {
  const [reasonsRef, reasonsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons: Reason[] = [
    {
      id: 1,
      title: 'Experienced Team',
      description: 'Our team consists of highly qualified professionals with decades of combined experience across various industries and specializations.',
      icon: <Users className="h-8 w-8 text-accent-500" />
    },
    {
      id: 2,
      title: 'Growth-Oriented Approach',
      description: 'We focus on helping our clients grow by providing proactive strategies rather than just compliance-focused services.',
      icon: <TrendingUp className="h-8 w-8 text-accent-500" />
    },
    {
      id: 3,
      title: 'Industry Recognition',
      description: 'Our firm has been recognized for excellence in service delivery and innovative financial solutions by industry associations.',
      icon: <Award className="h-8 w-8 text-accent-500" />
    },
    {
      id: 4,
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines in financial matters and ensure on-time delivery of all our services.',
      icon: <Clock className="h-8 w-8 text-accent-500" />
    }
  ];

  const stats: Stat[] = [
    {
      id: 1,
      value: 12,
      label: 'Years of Experience',
      suffix: '+'
    },
    {
      id: 2,
      value: 500,
      label: 'Satisfied Clients',
      suffix: '+'
    },
    {
      id: 3,
      value: 20,
      label: 'Team Members',
      suffix: '+'
    },
    {
      id: 4,
      value: 7,
      label: 'Service Verticals'
    }
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
    <section id="why-choose-us" className="section bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Why Choose Us" 
          subtitle="Our Differentiators" 
          alignment="center" 
        />
        
        <motion.div 
          ref={reasonsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={reasonsInView ? "visible" : "hidden"}
        >
          {reasons.map((reason) => (
            <motion.div 
              key={reason.id} 
              className="flex space-x-4"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="p-3 bg-primary-50 rounded-full">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-charcoal-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20">
          <motion.div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.id} 
                className="text-center"
                variants={itemVariants}
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-2">
                  {statsInView && (
                    <>
                      {stat.prefix}<AnimatedCounter value={stat.value} />{stat.suffix}
                    </>
                  )}
                </div>
                <p className="text-charcoal-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;