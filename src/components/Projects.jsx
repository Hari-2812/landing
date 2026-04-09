import { motion } from 'framer-motion';
import projectA from '../assets/project1.jpg';
import projectB from '../assets/project2.jpg';
import projectC from '../assets/project3.jpg';
import projectD from '../assets/project_churn.png';

const list = [
  { title: 'Customer Churn Engine', text: 'Predictive retention system for subscription businesses.', image: projectA },
  { title: 'Revenue Pulse Dashboard', text: 'Executive KPI cockpit for weekly GTM decisions.', image: projectB },
  { title: 'Segmentation Studio', text: 'Behavior-led persona discovery and channel prioritization.', image: projectC },
  { title: 'Risk Forecast Workbench', text: 'Scenario simulations for strategic planning and risk.', image: projectD },
];

function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <p className="title">Projects</p>
        <h2 className="sub">Portfolio showcase with production-style outcomes</h2>
        <div className="grid two">
          {list.map((item, i) => (
            <motion.article key={item.title} className="glass work" whileHover={{ scale: 1.02 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="veil" />
              <div className="meta">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
