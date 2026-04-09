import { useState } from 'react';
import { motion } from 'framer-motion';
import { CirclePlay } from 'lucide-react';
import projectA from '../assets/project1.jpg';
import projectB from '../assets/project2.jpg';
import projectC from '../assets/project3.jpg';
import projectD from '../assets/project_churn.png';

const modules = [
  { title: 'SQL & Data Logic', text: 'Query design, joins, optimization, and business logic.', image: projectA },
  { title: 'Dashboard Storytelling', text: 'KPI structuring and executive-friendly visual narratives.', image: projectB },
  { title: 'Python for Analytics', text: 'Automation, data wrangling, and reusable analysis scripts.', image: projectC },
  { title: 'AI Workflow Lab', text: 'Prompt-driven analysis and modern AI-assisted operations.', image: projectD },
];

function Curriculum() {
  const [active, setActive] = useState(modules[0]);

  return (
    <section className="sec" id="curriculum">
      <div className="wrap">
        <p className="title">Curriculum</p>
        <h2 className="sub">Interactive learning path with expandable module cards</h2>

        <div className="railx">
          {modules.map((item) => (
            <motion.button key={item.title} className={`glass tile btn ${active.title === item.title ? 'on' : ''}`} whileHover={{ y: -6 }} onClick={() => setActive(item)}>
              <div className="shot">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="play"><CirclePlay size={20} /></span>
              </div>
              <p>{item.title}</p>
            </motion.button>
          ))}
        </div>

        <motion.article key={active.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass detail">
          <h3>{active.title}</h3>
          <p>{active.text}</p>
        </motion.article>
      </div>
    </section>
  );
}

export default Curriculum;
