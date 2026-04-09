import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Sparkles, LayoutDashboard } from 'lucide-react';

const curriculum = [
  {
    id: 'python',
    title: 'Python for Data Science',
    icon: Terminal,
    desc: 'From basic syntax to advanced Pandas & NumPy manipulation.',
    project: 'Flight Delay Predictor Model',
  },
  {
    id: 'sql',
    title: 'Advanced SQL & Databases',
    icon: Database,
    desc: 'Write complex window functions and CTEs to extract enterprise-level insights.',
    project: 'E-commerce Churn Analysis Query',
  },
  {
    id: 'bi',
    title: 'PowerBI & Tableau',
    icon: LayoutDashboard,
    desc: 'Transform rigid data tables into executive-friendly, dynamic dashboards.',
    project: 'Sales Command Center Dashboard',
  },
  {
    id: 'ai',
    title: 'Applied AI Solutions',
    icon: Sparkles,
    desc: 'Integrate LLMs and predictive clustering to solve edge-case business challenges.',
    project: 'Customer Sentiment Clustering API',
  }
];

export default function Curriculum() {
  const [activeId, setActiveId] = useState(curriculum[0].id);

  return (
    <section className="py-24 bg-black/90 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-pulse/10 blur-[150px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="heading-section"
          >
            The Mastery <span className="text-indigo-pulse">Curriculum</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">A structured progression from absolute fundamentals to advanced business intelligence.</p>
        </div>

        <div className="space-y-4">
          {curriculum.map((module) => {
            const isActive = activeId === module.id;
            const Icon = module.icon;

            return (
              <motion.div 
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                key={module.id}
                className={`glass-card-premium rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer border ${isActive ? 'border-indigo-pulse/50' : 'border-white/5 hover:border-white/20'}`}
                onClick={() => setActiveId(module.id)}
              >
                <div className="p-6 md:p-8 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl ${isActive ? 'bg-indigo-pulse text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]' : 'bg-white/5 text-gray-400'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {module.title}
                    </h3>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isActive ? 'border-indigo-pulse text-indigo-pulse' : 'border-white/20 text-gray-400'}`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-black/20"
                    >
                      <div className="p-6 md:p-8 pt-0 flex flex-col md:flex-row gap-8 items-start">
                        <p className="text-gray-400 leading-relaxed md:w-1/2">
                          {module.desc}
                        </p>
                        <div className="md:w-1/2 bg-white/5 border border-cyan-neon/20 rounded-2xl p-5 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-cyan-neon"></div>
                          <p className="text-xs text-cyan-neon uppercase tracking-wider mb-2 font-semibold">What You'll Build</p>
                          <p className="text-white font-medium">{module.project}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
