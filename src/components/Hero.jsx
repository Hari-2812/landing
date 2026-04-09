import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket } from 'lucide-react';
import BlurImage from './BlurImage';

gsap.registerPlugin(ScrollTrigger);

const tags = ['Data Analytics', 'Data Engineering', 'Machine Learning', 'Business Intelligence'];

export default function Hero() {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(leftPanelRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.to(rightPanelRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Sound effect on button hover
    const btn = document.querySelector('.hero-btn');
    const playShimmer = () => {
      // Very soft synthesizer shimmer audio generated natively 
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    };
    if(btn) btn.addEventListener('mouseenter', playShimmer);
    return () => { if(btn) btn.removeEventListener('mouseenter', playShimmer); }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex bg-black">
      <div className="relative w-full lg:w-1/2 flex items-center justify-center pt-32 pb-20 px-8 lg:px-16 lg:pr-24 z-20 bg-gradient-to-br from-midnight to-black overflow-hidden">
        
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--color-indigo-pulse, #6366f1) 1px, transparent 1px), linear-gradient(90deg, var(--color-indigo-pulse, #6366f1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div ref={leftPanelRef} className="relative z-10 w-full max-w-xl left-content-wrapper">
          
          <div className="flex flex-col gap-4 mb-10">
            <div className="glass-card-premium px-5 py-2 rounded-full w-fit border-indigo-pulse/50 shadow-glow-indigo">
              <span className="tag-label text-gray-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-pulse animate-pulse"></span>
                Powered by Analytics Avenue
              </span>
            </div>
            
            <div className="flex items-center gap-3 px-4 py-1.5 opacity-90 w-fit rounded-lg bg-red-500/10 border border-red-500/20">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-red-400 font-bold text-sm tracking-wide">
                Live: 12 people are claiming their roadmap right now!
              </span>
            </div>
          </div>

          <h1 className="heading-hero mb-6">
            Stop Learning Tools. <br />
            <span className="text-gradient-indigo">Start Leading Teams.</span>
          </h1>
          
          <p className="subheading font-medium mb-10 leading-relaxed max-w-lg">
            We don't just teach Data. We build the top 5% of Global Data Experts. Your transformation starts now.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-indigo-pulse/10 border border-indigo-pulse/30 text-indigo-pulse tag-label shadow-glow-indigo hover:bg-indigo-pulse hover:text-white transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>

          <button className="btn-primary hero-btn w-full sm:w-auto mt-2">
            <div className="btn-pulse-glow"></div>
            <div className="btn-inner-gradient"></div>
            <div className="relative z-10 flex items-center justify-center gap-4 text-lg tracking-wider">
              Claim Your Seat (4 Left)
              <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="absolute top-0 inset-x-0 h-[1px] bg-white/40 pointer-events-none"></div>
          </button>
        </div>
      </div>

      <div className="absolute lg:relative w-full h-full lg:w-1/2 flex inset-0 z-10">
        <div className="absolute inset-0 bg-midnight/80 lg:hidden z-10 pointer-events-none"></div>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-midnight to-transparent z-10 hidden lg:block"></div>

        <div className="w-full h-[120%] -top-[10%] relative overflow-hidden" ref={rightPanelRef}>
          <BlurImage 
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop" 
            alt="Industry Veteran Recording Podcast" 
            className="w-full h-full object-cover object-[65%_35%] grayscale-[10%] brightness-[0.8] contrast-125"
          />
          {/* Subtle Blue "Rim Light" Bathe */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-indigo-pulse/20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-midnight/90 lg:to-midnight/30"></div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-indigo-pulse/20 to-transparent mix-blend-color-dodge"></div>
        </div>
      </div>
    </section>
  );
}
