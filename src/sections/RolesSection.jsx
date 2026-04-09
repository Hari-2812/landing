import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const roles = ['Data Analyst', 'BI Engineer', 'ML Engineer', 'AI Product Analyst', 'Analytics Consultant', 'Growth Analyst']

export default function RolesSection() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Career Paths" title="Train for high-demand roles" />
      <div className="relative mx-auto flex h-[26rem] max-w-2xl items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute h-80 w-80 rounded-full border border-blue-300/30"
        >
          {roles.map((role, index) => {
            const angle = (index / roles.length) * Math.PI * 2
            const x = 145 * Math.cos(angle)
            const y = 145 * Math.sin(angle)
            return (
              <div
                key={role}
                className="absolute left-1/2 top-1/2 w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/20 bg-slate-900/70 p-2 text-center text-xs font-semibold text-blue-100"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {role}
              </div>
            )
          })}
        </motion.div>
        <div className="glass-card z-10 rounded-full px-8 py-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-300">You become</p>
          <p className="mt-2 text-xl font-bold text-white">AI & Data Professional</p>
        </div>
      </div>
    </section>
  )
}
