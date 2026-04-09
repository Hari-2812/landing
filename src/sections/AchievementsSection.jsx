import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const slides = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
]

export default function AchievementsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-shell pb-24">
      <SectionTitle eyebrow="Achievements" title="Career transitions and cohort success moments" />
      <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10">
        {slides.map((img, idx) => (
          <motion.img
            key={img}
            src={img}
            loading="lazy"
            alt="Student achievements"
            className="absolute inset-0 h-full w-full object-cover"
            animate={{ opacity: active === idx ? 1 : 0, scale: active === idx ? 1.08 : 1 }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </div>
    </section>
  )
}
