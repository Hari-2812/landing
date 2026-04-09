import { motion } from 'framer-motion';
import { Compass, Rocket } from 'lucide-react';

const phases = [
  {
    title: 'Phase 1 · Foundation',
    text: 'Master fundamentals, analytics thinking, and modern AI tool workflows.',
    icon: Compass,
  },
  {
    title: 'Phase 2 · Execution',
    text: 'Build industry projects and follow a focused transition roadmap.',
    icon: Rocket,
  },
];

function Strategy() {
  return (
    <section className="sec" id="strategy">
      <div className="wrap">
        <p className="title">Success Strategy</p>
        <h2 className="sub">A timeline designed for conversion and career outcomes</h2>
        <div className="grid two">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.article key={phase.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass card">
                <Icon size={20} />
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Strategy;
