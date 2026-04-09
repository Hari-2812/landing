import { motion } from 'framer-motion'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import Icon from '../components/ui/Icon'
import { benefits } from '../data/content'

export default function BenefitsSection() {
  return (
    <Container className="section-spacing">
      <SectionHeader eyebrow="Key Benefits" title="Built for serious upskilling and career momentum" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <motion.article key={benefit.title} whileHover={{ y: -8 }} className="glass p-5">
            <div className="inline-flex rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 text-blue-200">
              <Icon name={benefit.icon} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{benefit.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{benefit.description}</p>
          </motion.article>
        ))}
      </div>
    </Container>
  )
}
