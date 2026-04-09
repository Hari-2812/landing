import React from 'react';
import BlurImage from './BlurImage';

import expert1 from '../src/assets/expert1.jpg';
import expert2 from '../src/assets/expert2.jpg';
import expert3 from '../src/assets/expert3.jpg';

const experts = [
  { img: expert1, name: 'Dr. Sarah Chen', role: 'Principal AI Architect', company: 'Ex-Google' },
  { img: expert2, name: 'Marcus Rhodes', role: 'Lead Data Engineer', company: 'Netflix' },
  { img: expert3, name: 'Priya Sharma', role: 'Head of Analytics', company: 'Stripe' },
];

export default function Experts() {
  return (
    <section className="py-24 bg-midnight relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-pulse/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-neon/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 relative z-10">
          <h2 className="heading-section">The <span className="text-indigo-pulse">Industry</span> Architects</h2>
          <p className="text-gray-400">Learn from the principal engineers who built the systems you use daily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {experts.map((expert, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6 glass-card-premium border-white/10 shadow-xl transition-all duration-500">
                <BlurImage 
                  src={expert.img} 
                  alt={expert.name} 
                  className="w-full h-full object-cover grayscale-[100%] contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-midnight to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-indigo-pulse transition-colors">{expert.name}</h3>
              <p className="text-indigo-pulse font-medium">{expert.role}</p>
              <p className="text-gray-500 text-sm tracking-widest uppercase mt-2">{expert.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
