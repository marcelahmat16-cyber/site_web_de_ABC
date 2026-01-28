
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fonction pour fermer le menu mobile
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Gestion du scroll pour l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu si on redimensionne l'écran vers le mode desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMenu]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className={`p-2 rounded-lg transition-all duration-300 ${scrolled ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-white text-blue-600 shadow-sm'} group-hover:rotate-12`}>
              <Cpu size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors duration-300 ${scrolled ? 'text-blue-900' : 'text-white drop-shadow-sm'}`}>ENTREPRISE</span>
              <span className={`text-xs font-black tracking-widest transition-colors duration-300 ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}>ABC</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`relative px-4 py-2 text-sm font-bold transition-colors group ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white hover:text-white'}`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${scrolled ? 'bg-blue-600' : 'bg-blue-400'}`}></span>
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-blue-600 text-white px-7 py-2.5 rounded-full text-sm font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2"
            >
              Contactez-nous
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-8 space-y-1 flex flex-col items-center">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={closeMenu}
                  className="block w-full text-center px-3 py-4 text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={closeMenu}
                className="mt-6 w-full text-center bg-blue-600 text-white px-6 py-4 rounded-2xl font-black shadow-lg shadow-blue-600/20 active:scale-95 transition-transform"
              >
                Contactez-nous
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
