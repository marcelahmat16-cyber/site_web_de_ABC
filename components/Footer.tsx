
import React from 'react';
import { Cpu, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 group cursor-default">
              <div className="p-2 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-white text-xl tracking-tight leading-none">ENTREPRISE ABC</span>
                <span className="text-[10px] text-blue-500 font-black tracking-[0.3em] uppercase">Expertise Tchad</span>
              </div>
            </div>
            <p className="max-w-sm mb-8 text-slate-400 leading-relaxed font-medium">
              Votre partenaire de confiance en électromécanique à N'Djamena. Qualité, expertise et service client depuis 2007.
            </p>
            <div className="flex gap-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="font-sans text-sm font-semibold hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Nos Services</h4>
            <ul className="space-y-4">
              {['Bobinage électrique', 'Fournitures mécaniques', 'Interventions techniques', 'Conseil personnalisé'].map((service, i) => (
                <li key={i}>
                  <a 
                    href="#services" 
                    className="font-sans text-sm font-semibold hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            © {new Date().getFullYear()} Entreprise ABC. <span className="text-slate-700 mx-2">|</span> Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;