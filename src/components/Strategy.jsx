import { motion } from 'framer-motion';
import { Compass, Rocket, FileBadge } from 'lucide-react';

const phases = [
  { title: 'Phase 1 · Foundation', text: 'Master core analytics, SQL, BI, and AI workflow fundamentals.', icon: Compass },
  { title: 'Phase 2 · Build', text: 'Execute real projects mapped to industry use cases and portfolio impact.', icon: Rocket },
  { title: 'Phase 3 · Transition', text: 'Follow interview systems, resume optimization, and hiring strategy loops.', icon: FileBadge },
];

function Strategy() {
  return (
    <section className="sec" id="strategy">
      <div className="wrap">
        <p className="title">Success Strategy</p>
        <h2 className="sub">Roadmap for learning, execution, and placement</h2>
        <div className="road">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.article key={phase.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass card">
                <div className="row">
                  <Icon size={20} />
                  <strong>0{i + 1}</strong>
                </div>
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
