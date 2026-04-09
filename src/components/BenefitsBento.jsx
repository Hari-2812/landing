import React, { useState, useEffect } from 'react';
import { Target, Trophy, Code, Compass, Activity } from 'lucide-react';

const benefits = [
  { icon: Target, title: 'Placement Support', desc: 'Direct referrals to extensive tech networks.', color: 'text-indigo-pulse', bg: 'bg-indigo-pulse/10', border: 'border-indigo-pulse/20' },
  { icon: Trophy, title: 'Mock Interviews', desc: 'High-stress technical whiteboard prep.', color: 'text-cyan-neon', bg: 'bg-cyan-neon/10', border: 'border-cyan-neon/20' },
  { icon: Code, title: 'Real-World Scale', desc: 'Enterprise data architecture gaps bridged dynamically.', color: 'text-purple-punch', bg: 'bg-purple-punch/10', border: 'border-purple-punch/20' },
  { icon: Compass, title: '1-on-1 Mentorship', desc: 'Guidance to navigate complex algorithms.', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
];

export default function BenefitsBento() {
  // Simulated Socket data stream for 1,142+ aspirants
  const [liveAspirants, setLiveAspirants] = useState(1142);

  useEffect(() => {
    // Mimic incoming pipeline traffic
    const interval = setInterval(() => {
      setLiveAspirants(prev => prev + Math.floor(Math.random() * 3));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black relative border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-section">The <span className="text-indigo-pulse">Architect's</span> Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Beyond the curriculum. Your unfair advantage in the enterprise job market.</p>
        </div>

        {/* 3x3 Asymmetrical Apple-style Bento Grid Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Main Hero Tile with Simulated Socket IO Logic */}
          <div className="md:col-span-2 md:row-span-2 glass-card-premium p-10 flex flex-col justify-between relative overflow-hidden bg-midnight border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-pulse/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-neon opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-neon"></span>
                </span>
                <span className="tag-label text-cyan-neon">Live Global Pipeline</span>
              </div>
              <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-4 group-hover:scale-[1.02] origin-left transition-transform duration-500">
                Join <span className="text-cyan-neon">{liveAspirants.toLocaleString()}+</span> Aspirants<br/>Deploying Systems.
              </h3>
              <p className="text-gray-400 text-lg max-w-md">Our continuous integration infrastructure tracks global data architecture deployments in real-time.</p>
            </div>
            <Activity className="absolute -bottom-10 -right-10 w-64 h-64 text-cyan-neon/5 -rotate-12" />
          </div>

          {/* Secondary Features Boxed */}
          {benefits.slice(0, 2).map((b, i) => (
            <div key={i} className={`glass-card-premium p-8 relative flex flex-col justify-center border-white/5 hover:border-white/20 transition-colors`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${b.bg} ${b.border} border`}>
                <b.icon className={`w-7 h-7 ${b.color}`} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{b.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}

          {/* Wide Feature */}
          <div className="md:col-span-2 glass-card-premium p-8 relative flex items-center gap-8 border-white/5 hover:border-white/20">
             <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center bg-purple-punch/10 border border-purple-punch/20`}>
                <Code className="w-8 h-8 text-purple-punch" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Real-World Scale Analysis</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Stop building standard terminal calculators. Compile explicit dimensional tables and architect raw scalable clusters with live industry tracking metrics.</p>
              </div>
          </div>

          {/* Final Square Feature */}
          <div className="glass-card-premium p-8 relative flex flex-col justify-center border-white/5 hover:border-white/20">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-green-500/10 border border-green-500/20`}>
                <Compass className="w-7 h-7 text-green-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">System Mentorship</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Direct algorithmic evaluations from engineering leads.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
