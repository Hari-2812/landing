import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dataAnalystImg from '../assets/data_analyst.png';
import biEngineerImg from '../assets/bi_engineer.png';
import heroBgImg from '../assets/hero_bg.png'; // Using hero as placeholder for Data Scientist
import { Briefcase, TrendingUp, Code2 } from 'lucide-react';

const roles = [
  {
    id: 'analyst',
    title: 'Data Analyst',
    image: dataAnalystImg,
    demand: 'High Demand (30% YoY)',
    salary: '$70k - $110k',
    icon: TrendingUp,
    description: 'Transform raw data into actionable insights. Perfect for detail-oriented problem solvers who love uncovering trends.'
  },
  {
    id: 'scientist',
    title: 'Data Scientist',
    image: heroBgImg,
    demand: 'Premium Tier',
    salary: '$110k - $160k',
    icon: Code2,
    description: 'Build predictive models and machine learning pipelines to forecast the future of businesses.'
  },
  {
    id: 'bi',
    title: 'BI Engineer',
    image: biEngineerImg,
    demand: 'Explosive Growth',
    salary: '$95k - $140k',
    icon: Briefcase,
    description: 'Architect automated reporting systems and visual dashboards for executives. Ideal for systems thinkers.'
  }
];

export default function CareerCarousel() {
  const [activeRole, setActiveRole] = useState(roles[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset and animate progress whenever active role changes
    setProgress(0);
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeRole]);

  return (
    <section className="py-24 bg-midnight relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-section">Target Your <span className="text-indigo-pulse">Framework</span></h2>
          <p className="text-gray-400 text-lg">We don't just teach tools; we build highly specific, in-demand career profiles.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Switcher Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {roles.map(role => (
              <button 
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${activeRole.id === role.id ? 'bg-indigo-pulse/10 border-indigo-pulse shadow-[0_0_20px_rgba(79,70,229,0.3)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
              >
                <div>
                  <h4 className={`text-xl font-bold ${activeRole.id === role.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{role.title}</h4>
                  <p className={`text-sm mt-1 ${activeRole.id === role.id ? 'text-cyan-neon' : 'text-gray-500'}`}>{role.demand}</p>
                </div>
                <role.icon className={`w-6 h-6 ${activeRole.id === role.id ? 'text-indigo-pulse' : 'text-gray-600'}`} />
              </button>
            ))}
          </div>

          {/* Active Role Display */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card-premium rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative h-[500px]"
              >
                {/* Background Image */}
                <img 
                  src={activeRole.image} 
                  alt={activeRole.title} 
                  loading="lazy" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent"></div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                  <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold mb-4 w-fit tracking-wide">
                    Avg Base: {activeRole.salary}
                  </div>
                  
                  <h3 className="text-4xl font-extrabold text-white mb-4">{activeRole.title}</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">{activeRole.description}</p>

                  {/* Animated Skills Match Meter */}
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold text-gray-300 tracking-widest uppercase">Target Skills Match</span>
                      <span className="text-cyan-neon font-bold text-xl">{progress}%</span>
                    </div>
                    <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-indigo-pulse to-cyan-neon relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 skew-x-12 animate-[slide_2s_infinite]"></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
