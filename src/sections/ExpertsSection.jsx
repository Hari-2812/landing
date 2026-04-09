import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const experts = [
  { name: 'Riya Sharma', role: 'Head of Data Science', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80' },
  { name: 'David Kim', role: 'MLOps Architect', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
  { name: 'Aisha Khan', role: 'Analytics Lead', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80' },
]

export default function ExpertsSection() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Mentors" title="Learn directly from active industry experts" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experts.map((expert) => (
          <motion.article
            key={expert.name}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card overflow-hidden"
          >
            <img loading="lazy" src={expert.img} alt={expert.name} className="h-64 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white">{expert.name}</h3>
              <p className="text-slate-300">{expert.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
