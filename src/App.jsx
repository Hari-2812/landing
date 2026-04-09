import { useMemo } from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  CheckCircle2,
  CirclePlay,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Lightbulb,
  LineChart,
  Rocket,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import heroImage from './assets/hero.png';
import heroBackground from './assets/hero_bg.png';
import expertA from './assets/data_analyst.png';
import expertB from './assets/bi_engineer.png';
import projectA from './assets/project1.jpg';
import projectB from './assets/project2.jpg';
import projectC from './assets/project3.jpg';
import projectD from './assets/project_churn.png';
import honorA from './assets/project_sales.png';
import honorB from './assets/mechanism.png';

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const sectionFrame = 'mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:py-28';
const glassCard =
  'rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(15,23,42,0.45)] backdrop-blur-xl';

const stats = [
  { value: '1,200+', label: 'Learners upskilled' },
  { value: '52', label: 'Live mentor sessions/year' },
  { value: '94%', label: 'Interview conversion rate' },
  { value: '180+', label: 'Portfolio projects shipped' },
];

const experts = [
  { name: 'Sakshi Mehta', role: 'Senior Data Scientist', image: expertA },
  { name: 'Arjun Pillai', role: 'Lead BI Consultant', image: expertB },
  { name: 'Nikita Rao', role: 'AI Product Strategist', image: expertA },
  { name: 'Rahul Nair', role: 'Analytics Engineering Mentor', image: expertB },
];

const orbitRoles = ['Data Analyst', 'Business Analyst', 'BI Developer', 'Analytics Engineer', 'ML Associate', 'Product Analyst'];

const roadmapSteps = [
  'Attend Session',
  'Block Seat',
  'Complete Payment',
  'Access Materials',
  'Work on Projects',
  'Placement Preparation',
];

const curriculumVideos = [
  { id: 'aircAruvnKk', title: 'SQL Foundations for Analytics' },
  { id: '8Xg7E9shq0U', title: 'Dashboard Design in Power BI' },
  { id: 'f_uwKZIAeM0', title: 'Python for Data Workflows' },
  { id: 'w7ejDZ8SWv8', title: 'React + Data App Fundamentals' },
];

const projects = [
  { title: 'Customer Churn Engine', description: 'Predictive retention intelligence for subscription teams.', image: projectA },
  { title: 'Revenue Pulse Dashboard', description: 'Executive reporting layer for weekly GTM decisions.', image: projectB },
  { title: 'Market Segmentation Studio', description: 'Clustering + persona discovery for growth channels.', image: projectC },
  { title: 'Risk Forecast Workbench', description: 'Scenario-based modelling for quarterly planning.', image: projectD },
];

const benefits = [
  { icon: Rocket, title: 'Career Acceleration', text: 'Structured upskilling path with continuous interview support.' },
  { icon: Users, title: 'Live Mentor Pods', text: 'Weekly expert-led sessions with direct performance feedback.' },
  { icon: Layers, title: 'Industry Projects', text: 'Portfolio-ready projects mapped to real-world analytics use-cases.' },
  { icon: Target, title: 'Placement Preparation', text: 'Resume, LinkedIn, mock interviews, and hiring strategy loops.' },
  { icon: Sparkles, title: 'AI-Integrated Learning', text: 'Workflows combining BI tools, ML, and modern GenAI techniques.' },
  { icon: Briefcase, title: 'Role-Based Tracks', text: 'Dedicated pathways for analyst, BI, product, and data roles.' },
];

const testimonials = [
  {
    name: 'Priya Kulkarni',
    role: 'Data Analyst, SaaS',
    quote: 'The structure, mentor support, and projects helped me switch domains in less than 5 months.',
    image: expertA,
  },
  {
    name: 'Karan Vora',
    role: 'BI Developer, Fintech',
    quote: 'I rebuilt my portfolio with production-grade dashboards and cracked two offers quickly.',
    image: expertB,
  },
  {
    name: 'Fatima Shaikh',
    role: 'Product Analyst, E-commerce',
    quote: 'This program finally gave me clarity on business storytelling and technical confidence.',
    image: expertA,
  },
];

const honors = [honorA, honorB, projectA, projectB, projectC];

const enrollmentSteps = ['Apply for Cohort', 'Receive Mentor Screening', 'Secure Enrollment', 'Kickoff & Onboarding'];

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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(124,58,237,0.28),transparent_40%)]" />
      <img src={heroBackground} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20" />

      <div className={`${sectionFrame} relative grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]`}>
        <motion.div variants={revealUp} initial="hidden" animate="visible" className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
            Premium Analytics Bootcamp
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-white md:text-6xl">
            Build a <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">high-impact analytics career</span> with modern, project-first training.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-300">
            Master data, BI, AI workflows, and placement prep through a guided roadmap designed for ambitious professionals.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(56,189,248,0.45)] transition hover:scale-[1.02]">
              Enroll Now
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              <CirclePlay className="h-4 w-4 text-sky-300" />
              Watch Preview
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.32, 1] }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className={`relative overflow-hidden ${glassCard} p-3`}
          >
            <img src={heroImage} alt="Program hero" className="h-full w-full rounded-2xl object-cover" loading="eager" />
          </motion.div>
          <motion.div
            animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 bottom-8 rounded-2xl border border-white/20 bg-[#0f172ad0] p-4 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-widest text-sky-300">Avg Salary Jump</p>
            <p className="text-2xl font-semibold text-white">+142%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Program Overview"
        title="A clear system to learn, build, and get hired faster"
        subtitle="Watch the complete flow and track your progress with measurable outcomes in every phase."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`${glassCard} overflow-hidden`}
        >
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/aircAruvnKk"
              title="Analytics program overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {stats.map((item, index) => (
            <motion.article
              key={item.label}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
              className={`${glassCard} p-6`}
            >
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertsSection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Expert Mentors"
        title="Learn directly from active professionals"
        subtitle="Mentors from product, fintech, and SaaS teams who shape your projects and interview performance."
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
            className={`${glassCard} overflow-hidden`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={expert.image} alt={expert.name} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-lg font-semibold text-white">{expert.name}</h3>
              <p className="text-sm text-slate-300">{expert.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function RolesOrbitSection() {
  const roleIcons = [Database, BarChart3, LineChart, Code2, Lightbulb, GraduationCap];

  return (
    <section className={`${sectionFrame} overflow-hidden`}>
      <SectionHeader
        badge="Roles To Target"
        title="Career pathways built around market demand"
        subtitle="Explore role-fit tracks through an interactive orbit model designed for clarity and progression."
        center
      />

      <div className="mt-14 flex justify-center">
        <div className="relative flex h-[420px] w-[420px] items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="absolute h-full w-full rounded-full border border-dashed border-white/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            className="absolute h-[320px] w-[320px] rounded-full border border-white/15"
          />

          <div className={`${glassCard} z-20 max-w-[210px] p-5 text-center`}>
            <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Target Roles</p>
            <p className="mt-2 text-lg font-semibold text-white">Analytics Career Hub</p>
          </div>

          {orbitRoles.map((role, index) => {
            const Icon = roleIcons[index % roleIcons.length];
            const angle = (index / orbitRoles.length) * Math.PI * 2;
            const x = Math.cos(angle) * 176;
            const y = Math.sin(angle) * 176;

            return (
              <motion.div
                key={role}
                className="absolute"
                style={{ transform: `translate(${x}px, ${y}px)` }}
                whileHover={{ scale: 1.06 }}
              >
                <div className={`${glassCard} min-w-[140px] p-3 text-center`}>
                  <Icon className="mx-auto mb-1 h-4 w-4 text-sky-300" />
                  <p className="text-xs font-medium text-slate-200">{role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const pathLength = useTransform(progress, [0.18, 0.7], [0, 1]);

  return (
    <section className={`${sectionFrame} relative`}>
      <SectionHeader
        badge="Roadmap"
        title="Track your journey with an animated progression model"
        subtitle="Follow every milestone from onboarding to placement preparation through an interactive guided timeline."
      />

      <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-slate-900/30 p-6 md:p-10">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 520" preserveAspectRatio="none" aria-hidden>
          <motion.path
            d="M60,460 C180,350 250,150 360,180 C470,210 520,420 650,380 C780,340 820,120 950,150 C1040,170 1090,260 1140,320"
            fill="none"
            stroke="rgba(148,163,184,0.35)"
            strokeWidth="3"
            strokeDasharray="9 8"
            initial={{ pathLength: 0 }}
            style={{ pathLength }}
          />
          <motion.circle r="9" fill="#38BDF8" filter="url(#glow)">
            <animateMotion dur="8s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#road-path" />
            </animateMotion>
          </motion.circle>
          <path
            id="road-path"
            d="M60,460 C180,350 250,150 360,180 C470,210 520,420 650,380 C780,340 820,120 950,150 C1040,170 1090,260 1140,320"
            fill="none"
            stroke="transparent"
          />
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {roadmapSteps.map((step, index) => (
            <motion.article
              key={step}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1 }}
              className={`${glassCard} p-5`}
              style={{
                boxShadow: `0 0 ${8 + index * 2}px rgba(56,189,248,${0.06 + index * 0.02})`,
              }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Step {index + 1}</span>
                <CheckCircle2 className="h-4 w-4 text-sky-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">{step}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurriculumSection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Curriculum"
        title="Hands-on modules built for practical execution"
        subtitle="Preview lecture tracks and implementation-focused lessons curated for job-ready outcomes."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {curriculumVideos.map((video, index) => (
          <motion.a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.06 }}
            className={`group ${glassCard} overflow-hidden`}
          >
            <div className="relative overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                loading="lazy"
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-content-center bg-slate-950/35">
                <CirclePlay className="h-11 w-11 text-white drop-shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
              </div>
            </div>
            <div className="p-4 text-sm text-slate-200">{video.title}</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Projects"
        title="Portfolio assets that make your profile recruiter-ready"
        subtitle="Build outcome-driven case studies with polished UI, storytelling, and measurable business impact."
        center
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08 }}
            className={`group relative overflow-hidden ${glassCard}`}
          >
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

function BenefitsSection() {
  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Key Benefits"
        title="Everything you need to move from learner to hired professional"
        subtitle="A premium ecosystem combining training quality, mentorship, and placement strategy."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.article
            key={benefit.title}
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -6 }}
            className={`${glassCard} p-6`}
          >
            <benefit.icon className="h-8 w-8 text-sky-300" />
            <h3 className="mt-5 text-lg font-semibold text-white">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{benefit.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function EnrollmentSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b1225]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.28),transparent_45%)]" />
      <div className={sectionFrame}>
        <SectionHeader
          badge="Enrollment Process"
          title="A seamless onboarding flow with milestone visibility"
          subtitle="Follow a neon-guided progression from application to program kickoff."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {enrollmentSteps.map((step, index) => (
            <motion.article
              key={step}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.07 }}
              className="relative"
            >
              <div className={`${glassCard} h-full p-6 text-center`}>
                <p className="text-xs uppercase tracking-[0.22em] text-sky-300">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{step}</h3>
              </div>
              {index < enrollmentSteps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 -translate-y-1/2 bg-gradient-to-r from-sky-400 to-violet-400 md:block" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const loopedTestimonials = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Testimonials"
        title="Success stories from learners who transformed their careers"
        subtitle="Real journeys, measurable outcomes, and confidence built through mentor-backed execution."
      />

      <div className="mt-14 overflow-hidden">
        <motion.div
          className="flex gap-5"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          {loopedTestimonials.map((item, index) => (
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

function HonorsSection() {
  const loopedHonors = useMemo(() => [...honors, ...honors], []);

  return (
    <section className={sectionFrame}>
      <SectionHeader
        badge="Honors & Achievements"
        title="Recognition from learners, hiring teams, and communities"
        subtitle="A growing track record of outcomes, reviews, and high-impact project delivery."
        center
      />

      <div className="mt-14 overflow-hidden">
        <motion.div
          className="flex gap-5"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {loopedHonors.map((item, index) => (
            <article key={`${item}-${index}`} className={`${glassCard} w-[280px] shrink-0 overflow-hidden`}>
              <img src={item} alt="Achievement" loading="lazy" className="h-48 w-full object-cover" />
            </article>
          ))}
        </motion.div>
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
        <OverviewSection />
        <ExpertsSection />
        <RolesOrbitSection />
        <RoadmapSection />
        <CurriculumSection />
        <ProjectsSection />
        <BenefitsSection />
        <EnrollmentSection />
        <TestimonialSection />
        <HonorsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
