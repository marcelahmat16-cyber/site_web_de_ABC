
import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 -mt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-blue-500 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              {stat.icon}
            </div>
            <span className="text-3xl font-black text-slate-900 mb-1">{stat.value}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
