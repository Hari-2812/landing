import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Code2, BrainCircuit, LineChart, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const roadmapSteps = [
  { id: 1, title: 'Foundational Querying', desc: 'Master advanced SQL aggregations and architectural table design.', icon: Database, color: 'text-indigo-pulse' },
  { id: 2, title: 'Data Pipelines', desc: 'Construct resilient ETL infrastructure using Python and Airflow.', icon: Server, color: 'text-cyan-neon' },
  { id: 3, title: 'Predictive Modeling', desc: 'Apply Scikit-Learn to real-world churn algorithms.', icon: BrainCircuit, color: 'text-purple-punch' },
  { id: 4, title: 'Executive Dashboards', desc: 'Communicate KPIs effectively through automated PowerBI layers.', icon: LineChart, color: 'text-indigo-pulse' },
];

export default function Roadmap() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const orbRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    // Scroll progress controls the "Data Packet" orb traveling the fiber optic line
    gsap.to(orbRef.current, {
      y: () => lineRef.current.offsetHeight,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });

    nodesRef.current.forEach((node, i) => {
      gsap.fromTo(node, 
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 70%",
            toggleClass: "roadmap-node-active"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-midnight relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative">
        <div className="text-center mb-24 relative z-10">
          <h2 className="heading-section">The <span className="text-cyan-neon">Logic-Flow</span> Trajectory</h2>
          <p className="text-gray-400">Structured execution architecture. We track every module deployed.</p>
        </div>

        <div className="relative">
          {/* Fiber Optic Line Base */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 rounded-full" ref={lineRef}>
            {/* The Traveling Data Packet (Orb) */}
            <div 
              ref={orbRef}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-10 rounded-full bg-cyan-neon shadow-glow-cyan blur-[2px]"
            ></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] shadow-[0_0_15px_rgba(6,182,212,0.6)] bg-transparent"></div>
          </div>

          <div className="space-y-24">
            {roadmapSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={step.id} 
                  ref={el => nodesRef.current[index] = el}
                  className={`relative flex items-center justify-between w-full ${isEven ? 'flex-row-reverse' : ''} group`}
                >
                  <div className="w-5/12"></div>
                  
                  {/* Node Connector */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center relative z-20">
                    <div className="w-12 h-12 rounded-full glass-card-premium border-white/20 flex items-center justify-center transition-all duration-500 node-icon shadow-xl bg-midnight">
                      <Icon className={`w-5 h-5 ${step.color} transition-colors`} />
                    </div>
                  </div>

                  <div className={`w-5/12 ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className="glass-card-premium p-8 rounded-3xl border border-white/5 group-hover:border-white/20 transition-all duration-300 shadow-xl hover:-translate-y-2 bg-black/40">
                      <div className={`text-5xl font-black text-white/5 mb-4 absolute ${isEven ? 'right-4' : 'left-4'} top-4`}>
                        0{step.id}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed font-medium relative z-10">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
