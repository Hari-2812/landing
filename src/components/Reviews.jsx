import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import expertA from '../assets/data_analyst.png';
import expertB from '../assets/bi_engineer.png';
import honorA from '../assets/project_sales.png';
import honorB from '../assets/mechanism.png';

const reviews = [
  { n: 'Priya', r: 'Data Analyst', q: 'Clear structure and placement support helped me switch fast.', i: expertA },
  { n: 'Karan', r: 'BI Developer', q: 'Projects were practical and improved my interview confidence.', i: expertB },
  { n: 'Fatima', r: 'Product Analyst', q: 'Mentor feedback and roadmap tracking made execution easier.', i: expertA },
];

const honors = [honorA, honorB, honorA, honorB];

function Reviews() {
  const roll = useMemo(() => [...reviews, ...reviews], []);
  const hall = useMemo(() => [...honors, ...honors], []);

  return (
    <section className="sec" id="reviews">
      <div className="wrap">
        <p className="title">Reviews & Honors</p>
        <h2 className="sub">Testimonials and recognition showcase</h2>

        <div className="track">
          <motion.div className="rail" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
            {roll.map((item, i) => (
              <article key={`${item.n}-${i}`} className="glass rev">
                <img src={item.i} alt={item.n} loading="lazy" />
                <h3>{item.n}</h3>
                <p>{item.r}</p>
                <small>{item.q}</small>
                <div className="stars">{Array.from({ length: 5 }).map((_, x) => <Star key={x} size={12} />)}</div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="track top">
          <motion.div className="rail" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
            {hall.map((img, i) => (
              <article key={`${i}-h`} className="glass honor"><img src={img} alt="Honor" loading="lazy" /></article>
            ))}
          </motion.div>
        </div>

        <button className="fab">Book Consultation</button>
      </div>
    </section>
  );
}

export default Reviews;
