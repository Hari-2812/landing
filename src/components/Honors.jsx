import React from 'react';
import BlurImage from './BlurImage';

const awards = [
  { id: 1, title: 'Best EdTech Innovator 2024', img: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=300&q=80' },
  { id: 2, title: 'Top Enterprise Data Curriculum', img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?w=300&q=80' },
  { id: 3, title: 'Outstanding Student ROI', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&q=80' },
  { id: 4, title: 'Best EdTech Innovator 2024', img: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=300&q=80' },
  { id: 5, title: 'Top Enterprise Data Curriculum', img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?w=300&q=80' },
];

export default function Honors() {
  return (
    <section className="py-16 bg-black/90 overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-indigo-pulse/5 pattern-dots pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-6 mb-10 text-center relative z-10">
        <h3 className="text-sm font-black text-gray-500 uppercase tracking-[0.3em]">Recognized Authority</h3>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto z-10">
        {/* Soft edge masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black/90 to-transparent z-20"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black/90 to-transparent z-20"></div>

        <div className="flex w-fit auto-scroll-wrapper select-none">
          {/* We use an arbitrary custom animation mapping for endless scroll */}
          {awards.map((award, index) => (
            <div key={`${award.id}-${index}`} className="w-[280px] shrink-0 mx-4 relative group cursor-pointer rounded-2xl overflow-hidden glass-card-premium border border-white/5 hover:border-cyan-neon/30 transition-colors">
              {/* CSS Keyframe Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20 pointer-events-none transform -skew-x-12"></div>
              
              <div className="h-28 relative">
                <BlurImage src={award.img} alt={award.title} className="opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              </div>
              <div className="p-4 text-center absolute bottom-0 w-full z-10">
                <p className="text-white text-xs font-bold uppercase tracking-wider">{award.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .auto-scroll-wrapper {
          animation: 30s linear 0s infinite normal none running slide-infinite;
        }
        @keyframes slide-infinite {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-280px * 3 - 2rem * 3)); }
        }
        @keyframes shimmer {
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}} />
    </section>
  );
}
