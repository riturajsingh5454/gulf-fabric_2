import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hammer, Globe, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Global Catalog', path: '/products' },
    { name: 'Installation Gallery', path: '/gallery' },
    { name: 'Company', path: '/about' },
    { name: 'Contact Exports', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-dark p-2 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
            <ShieldCheck size={28} />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold font-serif tracking-tight leading-none ${scrolled ? 'text-dark' : 'text-dark lg:text-white'}`}>
              Gulf Fabrication<span className="text-primary">.</span>
            </span>
            <span className={`text-[9px] font-bold tracking-[0.25em] uppercase mt-1.5 ${scrolled ? 'text-primary' : 'text-accent'}`}>
              Manufacturing & Exports
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : (scrolled ? 'text-dark' : 'text-dark lg:text-white')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-primary text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-dark transition-all flex items-center gap-2 shadow-xl shadow-primary/20"
          >
            <Globe size={16} /> Request Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-dark' : 'text-dark lg:text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-70px bg-white z-60"
          >
            <div className="flex flex-col gap-8 p-12 h-full justify-center text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-3xl font-serif font-bold ${location.pathname === link.path ? 'text-primary' : 'text-dark'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 space-y-4">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Regional Export Centers</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {BUSINESS_INFO.globalReach.slice(0, 3).map(r => (
                    <span key={r} className="bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase">{r}</span>
                  ))}
                </div>
              </div>
              <Link 
                to="/contact" 
                className="bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-2xl mt-4"
              >
                Global Export Enquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;