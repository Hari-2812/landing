import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { testimonials } from '../data/content'

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 3500)
    return () => clearInterval(t)
  }, [])

  const active = testimonials[index]

  return (
    <Container className="section-spacing">
      <SectionHeader eyebrow="Testimonials" title="What our learners say" />
      <div className="glass p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid items-center gap-4 sm:grid-cols-[84px_1fr]"
          >
            <img src={active.image} alt={active.name} loading="lazy" className="h-20 w-20 rounded-2xl object-cover" />
            <div>
              <div className="mb-2 text-yellow-300">{'★'.repeat(active.rating)}</div>
              <p className="text-slate-100">“{active.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-blue-200">{active.name}</p>
              <p className="text-xs text-slate-400">{active.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Container>
  )
}
