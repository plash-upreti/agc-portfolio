import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Partners', href: '#partners' },
    { title: 'Why Us', href: '#why-choose-us' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom mx-auto flex justify-between items-center">
          <Logo isScrolled={isScrolled} />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary-500 whitespace-nowrap ${
                  isScrolled ? 'text-charcoal-800' : 'text-white'
                }`}
              >
                {item.title}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`btn whitespace-nowrap ${isScrolled ? 'btn-primary' : 'bg-white text-primary-500 hover:bg-gray-100'}`}
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-charcoal-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-charcoal-800' : 'text-white'} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed top-[72px] left-0 right-0 bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-charcoal-800 hover:text-primary-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;