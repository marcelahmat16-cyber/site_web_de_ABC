
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image optimisée */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
          alt="Atelier industriel Entreprise ABC"
          className="w-full h-full object-cover scale-105"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900/80 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping"></span>
            <span className="text-xs font-bold text-blue-100 tracking-widest uppercase">Expertise certifiée au Tchad</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight"
          >
            Propulsez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Industrie</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-200 mb-10 max-w-xl leading-relaxed font-light"
          >
            Depuis 2007, <strong>Entreprise ABC</strong> redéfinit la maintenance électromécanique à N'Djamena par la précision et l'innovation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href="#services" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-2xl shadow-blue-600/40 group relative overflow-hidden">
              <span className="relative z-10">Nos Solutions</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:border-white/40">
              Devis en 24h
              <ChevronRight size={18} className="opacity-50" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-8 opacity-80"
          >
            <div className="flex items-center gap-3">
              <div className="p-1 bg-blue-500/20 rounded-lg"><CheckCircle className="text-blue-400" size={16} /></div>
              <span className="text-sm font-medium text-slate-100">Bobinage Haute Tension</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1 bg-blue-500/20 rounded-lg"><CheckCircle className="text-blue-400" size={16} /></div>
              <span className="text-sm font-medium text-slate-100">Maintenance sur Site</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1 bg-blue-500/20 rounded-lg"><CheckCircle className="text-blue-400" size={16} /></div>
              <span className="text-sm font-medium text-slate-100">Pièces d'Origine</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
