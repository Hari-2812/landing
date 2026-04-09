import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '../assets/hero.png';
import heroBackground from '../assets/hero_bg.png';

function Hero() {
  return (
    <section className="sec hero" id="hero">
      <img src={heroBackground} alt="" className="bgimg" aria-hidden />
      <div className="wrap grid two">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="tag">Dark Teal Program</span>
          <h1 className="head">Build your AI and analytics career with mentor-led execution.</h1>
          <p className="copy">Project-first learning, placement guidance, and industry-ready workflows in one premium platform.</p>
          <div className="row">
            <button className="btn pri">Enroll Now <ArrowRight size={16} /></button>
            <button className="btn ghost">Book Consultation</button>
          </div>
        </motion.div>

        <motion.div className="glass frame" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <img src={heroImage} alt="Hero" loading="eager" className="photo" />
          <div className="shade" />
          <div className="chip"><Sparkles size={14} /> Placement-focused</div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
