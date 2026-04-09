import { motion } from 'framer-motion';
import { Compass, Rocket, FileBadge, ArrowRight } from 'lucide-react';

const phases = [
  { title: 'Learn', text: 'Master analytics foundations and AI workflows.', icon: Compass },
  { title: 'Practice', text: 'Apply concepts in guided implementation labs.', icon: Rocket },
  { title: 'Projects', text: 'Build portfolio assets for role-based positioning.', icon: FileBadge },
  { title: 'Mentorship', text: 'Get weekly expert reviews and optimization inputs.', icon: Compass },
  { title: 'Placement', text: 'Execute interviews with structured career support.', icon: Rocket },
];

function Strategy() {
  return (
    <section className="sec" id="strategy">
      <div className="wrap">
        <p className="title">Success Strategy</p>
        <h2 className="sub">Flowchart model from learning to placement</h2>

        <div className="flowg">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.article key={phase.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass card">
                <Icon size={18} />
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
                {i < phases.length - 1 && <ArrowRight size={16} className="arrow" />}
              </motion.article>
            );
          })}
        </div>

        <div className="model">
          <span>Beginner</span><ArrowRight size={14} /><span>Skilled</span><ArrowRight size={14} /><span>Expert</span><ArrowRight size={14} /><span>Placed</span>
        </div>
      </div>
    </section>
  );
}

export default Strategy;
