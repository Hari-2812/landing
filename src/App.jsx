import { Suspense, lazy } from 'react'
import HeroSection from './sections/HeroSection'
import OverviewSection from './sections/OverviewSection'
import ExpertsSection from './sections/ExpertsSection'
import RolesSection from './sections/RolesSection'

const RoadmapSection = lazy(() => import('./sections/RoadmapSection'))
const CurriculumSection = lazy(() => import('./sections/CurriculumSection'))
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'))
const BenefitsSection = lazy(() => import('./sections/BenefitsSection'))
const EnrollmentSection = lazy(() => import('./sections/EnrollmentSection'))
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'))
const AchievementsSection = lazy(() => import('./sections/AchievementsSection'))

const lazySections = [
  RoadmapSection,
  CurriculumSection,
  ProjectsSection,
  BenefitsSection,
  EnrollmentSection,
  TestimonialsSection,
  AchievementsSection,
]

function LoadingSection() {
  return <div className="section-shell animate-pulse text-center text-sm text-slate-400">Loading section...</div>
}

export default function App() {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <ExpertsSection />
      <RolesSection />

      <Suspense fallback={<LoadingSection />}>
        {lazySections.map((Section, idx) => (
          <Section key={idx} />
        ))}
      </Suspense>
    </div>
  )
}
