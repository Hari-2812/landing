import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPinned, MessageCircle, Wallet, FolderOpen, Briefcase } from 'lucide-react';

const flow = [
  { t: 'Attend session', i: CalendarDays },
  { t: 'Block seat', i: MapPinned },
  { t: 'Consultation', i: MessageCircle },
  { t: 'Payment', i: Wallet },
  { t: 'Access materials', i: FolderOpen },
  { t: 'Projects', i: Briefcase },
];

const step2 = ['01 Interview', '02 Projects', '03 Resume', '04 Mock', '05 Placement'];

function Enroll() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % flow.length), 1700);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sec" id="enroll">
      <div className="wrap">
        <p className="title">Enrollment Process</p>
        <h2 className="sub">Curved roadmap with sequential neon progress</h2>

        <div className="path">
          <svg className="svg" viewBox="0 0 1200 220" aria-hidden>
            <motion.path
              d="M20,180 C140,30 280,30 400,180 C520,30 680,30 800,180 C920,30 1060,30 1180,180"
              fill="none"
              stroke="rgba(0,245,255,0.8)"
              strokeWidth="3"
              strokeDasharray="8 10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6 }}
            />
          </svg>

          <div className="grid three">
            {flow.map((s, i) => {
              const Icon = s.i;
              const on = active === i;
              return (
                <motion.article key={s.t} className={`glass step ${on ? 'on' : ''}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <Icon size={18} />
                  <h3>{s.t}</h3>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="glass flow">
          <p className="title">Step 2 Timeline</p>
          <div className="vline">
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
