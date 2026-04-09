import { motion } from 'framer-motion'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { experts } from '../data/content'

const iconMap = {
  LinkedIn: 'in',
  GitHub: 'gh',
  X: 'x',
  Dribbble: 'dr',
  Behance: 'be',
}

export default function ExpertsSection() {
  return (
    <Container className="section-spacing">
      <SectionHeader eyebrow="Mentors" title="Learn from practitioners solving real business problems" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experts.map((mentor) => (
          <motion.article
            key={mentor.name}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group glass overflow-hidden"
          >
            <div className="relative h-72 overflow-hidden">
              <img src={mentor.image} alt={mentor.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 transition group-hover:opacity-100">
                {mentor.socials.map((name) => (
                  <span key={name} className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs font-semibold text-white">
                    {iconMap[name]}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
              <p className="text-sm text-slate-300">{mentor.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  )
}
