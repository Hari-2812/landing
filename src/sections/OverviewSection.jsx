import { motion } from 'framer-motion'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { stats } from '../data/content'

export default function OverviewSection() {
  return (
    <Container className="section-spacing">
      <SectionHeader
        eyebrow="Program Overview"
        title="Everything you need from fundamentals to placements"
        subtitle="Intensive skill-building with implementation depth, guided execution, and interview outcomes."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {stats.map((item, idx) => (
          <motion.article
            key={item.label}
            className="glass p-6"
            whileHover={{ y: -6, scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.08 }}
          >
            <p className="text-3xl font-extrabold text-white">{item.value}</p>
            <p className="mt-2 text-sm text-slate-300">{item.label}</p>
          </motion.article>
        ))}
      </div>
    </Container>
  )
}
