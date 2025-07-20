import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  id?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = 'left',
  id
}: SectionHeadingProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div 
      ref={ref}
      className={`max-w-2xl ${alignmentClasses[alignment]} mb-12`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <span className="inline-block text-primary-500 font-medium mb-2">
          {subtitle}
        </span>
      )}
      <h2 
        id={id}
        className="text-charcoal-800 relative pb-3 mb-0 text-3xl md:text-4xl font-bold"
      >
        {title}
        <span className="absolute bottom-0 left-0 w-20 h-1 bg-accent-500 rounded"></span>
      </h2>
    </motion.div>
  );
};

export default SectionHeading;