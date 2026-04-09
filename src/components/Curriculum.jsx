import { motion } from 'framer-motion';
import { CirclePlay } from 'lucide-react';
import projectA from '../assets/project1.jpg';
import projectB from '../assets/project2.jpg';
import projectC from '../assets/project3.jpg';
import projectD from '../assets/project_churn.png';

const modules = [
  { title: 'SQL & Data Logic', image: projectA },
  { title: 'Dashboard Storytelling', image: projectB },
  { title: 'Python for Analytics', image: projectC },
  { title: 'AI Workflow Lab', image: projectD },
];

function Curriculum() {
  return (
    <section className="sec" id="curriculum">
      <div className="wrap">
        <p className="title">Curriculum</p>
        <h2 className="sub">Thumbnail-first modules for fast visual scanning</h2>
        <div className="grid four">
          {modules.map((item, i) => (
            <motion.article key={item.title} className="glass tile" whileHover={{ y: -6 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <div className="shot">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="play"><CirclePlay size={20} /></span>
              </div>
              <p>{item.title}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
