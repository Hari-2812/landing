import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  CirclePlay,
  Compass,
  Cpu,
  FileBadge,
  GraduationCap,
  Layers,
  Lightbulb,
  MapPinned,
  Rocket,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserCheck,
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

const staggerWrap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const sectionFrame = 'mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:py-28';
const glassCard =
  'rounded-2xl border border-white/10 bg-white/5 shadow-[0_14px_40px_rgba(6,14,35,0.55)] backdrop-blur-xl';

const stats = [
  { value: '12,000+', label: 'Students Trained' },
  { value: '2,400+', label: 'Placements Supported' },
  { value: '450+', label: 'Industry Projects' },
  { value: '94%', label: 'Interview Success Rate' },
];

const experts = [
  {
    name: 'Sakshi Mehta',
    role: 'Senior Data Scientist',
    credibility: 'Built and scaled ML pipelines for high-growth SaaS products.',
    image: expertA,
  },
  {
    name: 'Arjun Pillai',
    role: 'Lead BI Consultant',
    credibility: 'Led enterprise BI transformations across fintech and retail.',
    image: expertB,
  },
  {
    name: 'Nikita Rao',
    role: 'AI Product Strategist',
    credibility: 'Bridges analytics and business strategy for product teams.',
    image: expertA,
  },
  {
    name: 'Rahul Nair',
    role: 'Analytics Engineering Mentor',
    credibility: 'Specialist in dbt modeling, pipelines, and production workflows.',
    image: expertB,
  },
];

const roles = [
  { title: 'Data Analyst', icon: BarChart3 },
  { title: 'Business Analyst', icon: Target },
  { title: 'BI Developer', icon: Layers },
  { title: 'Analytics Engineer', icon: Cpu },
  { title: 'Product Analyst', icon: TrendingUp },
  { title: 'ML Associate', icon: Rocket },
];

const curriculum = [
  { title: 'SQL & Data Foundations', image: projectA },
  { title: 'Power BI & Storytelling', image: projectB },
  { title: 'Python for Analytics', image: projectC },
  { title: 'AI Workflows for Analysts', image: projectD },
];

const projects = [
  { title: 'Customer Churn Engine', description: 'Predictive retention system for subscription businesses.', image: projectA },
  { title: 'Revenue Pulse Dashboard', description: 'Executive-ready KPI dashboard for GTM teams.', image: projectB },
  { title: 'Market Segmentation Studio', description: 'Persona discovery and targeting with clustering models.', image: projectC },
  { title: 'Risk Forecast Workbench', description: 'Scenario planning and risk insights for quarterly ops.', image: projectD },
];

const benefits = [
  { title: 'Job-Focused Curriculum', text: 'Learn exactly what top companies evaluate in analytics interviews.', icon: BookOpen },
  { title: 'Mentor Accountability', text: 'Weekly feedback loops with practitioners from active industry teams.', icon: UserCheck },
  { title: 'Project Portfolio', text: 'Build production-style case studies that strengthen recruiter trust.', icon: Briefcase },
  { title: 'AI + Analytics Edge', text: 'Apply modern AI tools to reporting, automation, and decision support.', icon: Sparkles },
  { title: 'Placement Preparation', text: 'Resume, LinkedIn, mock interviews, and role-based strategy support.', icon: FileBadge },
  { title: 'Community + Network', text: 'Grow with peer pods, alumni support, and hiring referrals.', icon: Users },
];

const enrollmentSteps = [
  { title: 'Attend Session', description: 'Join a live orientation and understand the roadmap.', icon: CalendarDays },
  { title: 'Block Seat', description: 'Reserve your cohort slot before seats close.', icon: MapPinned },
  { title: 'Complete Payment', description: 'Secure enrollment through assisted checkout.', icon: CheckCircle2 },
  { title: 'Access Materials', description: 'Receive LMS access, schedule, and starter resources.', icon: Layers },
  { title: 'Work on Projects', description: 'Build real projects with expert review checkpoints.', icon: Briefcase },
  { title: 'Placement Prep', description: 'Enter interview tracks and hiring acceleration support.', icon: GraduationCap },
];

const testimonials = [
  {
    name: 'Priya Kulkarni',
    role: 'Data Analyst, SaaS',
    quote: 'I transitioned from operations to analytics in under 5 months with strong project support.',
    image: expertA,
  },
  {
    name: 'Karan Vora',
    role: 'BI Developer, Fintech',
    quote: 'The curriculum and mentorship gave me confidence to crack high-quality product interviews.',
    image: expertB,
  },
  {
    name: 'Fatima Shaikh',
    role: 'Product Analyst, E-commerce',
    quote: 'The placement process was structured, practical, and outcome-driven from start to finish.',
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

const honors = [honorA, honorB, projectA, projectB, projectC];
const companyLogos = [projectA, projectB, projectC, honorA, honorB, projectA, projectB, projectC];

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

function IntroBannerSection() {
  return (
    <section className="relative overflow-hidden pt-30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_82%_10%,rgba(124,58,237,0.24),transparent_42%)]" />
      <img src={heroBackground} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20" />

      <div className={`${sectionFrame} relative grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]`}>
        <motion.div variants={revealUp} initial="hidden" animate="visible" className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
            Premium AI & Data Career Platform
          </span>
          <div className="rounded-3xl border border-white/15 bg-[#0b1227b0] p-7 shadow-[0_25px_70px_rgba(14,22,50,0.55)] backdrop-blur-2xl md:p-8">
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] text-white md:text-6xl">
              Build job-ready analytics and AI skills with a
              <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-violet-400 bg-clip-text text-transparent"> mentor-driven learning system</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
              Practical projects, expert reviews, and placement acceleration designed for ambitious professionals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(56,189,248,0.48)] transition hover:scale-[1.03] hover:shadow-[0_0_44px_rgba(56,189,248,0.68)]">
                Enroll Now
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15">
                <CirclePlay className="h-4 w-4 text-sky-300" />
                Explore Program
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} className={`${glassCard} relative overflow-hidden p-3`}>
            <img src={heroImage} alt="Program hero" loading="eager" className="h-[520px] w-full rounded-2xl object-cover object-[65%_center]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020617e3] via-[#02061770] to-transparent" />
          </motion.div>

          <motion.div animate={{ x: [0, 12, 0], y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-5 bottom-8 rounded-2xl border border-sky-200/30 bg-[#0f172ad0] p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-sky-300">Avg Salary Jump</p>
            <p className="text-2xl font-semibold text-white">+142%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function LiveStatsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-12 md:px-10">
      <motion.div variants={staggerWrap} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="grid gap-4 rounded-3xl border border-white/10 bg-[#0b1327]/90 p-4 sm:grid-cols-2 md:grid-cols-4 md:p-6">
        {stats.map((item) => (
          <motion.article key={item.label} variants={revealUp} className={`${glassCard} p-5 text-center`}>
            <p className="text-3xl font-semibold text-white">{item.value}</p>
            <p className="mt-2 text-sm text-slate-300">{item.label}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Overview"
        title="A guided path from learning to career transition"
        subtitle="Program structure, mentorship model, and placement strategy designed for measurable outcomes."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className={`${glassCard} overflow-hidden`}>
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/aircAruvnKk"
              title="Program overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.div variants={staggerWrap} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="grid gap-4">
          {[
            'Structured curriculum from fundamentals to advanced AI workflows',
            'Project-based execution aligned with real business scenarios',
            'Mentor feedback loops and career guidance in every phase',
          ].map((line) => (
            <motion.article key={line} variants={revealUp} className={`${glassCard} p-5`}>
              <p className="flex items-start gap-3 text-sm text-slate-200"><CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-300" />{line}</p>
            </motion.article>
          ))}
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
        title="Learn with professionals who build real systems"
        subtitle="Industry experts with real-world project experience guiding your learning journey."
        center
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {experts.map((expert, index) => (
          <motion.article
            key={expert.name}
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
              <p className="text-sm text-slate-300">{expert.credibility}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function RolesTargetSection() {
  return (
    <section className={`${sectionFrame} overflow-hidden`}>
      <SectionHeader
        badge="Roles to Target"
        title="Role pathways mapped to current industry demand"
        subtitle="Choose your role track and build competency through guided milestones."
        center
      />
      <div className="mt-14 flex justify-center">
        <div className="relative flex h-[430px] w-[430px] items-center justify-center">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute h-full w-full rounded-full border border-dashed border-sky-200/35" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 34, repeat: Infinity, ease: 'linear' }} className="absolute h-[330px] w-[330px] rounded-full border border-white/15" />

          <div className={`${glassCard} z-20 max-w-[210px] p-5 text-center`}>
            <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Target Roles</p>
            <p className="mt-2 text-lg font-semibold text-white">Career Acceleration Hub</p>
          </div>

          {roles.map((role, index) => {
            const angle = (index / roles.length) * Math.PI * 2;
            const x = Math.cos(angle) * 176;
            const y = Math.sin(angle) * 176;
            const Icon = role.icon;

            return (
              <motion.div key={role.title} className="absolute" style={{ transform: `translate(${x}px, ${y}px)` }} whileHover={{ scale: 1.08 }}>
                <div className={`${glassCard} min-w-[150px] p-3 text-center`}>
                  <Icon className="mx-auto mb-2 h-4 w-4 text-sky-300" />
                  <p className="text-xs font-medium text-slate-200">{role.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SuccessStrategySection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Success Strategy"
        title="A two-phase model focused on outcomes"
        subtitle="Strong fundamentals first, then guided project execution and placement readiness."
      />

      <div className="relative mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-[#101c3f] to-[#0b132b] p-6 md:p-10">
        <div className="pointer-events-none absolute left-1/2 top-10 hidden h-[calc(100%-80px)] w-px -translate-x-1/2 bg-gradient-to-b from-sky-300/15 via-sky-300/65 to-violet-300/20 lg:block" />
        <div className="grid gap-6 lg:grid-cols-2">
          {strategyPhases.map((phase, index) => (
            <motion.article
              key={phase.title}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.12 }}
              className={`${glassCard} relative p-6`}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-300/35 bg-sky-300/15 text-sky-200">
                {index === 0 ? <Compass className="h-5 w-5" /> : <Rocket className="h-5 w-5" />}
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
        badge="Curriculum"
        title="Modules designed for implementation, not memorization"
        subtitle="Build practical depth in analytics, BI, and AI through guided sessions and assignments."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {curriculum.map((item, index) => (
          <motion.article key={item.title} variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.08 }} className={`${glassCard} group overflow-hidden`}>
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.title} loading="lazy" className="aspect-video w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center bg-slate-950/35">
                <CirclePlay className="h-10 w-10 text-white drop-shadow-[0_0_10px_rgba(56,189,248,0.75)]" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-slate-100">{item.title}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Sample Projects"
        title="Portfolio assets that strengthen interview confidence"
        subtitle="Work on business-driven projects and present measurable impact through polished case studies."
        center
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article key={project.title} variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.08 }} className={`${glassCard} group relative overflow-hidden`}>
            <img src={project.image} alt={project.title} loading="lazy" className="h-72 w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{project.description}</p>
            </div>
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
        badge="Key Benefits"
        title="Everything needed to move from learning to hiring"
        subtitle="A complete ecosystem of skills, mentorship, project execution, and career support."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.article key={benefit.title} variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.07 }} whileHover={{ y: -6 }} className={`${glassCard} p-6`}>
            <benefit.icon className="h-8 w-8 text-sky-300" />
            <h3 className="mt-5 text-lg font-semibold text-white">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{benefit.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function LearningJourneySection() {
  const journey = ['Orientation', 'Skill Building', 'Project Sprints', 'Mock Interviews', 'Placement Support'];

  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Your Learning Journey"
        title="One continuous timeline from first class to first offer"
        subtitle="Track your growth, performance, and confidence with clear stage-wise progress."
        center
      />
      <div className="relative mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
        <div className="absolute left-6 right-6 top-[44px] hidden h-px bg-gradient-to-r from-sky-300/20 via-sky-300/70 to-violet-300/20 md:block" />
        <div className="grid gap-4 md:grid-cols-5">
          {journey.map((step, index) => (
            <motion.article key={step} variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.08 }} className={`${glassCard} p-4 text-center`}>
              <p className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/35 bg-sky-300/15 text-sm font-semibold text-sky-200">{index + 1}</p>
              <p className="text-sm font-medium text-white">{step}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIRecommendationSection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="AI Recommendation"
        title="Get a personalized learning track before enrollment"
        subtitle="Answer a few inputs and preview your best-fit role path, project track, and interview focus."
      />
      <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className={`${glassCard} mt-12 grid gap-5 p-6 md:grid-cols-3`}>
        {[
          { title: 'Recommended Track', value: 'Analytics Engineer Path' },
          { title: 'Priority Modules', value: 'SQL · Python · dbt · Power BI' },
          { title: 'Target Timeline', value: '16 Weeks to Interview Ready' },
        ].map((card) => (
          <div key={card.title} className="rounded-xl border border-white/10 bg-[#0d1a35] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{card.title}</p>
            <p className="mt-3 text-base font-medium text-white">{card.value}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function EnrollmentProcessSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % enrollmentSteps.length), 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0b1225]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.28),transparent_45%)]" />
      <div className={sectionFrame}>
        <SectionHeader
          badge="Enrollment Process"
          title="A step-by-step journey from orientation to placement prep"
          subtitle="Clear progress flow with milestones, resources, and mentor support at every stage."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {enrollmentSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = active === index;

            return (
              <motion.article
                key={step.title}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.07 }}
                className={`rounded-2xl border p-6 backdrop-blur-xl transition ${
                  isActive
                    ? 'border-sky-300/60 bg-sky-400/15 shadow-[0_0_35px_rgba(56,189,248,0.32)]'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Step {index + 1}</p>
                  <Icon className={`h-5 w-5 ${isActive ? 'text-sky-200' : 'text-slate-300'}`} />
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const looped = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Reviews"
        title="Learner outcomes that build trust"
        subtitle="Career transitions enabled through practical guidance, strong project work, and placement strategy."
      />
      <div className="mt-14 overflow-hidden">
        <motion.div className="flex gap-5" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>
          {looped.map((item, index) => (
            <article key={`${item.name}-${index}`} className={`${glassCard} w-[340px] shrink-0 p-6`}>
              <div className="mb-4 flex items-center gap-4">
                <img src={item.image} alt={item.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-slate-300">{item.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-200">“{item.quote}”</p>
              <div className="mt-4 flex text-sky-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CompaniesSection() {
  const marquee = useMemo(() => [...companyLogos, ...companyLogos], []);

  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Top Companies"
        title="Our aspirants work with leading companies"
        subtitle="Trusted by hiring teams across SaaS, fintech, e-commerce, and consulting."
        center
      />
      <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-6">
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} className="flex gap-4 px-4">
          {marquee.map((logo, index) => (
            <motion.div key={`${logo}-${index}`} whileHover={{ scale: 1.03 }} className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0b1329] p-3">
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
        badge="Honors & Recognitions"
        title="Recognized for excellence in analytics training"
        subtitle="Consistent outcomes across learner success, practical projects, and innovation."
        center
      />
      <div className="mt-14 overflow-hidden">
        <motion.div className="flex gap-5" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>
          {loopedHonors.map((item, index) => (
            <motion.article key={`${item}-${index}`} whileHover={{ scale: 1.03 }} className={`${glassCard} w-[280px] shrink-0 overflow-hidden`}>
              <img src={item} alt="Recognition" loading="lazy" className="h-48 w-full object-cover transition duration-500 hover:scale-110" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CareerRoadmapTrackerSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveStep((prev) => (prev + 1) % enrollmentSteps.length), 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#060b18] py-24 md:py-30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_42%)]" />
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeader
          badge="Interactive Career Roadmap"
          title="Track your complete transformation path"
          subtitle="Attend Session → Block Seat → Complete Payment → Access Materials → Work on Projects → Placement Preparation"
          center
        />

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-sky-300/20 bg-[#050a18] p-6 shadow-[0_0_70px_rgba(56,189,248,0.1)] md:p-10">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 540" preserveAspectRatio="none" aria-hidden>
            <path id="road-path" d="M40,450 C170,350 230,140 350,160 C460,180 520,390 650,360 C770,330 840,120 950,150 C1050,180 1110,280 1160,320" fill="none" stroke="transparent" />
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
            {enrollmentSteps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <motion.article
                  key={`track-${step.title}`}
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
                    <CheckCircle2 className={`h-5 w-5 ${isActive ? 'text-sky-200' : 'text-slate-300'}`} />
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

function StickyCta() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.45)]"
    >
      <Lightbulb className="h-4 w-4" />
      Book Consultation
    </motion.button>
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
        <IntroBannerSection />
        <LiveStatsSection />
        <OverviewSection />
        <ExpertsSection />
        <RolesTargetSection />
        <SuccessStrategySection />
        <CurriculumSection />
        <ProjectsSection />
        <BenefitsSection />
        <LearningJourneySection />
        <AIRecommendationSection />
        <EnrollmentProcessSection />
        <TestimonialsSection />
        <CompaniesSection />
        <RoadmapSection />
        <HonorsSection />
        
      </main>

      <Footer />
      <StickyCta />
    </div>
  );
}

export default App;
