import { motion } from 'framer-motion'
import Container from '../components/layout/Container'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-12 pt-10 sm:pt-16">
      <motion.div
        className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              AI + Data Analytics Career Accelerator
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Become a job-ready data professional with premium mentorship
            </h1>
            <p className="mt-5 max-w-xl text-slate-300 sm:text-lg">
              Master analytics, machine learning, and GenAI through structured roadmaps, real projects, and expert-led reviews.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-[0_0_35px_rgba(99,102,241,0.45)] transition hover:scale-105">
                Join Next Cohort
              </button>
              <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
                Download Brochure
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass grid-overlay overflow-hidden p-3"
          >
            <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/aircAruvnKk"
                loading="lazy"
                title="AI program intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
