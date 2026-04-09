import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, TrendingUp } from 'lucide-react';

const impacts = [
  {
    icon: Activity,
    title: 'Bridge the gap between raw data and business decisions.',
    stat: '1000+',
    subtitle: 'Aspirants Transitioned',
    glow: 'from-indigo-pulse/20 to-transparent'
  },
  {
    icon: Database,
    title: 'Transform chaotic databases into clean, actionable insights.',
    stat: '20+',
    subtitle: 'Industry Projects Solved',
    glow: 'from-cyan-neon/20 to-transparent'
  },
  {
    icon: TrendingUp,
    title: 'Accelerate your career trajectory with high-income skills.',
    stat: '45%',
    subtitle: 'Average Salary Hike',
    glow: 'from-green-500/20 to-transparent'
  }
];

export default function ImpactOverview() {
  return (
    <section className="py-24 bg-midnight relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            The New Standard in Data Education
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Companies are drowning in data but starving for insights. We teach you how to be the person with the answers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative glass-card-premium p-8 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
              >
                {/* Glow Overlay */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                
                {/* Live Pulse */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-neon opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-neon"></span>
                  </span>
                </div>

                <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block border border-white/10 group-hover:border-indigo-pulse/50 transition-colors">
                  <Icon className="w-8 h-8 text-indigo-pulse group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-4xl font-extrabold text-white mb-2">{item.stat}</h3>
                <p className="text-cyan-neon text-sm font-medium tracking-wider uppercase mb-6">{item.subtitle}</p>
                <p className="text-gray-300 leading-relaxed font-light">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
