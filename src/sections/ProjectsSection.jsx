import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const projects = ['Customer Churn Intelligence', 'Sales Forecasting Engine', 'GenAI Resume Reviewer', 'Marketing Attribution Lab']

export default function ProjectsSection() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Projects" title="Build portfolio-ready projects recruiters value" />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article key={project} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-2xl">
            <img
              loading="lazy"
              src={`https://images.unsplash.com/photo-15${17755439189 + idx}-d553b38f2f12?auto=format&fit=crop&w=900&q=80`}
              alt={project}
              className="h-56 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-950/10 opacity-80" />
            <div className="absolute inset-0 flex items-end p-5">
              <h3 className="text-xl font-semibold text-white">{project}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
