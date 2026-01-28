
import React from 'react';
import { PARTNERS } from '../constants';
import { Briefcase } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Nos Partenaires</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Ils nous font confiance</h3>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Nous avons établi des collaborations solides avec plusieurs entreprises reconnues, témoignant de notre engagement à fournir des services fiables et de qualité.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PARTNERS.map((partner, index) => (
            <div 
              key={index}
              className="group p-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-blue-600 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Briefcase size={20} />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-white transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
