import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const videos = ['dQw4w9WgXcQ', 'ua-CiDNNj30', 'gQddtTdmG_8', 'YQHsXMglC9A']

export default function CurriculumSection() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Curriculum" title="Hands-on modules and workshop recordings" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((id) => (
          <motion.a
            key={id}
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            className="group glass-card overflow-hidden"
          >
            <img
              loading="lazy"
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt="Curriculum video"
              className="h-40 w-full object-cover transition duration-300 group-hover:scale-110"
            />
            <div className="p-4">
              <p className="text-sm font-medium text-slate-100">Curriculum Walkthrough</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
