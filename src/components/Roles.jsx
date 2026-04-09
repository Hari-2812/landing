import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Database, LineChart, Brain, Code2, Briefcase } from 'lucide-react';

const roles = [
  { name: 'Data Analyst', icon: BarChart3, text: 'Translate business questions into decision-ready insights.' },
  { name: 'Data Engineer', icon: Database, text: 'Build robust pipelines and scalable data foundations.' },
  { name: 'Data Scientist', icon: Brain, text: 'Design predictive models for product and growth decisions.' },
  { name: 'Visualization Engineer', icon: LineChart, text: 'Create interactive dashboards for executive action.' },
  { name: 'Python Developer', icon: Code2, text: 'Automate analytics workflows with production-ready code.' },
  { name: 'Data Consultant', icon: Briefcase, text: 'Solve strategic data problems across business functions.' },
];

function Roles() {
  const [active, setActive] = useState(roles[0]);
  const [pause, setPause] = useState(false);

  return (
    <section className="sec" id="roles">
      <div className="wrap center">
        <p className="title">Roles to Target</p>
        <h2 className="sub">Interactive career universe with role-first guidance</h2>

        <div className="orb">
          <motion.div className="orbit a" animate={{ rotate: pause ? 0 : 360 }} transition={{ duration: 34, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="orbit b" animate={{ rotate: pause ? 0 : -360 }} transition={{ duration: 38, repeat: Infinity, ease: 'linear' }} />
          <div className="glass core2">You</div>

          {roles.map((role, i) => {
            const a = (i / roles.length) * Math.PI * 2;
            const x = Math.cos(a) * 170;
            const y = Math.sin(a) * 170;
            const Icon = role.icon;
            const on = active.name === role.name;

            return (
              <motion.button
                key={role.name}
                className={`node btn ${on ? 'on' : ''}`}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                onClick={() => setActive(role)}
              >
                <span className="glass tiny"><Icon size={15} /><span>{role.name}</span></span>
              </motion.button>
            );
          })}
        </div>

        <motion.article key={active.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="glass detail">
          <h3>{active.name}</h3>
          <p>{active.text}</p>
        </motion.article>
      </div>
    </section>
  );
}

export default Roles;
