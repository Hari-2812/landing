import { motion } from 'framer-motion'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { projects } from '../data/content'

export default function ProjectsSection() {
  return (
    <Container className="section-spacing">
      <SectionHeader eyebrow="Projects" title="Proof-of-work projects hiring teams actually care about" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <motion.article key={project.title} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-2xl border border-white/10">
            <img loading="lazy" src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute inset-0 flex translate-y-6 flex-col justify-end p-5 opacity-90 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-200">{project.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  )
}
