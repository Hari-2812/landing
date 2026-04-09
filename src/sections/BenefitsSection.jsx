import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const benefits = [
  { icon: '⚡', title: 'Fast-track Learning', text: 'Optimized learning path with weekly milestones.' },
  { icon: '🧠', title: 'Mentor Feedback', text: 'Direct project feedback from practitioners.' },
  { icon: '📈', title: 'Career Support', text: 'Mock interviews and profile optimization.' },
  { icon: '🤝', title: 'Peer Community', text: 'Active cohort channels for collaboration.' },
]

export default function BenefitsSection() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Benefits" title="Everything you need to become industry-ready" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item) => (
          <motion.div key={item.title} whileHover={{ scale: 1.03 }} className="glass-card p-5">
            <p className="text-3xl">{item.icon}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
