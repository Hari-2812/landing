import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Rocket } from 'lucide-react';
import BlurImage from './BlurImage';

const projects = [
  { 
    id: 1, 
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    headline: 'Predicted $50k in Saved Churn Using AI-driven Churn Modeling.',
    sub: 'Developed a predictive retention model for a SaaS client, reducing customer loss by 18% in three months.',
    tags: ['Python', 'Scikit-Learn', 'Tableau', 'MongoDB'],
    tagColor: 'text-indigo-pulse border-indigo-pulse/30 bg-indigo-pulse/10 shadow-glow-indigo'
  },
  { 
    id: 2, 
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    headline: 'Automated ETL Pipeline to Process 1.2M Records/Day.',
    sub: 'Re-engineered a broken data engineering pipeline, reducing processing time by 85% and enabling real-time BI reporting.',
    tags: ['Apache Airflow', 'AWS Lambda', 'SQL Server', 'Snowflake'],
    tagColor: 'text-purple-punch border-purple-punch/30 bg-purple-punch/10 shadow-glow-purple'
  },
  { 
    id: 3, 
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    headline: 'Unlocked 22% Sales Boost with Interactive Executive Dashboards.',
    sub: 'Created advanced PowerBI visualizations that identified a hidden market segment, directly leading to a multi-million dollar strategy shift.',
    tags: ['PowerBI', 'DAX', 'R-Programming', 'Excel'],
    tagColor: 'text-cyan-neon border-cyan-neon/30 bg-cyan-neon/10 shadow-glow-cyan'
  }
];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const tagsRef = useRef([]);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { y: -10, scale: 1.02, duration: 0.4, ease: "power2.out" });
    gsap.fromTo(tagsRef.current, 
      { opacity: 0, y: 15, rotate: () => Math.random() * 10 - 5 }, 
      { opacity: 1, y: 0, rotate: 0, stagger: 0.05, duration: 0.4, ease: "back.out(1.7)" }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
    gsap.to(tagsRef.current, { opacity: 0, y: 15, duration: 0.3, ease: "power2.in" });
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl overflow-hidden glass-card-premium border-white/10 group h-[550px] shadow-2xl cursor-default"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <BlurImage src={project.img} alt={project.headline} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700" />
      </motion.div>
      
      <div className="project-overlay"></div>

      <div className="relative z-20 h-full p-8 flex flex-col justify-end">
        <div className="absolute top-6 right-6 flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-lg shadow-lg">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-green-500 text-xs font-bold tracking-widest uppercase">Real-World Solved & Deployed</span>
        </div>

        <div>
          <h3 className="text-2xl font-black text-white mb-3 leading-tight tracking-wide">{project.headline}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium max-w-sm">{project.sub}</p>
          
          <div className="flex flex-wrap gap-2 min-h-[36px]">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                ref={el => tagsRef.current[idx] = el}
                className={`opacity-0 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border ${project.tagColor}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsGallery() {
  return (
    <section className="py-24 bg-midnight relative border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="heading-section">
            Execute. <span className="text-indigo-pulse">Ship.</span> Dominate.
          </h2>
          <p className="subheading max-w-2xl mx-auto">
            These are not tutorial projects. These are actual business pipelines solving multi-million dollar corporate architecture gaps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 relative z-10">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>

        <div className="flex justify-center relative z-20">
          <button className="btn-primary flex items-center justify-center gap-4 text-white font-black tracking-wider">
            <div className="btn-pulse-glow"></div>
            <div className="btn-inner-gradient"></div>
            <div className="relative z-10 flex items-center gap-4">
              BUILD THE PORTFOLIO THAT GETS YOU HIRED
              <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="absolute top-0 inset-x-0 h-[1px] bg-white/40 pointer-events-none"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
