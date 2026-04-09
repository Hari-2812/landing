import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const steps = ['Foundations', 'Visualization & SQL', 'Machine Learning', 'GenAI Applications', 'Capstone + Placement']

export default function RoadmapSection() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Roadmap" title="A guided path from beginner to professional" />
      <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 p-8">
        <div className="absolute left-10 top-10 h-[calc(100%-5rem)] w-1 rounded bg-gradient-to-b from-blue-400 to-purple-500" />
        <motion.div
          className="absolute left-[34px] h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]"
          animate={{ y: [0, 360, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.12 }}
              className="ml-12 glass-card p-5"
            >
              <p className="text-sm font-semibold text-blue-200">Step {idx + 1}</p>
              <h3 className="text-xl font-semibold text-white">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
