import { motion } from 'framer-motion';
import projectA from '../assets/project1.jpg';
import projectB from '../assets/project2.jpg';
import projectC from '../assets/project3.jpg';
import projectD from '../assets/project_churn.png';

const list = [
  { title: 'Customer Churn Engine', image: projectA },
  { title: 'Revenue Pulse Dashboard', image: projectB },
  { title: 'Segmentation Studio', image: projectC },
  { title: 'Risk Forecast Workbench', image: projectD },
];

function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <p className="title">Projects</p>
        <h2 className="sub">Portfolio-ready outputs that impress recruiters</h2>
        <div className="grid two">
          {list.map((item, i) => (
            <motion.article key={item.title} className="glass work" whileHover={{ scale: 1.02 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="shade" />
              <h3>{item.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
