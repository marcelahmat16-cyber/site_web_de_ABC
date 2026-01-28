
import React from 'react';
import { History, Target, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Image Principale */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&q=80&w=1000" 
                alt="Expertise technique ABC"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            
            {/* Image Secondaire en Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1621905235858-a883002237b6?auto=format&fit=crop&q=80&w=600" 
                alt="Bobinage de précision"
                className="w-full h-auto object-cover aspect-square"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Décoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-0"></div>
          </div>

          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Notre Histoire</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Entreprise ABC : <span className="text-blue-600">L'Excellence</span> au cœur de N'Djamena</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Fondée en mai 2007, <strong>Entreprise ABC</strong> s'est imposée comme le leader du bobinage et de la maintenance électromécanique au Tchad. Notre engagement envers la précision technique et la satisfaction client nous permet de servir les plus grands acteurs industriels du pays.
            </p>

            <div className="space-y-6">
              {[
                { icon: <History size={24} />, title: "17+ ans de savoir-faire", desc: "Une longévité qui témoigne de notre sérieux et de notre expertise technique constante." },
                { icon: <Target size={24} />, title: "Précision Industrielle", desc: "Chaque bobinage est testé rigoureusement pour garantir une performance optimale et durable." },
                { icon: <Factory size={24} />, title: "Infrastructures Modernes", desc: "Un atelier de 500m² équipé des dernières technologies de mesure et de réparation." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
