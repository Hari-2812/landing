import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  { text: "I was stuck building basic Python scripts. Analytics Avenue plunged me into real-world AWS pipelines. 3 months later, I multiplied my salary at a Fintech startup.", author: "James T.", role: "Data Engineer @ FinTech" },
  { text: "The mentors don't just teach syntax; they teach system design. The way they reconstructed my portfolio directly landed me 4 interviews in two weeks.", author: "Elena R.", role: "BI Analyst" },
  { text: "It's the closest thing to actually working at a FAANG company. The rigor, the codebase, and the peer reviews are absolutely identical.", author: "David M.", role: "Machine Learning Solutions" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-midnight relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 relative z-10">
          <h2 className="heading-section">The <span className="text-indigo-pulse">Alumni Success</span> Wall</h2>
          <p className="text-gray-400">Raw, unfiltered transformations from our latest cohorts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card-premium p-10 rounded-3xl border border-white/5 relative hover:-translate-y-2 transition-transform duration-300">
              <Quote className="w-10 h-10 text-indigo-pulse/20 absolute top-8 right-8" />
              <p className="text-gray-300 mb-8 italic relative z-10 leading-relaxed text-lg">"{t.text}"</p>
              <div>
                <p className="text-white font-bold tracking-wide">{t.author}</p>
                <p className="text-cyan-neon text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
