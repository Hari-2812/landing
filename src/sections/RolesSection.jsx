import { motion } from 'framer-motion'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { roles } from '../data/content'

export default function RolesSection() {
  return (
    <Container className="section-spacing">
      <SectionHeader eyebrow="Career Roles" title="Orbiting opportunities in the analytics ecosystem" />
      <div className="relative mx-auto flex h-[28rem] max-w-3xl items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute h-[22rem] w-[22rem] rounded-full border border-blue-300/25"
        >
          {roles.map((role, index) => {
            const angle = (index / roles.length) * Math.PI * 2
            const x = 170 * Math.cos(angle)
            const y = 170 * Math.sin(angle)
            return (
              <motion.div
                key={role}
                className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-slate-900/70 p-2 text-center text-xs font-semibold text-blue-100"
                style={{ transform: `translate(${x}px, ${y}px)` }}
                whileHover={{ scale: 1.08 }}
              >
                {role}
              </motion.div>
            )
          })}
        </motion.div>
        <div className="glass z-20 rounded-full px-8 py-7 text-center shadow-[0_0_40px_rgba(59,130,246,0.25)]">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200">You Become</p>
          <p className="mt-2 text-lg font-bold text-white">AI/Data Professional</p>
        </div>
      </div>
    </Container>
  )
}
