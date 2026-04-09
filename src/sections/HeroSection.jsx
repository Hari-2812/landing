import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-mesh">
      <motion.div
        className="pointer-events-none absolute -left-16 top-12 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl"
        animate={{ y: [-12, 20, -12] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl"
        animate={{ y: [20, -15, 20] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            AI + Analytics Career Track
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Build Job-Ready AI & Data Analytics Skills With Mentors
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-200">
            Live classes, guided projects, portfolio reviews, and placement support to accelerate your transition into top data roles.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-105">
              Start Learning
            </button>
            <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Download Curriculum
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card overflow-hidden p-3"
        >
          <div className="aspect-video overflow-hidden rounded-xl">
            <img
              loading="lazy"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="Analytics classroom"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
