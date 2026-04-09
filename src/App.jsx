import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  CirclePlay,
  Clock3,
  Compass,
  CreditCard,
  FileBadge,
  Layers,
  MapPinned,
  Sparkles,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

import heroImage from './assets/hero.png';
import heroBackground from './assets/hero_bg.png';
import expertA from './assets/data_analyst.png';
import expertB from './assets/bi_engineer.png';
import projectA from './assets/project1.jpg';
import projectB from './assets/project2.jpg';
import projectC from './assets/project3.jpg';
import honorA from './assets/project_sales.png';
import honorB from './assets/mechanism.png';

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const sectionFrame = 'mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:py-28';
const glassCard =
  'rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(15,23,42,0.45)] backdrop-blur-xl';

const experts = [
  {
    name: 'Sakshi Mehta',
    role: 'Senior Data Scientist',
    credibility: 'Built and scaled ML pipelines for 3 high-growth SaaS products.',
    image: expertA,
  },
  {
    name: 'Arjun Pillai',
    role: 'Lead BI Consultant',
    credibility: 'Advised enterprise teams on KPI architecture and BI adoption.',
    image: expertB,
  },
  {
    name: 'Nikita Rao',
    role: 'AI Product Strategist',
    credibility: 'Designed analytics-led product strategy for global digital brands.',
    image: expertA,
  },
  {
    name: 'Rahul Nair',
    role: 'Analytics Engineering Mentor',
    credibility: 'Hands-on mentor with real-world dbt and data modeling expertise.',
    image: expertB,
  },
];

const strategyPhases = [
  {
    title: 'Phase 01 · Build Core Foundations',
    points: [
      'Structured learning from fundamentals to advanced AI applications',
      'Hands-on projects aligned with real industry use cases',
    ],
  },
  {
    title: 'Phase 02 · Execute Career Transition',
    points: [
      'Focused career transition roadmap',
      'Weekly mentor checkpoints and interview readiness drills',
    ],
  },
];

const batches = [
  { date: 'April 20, 2026', mode: 'Weekend Track', seats: 'Limited seats available' },
  { date: 'April 27, 2026', mode: 'Weekday Evening', seats: 'Limited seats available' },
  { date: 'May 04, 2026', mode: 'Fast-Track Cohort', seats: 'Limited seats available' },
];

const companyLogos = [projectA, projectB, projectC, honorA, honorB, projectA, projectB, projectC];
const honors = [honorA, honorB, projectA, projectB, projectC, honorA, honorB];

const roadmapSteps = [
  { title: 'Attend Session', icon: CalendarDays },
  { title: 'Block Seat', icon: MapPinned },
  { title: 'Complete Payment', icon: CreditCard },
  { title: 'Access Materials', icon: Layers },
  { title: 'Work on Projects', icon: Briefcase },
  { title: 'Placement Preparation', icon: FileBadge },
];

function SectionHeader({ badge, title, subtitle, center = false }) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
        <Sparkles className="h-3.5 w-3.5" />
        {badge}
      </div>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-pretty text-base leading-relaxed text-slate-300 md:text-lg">{subtitle}</p>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(124,58,237,0.24),transparent_40%)]" />
      <img src={heroBackground} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20" />

      <div className={`${sectionFrame} relative grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]`}>
        <motion.div variants={revealUp} initial="hidden" animate="visible" className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
            Premium Analytics Bootcamp
          </div>

          <div className="rounded-3xl border border-white/15 bg-[#0b1227b0] p-7 shadow-[0_25px_70px_rgba(14,22,50,0.55)] backdrop-blur-2xl md:p-8">
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-white md:text-6xl">
              Build a
              <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-violet-400 bg-clip-text text-transparent"> high-impact analytics career</span>
              {' '}with modern, project-first training.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
              Learn with expert mentors, real business projects, and a proven roadmap designed for fast career outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.48)] transition hover:scale-[1.03] hover:shadow-[0_0_44px_rgba(56,189,248,0.68)]">
                Enroll Now
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15">
                <CirclePlay className="h-4 w-4 text-sky-300" />
                Watch Preview
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className={`relative overflow-hidden ${glassCard} p-3`}
          >
            <img src={heroImage} alt="Program hero" loading="eager" className="h-[520px] w-full rounded-2xl object-cover object-[65%_center]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020617d9] via-[#02061770] to-transparent" />
          </motion.div>

          <motion.div
            animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 bottom-8 rounded-2xl border border-sky-200/25 bg-[#0f172ad0] p-4 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-widest text-sky-300">Avg Salary Jump</p>
            <p className="text-2xl font-semibold text-white">+142%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ExpertsSection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Our Data Experts"
        title="Mentors who combine deep expertise with execution"
        subtitle="Industry experts with real-world project experience guiding your learning journey."
        center
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {experts.map((expert, index) => (
          <motion.article
            key={`${expert.name}-${index}`}
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`${glassCard} group overflow-hidden`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={expert.image} alt={expert.name} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-lg font-semibold text-white">{expert.name}</h3>
              <p className="text-sm text-sky-200">{expert.role}</p>
              <p className="text-sm leading-relaxed text-slate-300">{expert.credibility}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function SuccessStrategySection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Our Success Strategy"
        title="A structured system that turns learners into professionals"
        subtitle="Clear phase-wise execution with project depth, mentor accountability, and career milestones."
      />

      <div className="relative mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-[#101c3f] to-[#0b132b] p-6 md:p-10">
        <div className="pointer-events-none absolute left-1/2 top-12 hidden h-[calc(100%-96px)] w-px -translate-x-1/2 bg-gradient-to-b from-sky-300/20 via-sky-300/60 to-violet-300/20 lg:block" />
        <div className="grid gap-6 lg:grid-cols-2">
          {strategyPhases.map((phase, index) => (
            <motion.article
              key={phase.title}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.12 }}
              className={`${glassCard} relative p-6 md:p-7`}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-300/35 bg-sky-300/15 text-sky-200">
                {index === 0 ? <Compass className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
              </div>
              <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
              <div className="mt-5 space-y-4">
                {phase.points.map((point) => (
                  <p key={point} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                    {point}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingBatchesSection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Upcoming Batches"
        title="New batches starting soon"
        subtitle="Limited seats available with flexible weekend and weekday options."
        center
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {batches.map((batch, index) => (
          <motion.article
            key={batch.date}
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className={`${glassCard} relative p-6`}
          >
            <span className="absolute right-4 top-4 rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
              Filling Fast
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{batch.mode}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{batch.date}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-300">
              <Clock3 className="h-4 w-4 text-sky-300" />
              {batch.seats}
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,189,248,0.4)] transition hover:scale-[1.02]">
              Reserve Your Seat
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function CompaniesSection() {
  const marqueeLogos = useMemo(() => [...companyLogos, ...companyLogos], []);

  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Hiring Network"
        title="Aspirants work with top companies"
        subtitle="Our learners are placed in leading companies across industries."
        center
      />

      <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-6">
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} className="flex gap-4 px-4">
          {marqueeLogos.map((logo, index) => (
            <motion.div
              key={`${logo}-${index}`}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0b1329] p-3"
            >
              <img src={logo} alt="Company" loading="lazy" className="h-full w-full rounded-lg object-cover opacity-90" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HonorsSection() {
  const loopedHonors = useMemo(() => [...honors, ...honors], []);

  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Honors & Recognition"
        title="Recognized for excellence in data analytics training and innovation"
        subtitle="Trusted outcomes powered by practical mentorship and strong learner success metrics."
        center
      />

      <div className="mt-14 overflow-hidden">
        <motion.div className="flex gap-5" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>
          {loopedHonors.map((item, index) => (
            <motion.article
              key={`${item}-${index}`}
              whileHover={{ scale: 1.03 }}
              className={`${glassCard} w-[280px] shrink-0 overflow-hidden`}
            >
              <img src={item} alt="Recognition" loading="lazy" className="h-48 w-full object-cover transition duration-500 hover:scale-110" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % roadmapSteps.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#060b18] py-24 md:py-30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_42%)]" />
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeader
          badge="Animated Roadmap"
          title="Track every milestone with a live progression path"
          subtitle="Attend Session → Block Seat → Complete Payment → Access Materials → Work on Projects → Placement Preparation"
          center
        />

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-sky-300/20 bg-[#050a18] p-6 shadow-[0_0_70px_rgba(56,189,248,0.1)] md:p-10">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 540" preserveAspectRatio="none" aria-hidden>
            <path
              id="road-path"
              d="M40,450 C170,350 230,140 350,160 C460,180 520,390 650,360 C770,330 840,120 950,150 C1050,180 1110,280 1160,320"
              fill="none"
              stroke="transparent"
            />
            <motion.path
              d="M40,450 C170,350 230,140 350,160 C460,180 520,390 650,360 C770,330 840,120 950,150 C1050,180 1110,280 1160,320"
              fill="none"
              stroke="rgba(56,189,248,0.75)"
              strokeWidth="3"
              strokeDasharray="7 10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
            <motion.circle r="8" fill="#67e8f9" filter="url(#roadGlow)">
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#road-path" />
              </animateMotion>
            </motion.circle>
            <defs>
              <filter id="roadGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {roadmapSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.article
                  key={step.title}
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08 }}
                  className={`rounded-2xl border p-5 backdrop-blur-xl transition ${
                    isActive
                      ? 'border-sky-300/60 bg-sky-400/15 shadow-[0_0_35px_rgba(56,189,248,0.35)]'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Step {index + 1}</span>
                    <Icon className={`h-5 w-5 ${isActive ? 'text-sky-200' : 'text-slate-300'}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1022] py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-slate-300 md:px-10">
        <p>© {new Date().getFullYear()} Analytics Avenue. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="#" className="transition hover:text-white">Privacy</a>
          <a href="#" className="transition hover:text-white">Terms</a>
          <a href="#" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0F172A] text-white selection:bg-sky-300/35 selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0f172acc] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
            <Award className="h-5 w-5 text-sky-300" />
            Analytics Avenue
          </a>
          <button className="rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.45)] transition hover:scale-[1.02]">
            Enroll Today
          </button>
        </div>
      </header>

      <main>
        <HeroSection />
        <ExpertsSection />
        <SuccessStrategySection />
        <UpcomingBatchesSection />
        <CompaniesSection />
        <RoadmapSection />
        <HonorsSection />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
