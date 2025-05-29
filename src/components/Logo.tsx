import { Building2 } from 'lucide-react';

interface LogoProps {
  isScrolled?: boolean;
  inFooter?: boolean;
}

const Logo = ({ isScrolled = false, inFooter = false }: LogoProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Building2 
        size={28} 
        className={inFooter ? 'text-white' : isScrolled ? 'text-primary-500' : 'text-white'} 
      />
      <div className="flex flex-col">
        <span 
          className={`font-serif font-bold text-lg leading-tight ${
            inFooter ? 'text-white' : isScrolled ? 'text-primary-500' : 'text-white'
          }`}
        >
          Agarwal Garg
        </span>
        <span 
          className={`text-xs font-medium ${
            inFooter ? 'text-white' : isScrolled ? 'text-charcoal-800' : 'text-white'
          }`}
        >
          & Company
        </span>
      </div>
    </div>
  );
};

export default Logo;