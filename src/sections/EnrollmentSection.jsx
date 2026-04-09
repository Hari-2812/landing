import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const flow = ['Book Counselling', 'Take Skill Assessment', 'Choose Cohort', 'Start Training']

export default function EnrollmentSection() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Enrollment Process" title="Simple onboarding with neon dark aesthetics" />
      <div className="rounded-3xl border border-cyan-500/30 bg-slate-950 p-6 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
        <div className="grid gap-4 md:grid-cols-4">
          {flow.map((item, idx) => (
            <motion.div
              key={item}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl border border-cyan-200/20 bg-cyan-500/5 p-4"
            >
              <span className="text-xs text-cyan-200">0{idx + 1}</span>
              <p className="mt-2 font-semibold text-white">{item}</p>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-cyan-300"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
