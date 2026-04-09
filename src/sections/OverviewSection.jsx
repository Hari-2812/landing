import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import StatCard from '../components/StatCard'

export default function OverviewSection() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Program Overview"
        title="Industry-aligned training with outcomes that matter"
        subtitle="A blend of mentor sessions, hands-on labs, and capstone implementation from real datasets."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          whileHover={{ y: -6 }}
          className="glass-card overflow-hidden lg:col-span-2"
        >
          <div className="aspect-video">
            <iframe
              title="Program introduction"
              className="h-full w-full"
              src="https://www.youtube.com/embed/aircAruvnKk"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
        <div className="grid gap-4">
          <StatCard value="1000+" label="Students trained across AI & Analytics tracks" />
          <StatCard value="120+" label="Portfolio-grade projects and case studies" />
          <StatCard value="94%" label="Learners report confidence growth within 90 days" />
        </div>
      </div>
    </section>
  )
}
