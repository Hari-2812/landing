import { motion } from 'framer-motion'

export default function StatCard({ value, label }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="glass-card p-6 shadow-glow"
    >
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </motion.div>
  )
}
