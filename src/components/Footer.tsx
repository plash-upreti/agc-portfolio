import { PhoneCall, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-500 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo inFooter={true} />
            <p className="mt-4 text-gray-300 text-sm">
              A premier chartered accountancy firm providing comprehensive financial services 
              to businesses and individuals since 2010.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Partners', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Audit & Assurance', 
                'Taxation', 
                'Accounting', 
                'Compliance', 
                'Business Advisory', 
                'Startup Services',
                'Not-for-Profit Services'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="mr-3 flex-shrink-0 text-accent-500" />
                <span className="text-sm text-gray-300">
                  123 Professional Tower, 2nd Floor, Hazratganj, Lucknow - 226001
                </span>
              </li>
              <li className="flex">
                <PhoneCall size={18} className="mr-3 flex-shrink-0 text-accent-500" />
                <span className="text-sm text-gray-300">+91 522 123 4567</span>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-3 flex-shrink-0 text-accent-500" />
                <span className="text-sm text-gray-300">info@agcpartners.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Agarwal Garg & Company. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;