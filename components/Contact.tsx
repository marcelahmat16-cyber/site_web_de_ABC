
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Send, AlertCircle } from 'lucide-react';
import { CONTACT_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface FormState {
  name: string;
  phone: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    category: 'Bobinage moteur électrique',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isTouched, setIsTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Le nom est requis';
        else if (value.trim().length < 3) error = 'Le nom doit contenir au moins 3 caractères';
        break;
      case 'phone':
        const phoneRegex = /^\+?[0-9]{8,15}$/;
        if (!value.trim()) error = 'Le numéro de téléphone est requis';
        else if (!phoneRegex.test(value.replace(/\s/g, ''))) error = 'Format de téléphone invalide (min 8 chiffres)';
        break;
      case 'message':
        if (!value.trim()) error = 'Le message ne peut pas être vide';
        else if (value.trim().length < 10) error = 'Veuillez détailler votre demande (min 10 caractères)';
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (isTouched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setIsTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const isFormValid = 
    formData.name.trim().length >= 3 && 
    /^\+?[0-9]{8,15}$/.test(formData.phone.replace(/\s/g, '')) && 
    formData.message.trim().length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Demande envoyée avec succès ! Nos équipes vous recontacteront sous peu.');
      // Reset form logic would go here
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="texture industrielle discrète"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-4">Contact & Support</h2>
            <h3 className="text-4xl font-black mb-8">Partagez votre projet avec <span className="text-blue-400">ABC</span></h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Une panne moteur ? Un besoin de pièces de rechange certifiées ? Nos experts vous répondent sous 24h pour assurer votre continuité de service.
            </p>

            <div className="space-y-8">
              {[
                { icon: <MapPin size={24} />, title: "Localisation", content: CONTACT_DATA.address, sub: `Coordonnées: ${CONTACT_DATA.coordinates.lat}, ${CONTACT_DATA.coordinates.lng}` },
                { icon: <Phone size={24} />, title: "Support Téléphonique", content: CONTACT_DATA.phones.join(' / '), href: `tel:${CONTACT_DATA.phones[0]}` },
                { icon: <Mail size={24} />, title: "Email Professionnel", content: CONTACT_DATA.email, href: `mailto:${CONTACT_DATA.email}` }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group" tabIndex={0}>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-slate-400 hover:text-white transition-colors block">{item.content}</a>
                    ) : (
                      <p className="text-slate-400">{item.content}</p>
                    )}
                    {item.sub && <span className="text-[10px] text-blue-400/60 font-mono mt-1 block uppercase tracking-tighter">{item.sub}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl flex items-center justify-between shadow-2xl shadow-blue-600/20">
              <div>
                <h4 className="font-bold text-white text-xl">Ouvert du Lundi au Samedi</h4>
                <p className="text-blue-100 text-sm opacity-80">08:00 - 18:00 (Farcha, N'Djamena)</p>
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${CONTACT_DATA.coordinates.lat},${CONTACT_DATA.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 p-4 rounded-full hover:scale-110 transition-transform shadow-lg"
                aria-label="Voir sur Google Maps"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 text-slate-900 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0"></div>
            
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-2">Demande de Devis</h4>
              <p className="text-slate-500 mb-8 text-sm">Remplissez le formulaire, nous vous rappelons gratuitement.</p>
              
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Nom Complet</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all outline-none ${
                        errors.name ? 'border-red-500 bg-red-50/30' : 'border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      }`} 
                      placeholder="Ex: Ahmed Moussa" 
                      required 
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.span 
                          initial={{ opacity: 0, y: -5 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: -5 }}
                          className="text-[10px] text-red-500 font-bold absolute -bottom-4 left-2 flex items-center gap-1"
                        >
                          <AlertCircle size={10} /> {errors.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Téléphone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all outline-none ${
                        errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      }`} 
                      placeholder="+235 63..." 
                      required 
                    />
                    <AnimatePresence>
                      {errors.phone && (
                        <motion.span 
                          initial={{ opacity: 0, y: -5 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: -5 }}
                          className="text-[10px] text-red-500 font-bold absolute -bottom-4 left-2 flex items-center gap-1"
                        >
                          <AlertCircle size={10} /> {errors.phone}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Type d'Intervention</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option>Bobinage moteur électrique</option>
                    <option>Maintenance alternateur</option>
                    <option>Achat de pièces de rechange</option>
                    <option>Audit technique sur site</option>
                    <option>Autre besoin technique</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Votre Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all outline-none resize-none ${
                      errors.message ? 'border-red-500 bg-red-50/30' : 'border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    }`} 
                    placeholder="Décrivez votre panne ou votre besoin..." 
                    required
                  ></textarea>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.span 
                        initial={{ opacity: 0, y: -5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -5 }}
                        className="text-[10px] text-red-500 font-bold absolute -bottom-4 left-2 flex items-center gap-1"
                      >
                        <AlertCircle size={10} /> {errors.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <button 
                  type="submit" 
                  disabled={!isFormValid}
                  className={`w-full font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 group ${
                    isFormValid 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25 cursor-pointer' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                  }`}
                >
                  Envoyer ma demande
                  <Send size={20} className={isFormValid ? "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" : ""} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
