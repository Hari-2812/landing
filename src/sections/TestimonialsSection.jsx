import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const testimonials = [
  { name: 'Ankit', text: 'I moved from support to Data Analyst in 5 months with a strong portfolio.' },
  { name: 'Sara', text: 'Mentor feedback loops made learning practical and confidence boosting.' },
  { name: 'Nikhil', text: 'The roadmap and projects aligned perfectly with interview expectations.' },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Testimonials" title="Learner stories from our community" />
      <div className="glass-card p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-lg text-slate-200">“{testimonials[index].text}”</p>
            <p className="mt-4 text-sm font-semibold text-blue-200">— {testimonials[index].name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
