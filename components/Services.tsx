
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Notre savoir-faire</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Solutions Industrielles <span className="text-blue-600">ABC</span></h3>
          </div>
          <p className="text-slate-500 text-lg max-w-sm">
            Nous combinons technologie moderne et artisanat de précision pour restaurer vos équipements critiques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 group transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Image de service optimisée */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white text-sm font-bold flex items-center gap-2">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                   <span className="text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">Détails techniques</span>
                   <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ExternalLink size={16} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
