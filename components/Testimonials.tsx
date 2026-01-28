
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="temoignages" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full mb-4 text-xs font-bold uppercase tracking-widest"
          >
            <Star size={12} fill="currentColor" />
            La voix de nos clients
            <Star size={12} fill="currentColor" />
          </motion.div>
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Ils nous font <span className="text-blue-600">confiance</span></h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Découvrez pourquoi les leaders de l'industrie au Tchad choisissent Entreprise ABC pour leurs besoins critiques en électromécanique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group flex flex-col h-full"
            >
              <div className="mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Quote size={24} fill="currentColor" className="opacity-20 group-hover:opacity-100" />
                </div>
                <p className="text-slate-600 leading-relaxed italic text-lg mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-blue-600 text-lg shadow-inner">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{testimonial.author}</h4>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                    {testimonial.role} <span className="text-blue-500">@ {testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
