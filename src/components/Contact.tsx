import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    // In a real application, this would send the form data to a server
    console.log(data);
    setIsSubmitted(true);
    reset();
    
    // Reset submission state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-accent-500" />,
      title: 'Our Office',
      details: [
        'Agarwal Garg & Company',
        '123 Professional Tower, 2nd Floor',
        'Hazratganj, Lucknow - 226001',
        'Uttar Pradesh, India'
      ]
    },
    {
      icon: <Phone size={24} className="text-accent-500" />,
      title: 'Phone',
      details: [
        '+91 522 123 4567',
        '+91 98765 43210'
      ]
    },
    {
      icon: <Mail size={24} className="text-accent-500" />,
      title: 'Email',
      details: [
        'info@agcpartners.in',
        'support@agcpartners.in'
      ]
    }
  ];
  
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Get In Touch" 
          alignment="center" 
        />
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            variants={infoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-white rounded-lg shadow-card p-8">
              <h3 className="text-2xl font-bold text-primary-500 mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-charcoal-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="font-bold text-lg mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-charcoal-600">Monday - Friday:</span>
                    <span className="font-medium">9:30 AM - 6:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-white rounded-lg shadow-card p-8">
              <h3 className="text-2xl font-bold text-primary-500 mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">We have received your inquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="john@example.com"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                        placeholder="+91 98765 43210"
                        {...register('phone')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal-700 mb-1">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                      {...register('service')}
                    >
                      <option value="">Select a service</option>
                      <option value="Audit & Assurance">Audit & Assurance</option>
                      <option value="Taxation">Taxation</option>
                      <option value="Accounting Services">Accounting Services</option>
                      <option value="Compliance Services">Compliance Services</option>
                      <option value="Business Advisory">Business Advisory</option>
                      <option value="Startup Services">Startup Services</option>
                      <option value="Not-for-Profit Services">Not-for-Profit Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="How can we help you?"
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Send Message <Send size={16} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;