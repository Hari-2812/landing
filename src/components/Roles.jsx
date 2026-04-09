import { motion } from 'framer-motion';
import { BarChart3, Database, LineChart, Brain, Code2, Briefcase } from 'lucide-react';

const roles = [
  { name: 'Data Analyst', icon: BarChart3 },
  { name: 'Data Engineer', icon: Database },
  { name: 'Data Scientist', icon: Brain },
  { name: 'Visualization Engineer', icon: LineChart },
  { name: 'Python Developer', icon: Code2 },
  { name: 'Data Consultant', icon: Briefcase },
];

function Roles() {
  return (
    <section className="sec" id="roles">
      <div className="wrap center">
        <p className="title">Roles to Target</p>
        <h2 className="sub">Interactive orbit UI for role-based career tracks</h2>
        <div className="orb">
          <motion.div className="orbit a" animate={{ rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="orbit b" animate={{ rotate: -360 }} transition={{ duration: 36, repeat: Infinity, ease: 'linear' }} />
          <div className="glass core2">Role Hub</div>
          {roles.map((role, i) => {
            const a = (i / roles.length) * Math.PI * 2;
            const x = Math.cos(a) * 170;
            const y = Math.sin(a) * 170;
            const Icon = role.icon;
            return (
              <motion.div key={role.name} className="node" style={{ transform: `translate(${x}px, ${y}px)` }} whileHover={{ scale: 1.1 }} animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.1 }}>
                <div className="glass tiny"><Icon size={15} /><span>{role.name}</span></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Roles;
