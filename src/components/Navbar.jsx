import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/90 backdrop-blur-md py-3 md:py-4 shadow-lg' : 'bg-transparent py-5 md:py-6'
    }`}>
      {/* px-5 for small screens, px-12 for desktop */}
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wider">
          SA<span className="text-royal">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-sans text-gray-300 hover:text-royal transition-colors duration-300">
              {link}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 bg-royal text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X weight="bold" /> : <List weight="bold" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-[#0d1530] border-t border-gray-800 py-6 px-5 flex flex-col space-y-5 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-royal font-medium text-lg border-b border-gray-800/50 pb-2"
            >
              {link}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="px-5 py-3 bg-royal text-white text-center font-medium rounded-xl mt-2 shadow-lg">
            Let's Talk
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;