interface LogoProps {
  isScrolled?: boolean;
  inFooter?: boolean;
}

const Logo = ({ isScrolled = false, inFooter = false }: LogoProps) => {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="/clipart702255.png"
        alt="CA Logo"
        className="w-10 h-10 object-contain"
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
          and Company
        </span>
      </div>
    </div>
  );
};

export default Logo;