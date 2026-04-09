import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Users, Target, Rocket, FileBadge } from 'lucide-react';

const items = [
  { title: 'Career Focus', icon: Target },
  { title: 'Industry Projects', icon: Briefcase },
  { title: 'Mentor Network', icon: Users },
  { title: 'AI Edge', icon: Sparkles },
  { title: 'Placement Prep', icon: FileBadge },
  { title: 'Fast Growth', icon: Rocket },
];

function Benefits() {
  return (
    <section className="sec" id="benefits">
      <div className="wrap">
        <p className="title">Benefits</p>
        <h2 className="sub">Premium support built for high conversion outcomes</h2>
        <div className="grid three">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} className="glass card" whileHover={{ y: -6 }} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Icon size={20} />
                <h3>{item.title}</h3>
                <p>Designed to improve consistency, confidence, and interview conversion.</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
