import { motion } from 'framer-motion';
import { Award, Code, BarChart } from 'lucide-react';

const STATS_DATA = [
  {
    label: 'LeetCode Problems Solved',
    value: '200+',
    detail: 'Algorithm complexity & details practice',
    icon: <Code size={16} className="text-yellow-400" />
  },
  {
    label: 'CodeChef Problems Solved',
    value: '370+',
    detail: 'Competitive programming challenges solved',
    icon: <Code size={16} className="text-orange-400" />
  },
  {
    label: 'LeetCode Contest Rating',
    value: '1550+',
    detail: 'Peak competitive tournament rating',
    icon: <BarChart size={16} className="text-purple-400" />
  },
  {
    label: 'HackerRank Certified Credentials',
    value: 'SQL & Python',
    detail: 'Python (3-Star) & SQL (4-Star) badges',
    icon: <Award size={16} className="text-green-400" />
  }
];

export default function Achievements() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-transparent border-t border-white/5">
      <div className="section-container text-left">
        
        {/* Header */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-xs font-semibold font-mono tracking-widest text-blue-400 uppercase mb-2"
          >
            05. ACHIEVEMENTS
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-2xl font-bold text-white"
          >
            Competitive Programming & Metrics
          </motion.h3>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded-xl p-5 border border-white/5 flex flex-col justify-between min-h-[140px] cursor-pointer"
              whileHover={{
                y: -4,
                borderColor: 'rgba(96, 165, 250, 0.2)',
                boxShadow: '0 10px 25px -10px rgba(59, 130, 246, 0.15)'
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Icon and label */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">{stat.icon}</span>
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider font-semibold">METRIC</span>
              </div>

              {/* Value and details */}
              <div>
                <span className="text-2xl font-bold text-white font-mono block leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-gray-300 block mb-1">
                  {stat.label}
                </span>
                <span className="text-[10px] text-gray-500 font-light leading-relaxed block">
                  {stat.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
