import { motion } from 'framer-motion'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { curriculumVideos } from '../data/content'

export default function CurriculumSection() {
  return (
    <Container className="section-spacing">
      <SectionHeader eyebrow="Curriculum" title="Workshop-driven learning modules" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {curriculumVideos.map((id) => (
          <motion.a
            key={id}
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
            className="group glass overflow-hidden"
          >
            <div className="relative">
              <img
                loading="lazy"
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt="Curriculum video"
                className="h-44 w-full object-cover transition duration-300 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full bg-white/80 px-3 py-2 text-sm font-bold text-slate-900">▶</span>
              </span>
            </div>
            <div className="p-4 text-sm font-medium text-white">Module Walkthrough</div>
          </motion.a>
        ))}
      </div>
    </Container>
  )
}
