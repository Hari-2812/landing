import { motion } from 'framer-motion'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { enrollmentSteps } from '../data/content'

export default function EnrollmentSection() {
  return (
    <section className="section-spacing bg-slate-950/80">
      <Container>
        <SectionHeader eyebrow="Enrollment Process" title="Neon guided onboarding in 4 simple steps" />
        <div className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-slate-950 p-6 shadow-[0_0_50px_rgba(34,211,238,0.16)]">
          <div className="absolute left-8 right-8 top-1/2 hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 md:block" />
          <div className="grid gap-4 md:grid-cols-4">
            {enrollmentSteps.map((step, index) => (
              <motion.article
                key={step}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl border border-cyan-300/15 bg-cyan-400/5 p-5"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-200">0{index + 1}</span>
                <p className="mt-3 text-sm font-semibold text-white">{step}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
