import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { achievements } from '../data/content'

export default function AchievementsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % achievements.length), 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <Container className="section-spacing pb-24">
      <SectionHeader eyebrow="Honors & Achievements" title="Community wins, placements, and milestone moments" />
      <div className="relative h-80 overflow-hidden rounded-3xl border border-white/10">
        {achievements.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            loading="lazy"
            alt="Achievement"
            className="absolute inset-0 h-full w-full object-cover"
            animate={{ opacity: index === active ? 1 : 0, scale: index === active ? 1.05 : 1 }}
            transition={{ duration: 0.7 }}
          />
        ))}
      </div>
    </Container>
  )
}
