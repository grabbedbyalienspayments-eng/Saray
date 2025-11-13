
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/ef28c49b8616055595ccec32476a2655/21e5a7229132a68d17cb6868ef9749ae.png" 
              alt="Saray Kebap Cluj Logo" 
              className="h-12 w-auto sm:h-16"
            />
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="tel:0728888404"
              className="bg-[#B41E1E] text-white px-3 sm:px-6 py-2 rounded-xl text-sm sm:text-base font-medium hover:bg-[#9A1A1A] transition-colors whitespace-nowrap flex items-center space-x-1 sm:space-x-2"
            >
              <i className="ri-phone-line text-sm sm:text-base"></i>
              <span className="hidden sm:inline">SUNĂ</span>
              <span className="sm:hidden">SUNĂ</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
