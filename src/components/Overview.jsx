import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu } from 'lucide-react';

const items = [
  'Structured path from foundations to advanced AI workflows',
  'Live mentor support and weekly implementation reviews',
  'Career acceleration with role-aligned project outcomes',
];

const sectors = ['SaaS', 'Finance', 'Healthcare', 'Retail', 'Product', 'Consulting'];
const goals = [
  { n: 12000, s: '+', l: 'Learners Trained' },
  { n: 2400, s: '+', l: 'Placements Guided' },
  { n: 450, s: '+', l: 'Projects Built' },
  { n: 94, s: '%', l: 'Interview Success' },
];

function Overview() {
  const [stats, setStats] = useState(goals.map(() => 0));

  useEffect(() => {
    const start = performance.now();
    let frame = 0;

    const run = (time) => {
      const p = Math.min((time - start) / 1500, 1);
      setStats(goals.map((g) => Math.floor(g.n * p)));
      if (p < 1) frame = requestAnimationFrame(run);
    };

    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="sec" id="overview">
      <div className="wrap grid two">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass pad">
          <p className="title">Overview</p>
          <h2 className="sub">A premium learning system built for real outcomes</h2>
          <p className="copy">Move from concept to confidence with guided modules, hands-on projects, and clear hiring milestones.</p>
          <div className="list">
            {items.map((item) => (
              <p key={item} className="item"><CheckCircle2 size={16} />{item}</p>
            ))}
          </div>
          <div className="grid two stat">
            {goals.map((g, i) => (
              <article key={g.l} className="glass mini">
                <h3>{stats[i]}{g.s}</h3>
                <p>{g.l}</p>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass pad">
          <div className="ring">
            <motion.div className="core" animate={{ rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}>
              <Cpu size={28} />
            </motion.div>
            <motion.div className="sectors" animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
              {sectors.map((label, i) => {
                const a = (i / sectors.length) * Math.PI * 2;
                const x = Math.cos(a) * 110;
                const y = Math.sin(a) * 110;
                return <span key={label} className="sector" style={{ transform: `translate(${x}px, ${y}px)` }}>{label}</span>;
              })}
            </motion.div>
          </div>
          <p className="title">AI Opportunities</p>
          <p className="copy">Rotating circular diagram of target industries with interactive sector highlights.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Overview;
