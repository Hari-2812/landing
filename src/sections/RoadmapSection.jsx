import { motion } from 'framer-motion'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { roadmap } from '../data/content'

export default function RoadmapSection() {
  return (
    <Container className="section-spacing">
      <SectionHeader
        eyebrow="Success Strategy"
        title="GPS-style guided roadmap from beginner to hired"
        subtitle="Follow the animated path while each milestone reveals on scroll."
      />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/45 p-6 sm:p-8">
        <div className="absolute left-5 top-10 h-[calc(100%-5rem)] w-[2px] bg-gradient-to-b from-blue-400 via-cyan-300 to-purple-500 sm:left-9" />
        <motion.div
          className="absolute left-[14px] top-10 h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_24px_#22d3ee] sm:left-[30px]"
          animate={{ y: [0, 480, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="space-y-6">
          {roadmap.map((item, index) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="glass ml-6 p-5 sm:ml-14"
            >
              <p className="text-xs font-semibold tracking-wider text-blue-200">STEP {item.step}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Container>
  )
}
