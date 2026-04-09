import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const flow = ['Order placed', 'Processing', 'Learning', 'Projects', 'Placement'];
const step2 = ['01 Interview', '02 Projects', '03 Resume', '04 Mock', '05 Placement'];

function Enroll() {
  const [active, setActive] = useState(0);
  const progress = useMemo(() => (active / (flow.length - 1)) * 100, [active]);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % flow.length), 1700);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sec" id="enroll">
      <div className="wrap">
        <p className="title">Enrollment Process</p>
        <h2 className="sub">Tracking-style journey with live progress simulation</h2>

        <div className="glass trackr">
          <div className="bar">
            <motion.div className="fill" animate={{ width: `${progress}%` }} transition={{ duration: 0.6 }} />
            <motion.div className="dotm" animate={{ left: `${progress}%` }} transition={{ duration: 0.6 }} />
          </div>
          <div className="grid five">
            {flow.map((s, i) => (
              <motion.article key={s} className={`step ${i <= active ? 'on' : ''}`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <CheckCircle2 size={16} />
                <h3>{s}</h3>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="glass flow">
          <p className="title">Step 2 Timeline</p>
          <div className="vline c">
            {step2.map((s, i) => (
              <motion.div key={s} className="row2" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <span className="dot" />
                <p>{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enroll;
