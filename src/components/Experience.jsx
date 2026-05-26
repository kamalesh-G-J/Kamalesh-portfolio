import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const INTERNSHIPS_DATA = [
  {
    role: 'Java Full Stack Intern',
    company: 'RAMPeX Technologies',
    duration: 'Feb 2024 - Apr 2024',
    description: 'Worked on Spring Boot backend development, React frontends, MySQL databases, and stateless JWT authentication filters. Wrote JUnit and Mockito unit tests for secure enterprise applications.'
  },
  {
    role: 'MERN Stack Intern',
    company: 'G-Soft Solutions',
    duration: 'Nov 2023 - Jan 2024',
    description: 'Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js. Built responsive user interfaces and designed robust RESTful APIs.'
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="experience" className="py-20 bg-transparent border-t border-white/5">
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
            04. EXPERIENCE
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-2xl font-bold text-white"
          >
            Internship Roadmap
          </motion.h3>
        </div>

        {/* Vertical Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative pl-6 border-l border-white/10 space-y-10 max-w-3xl"
        >
          {/* Timeline Nodes */}
          {INTERNSHIPS_DATA.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group cursor-pointer"
            >
              {/* Timeline dot node */}
              <div className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500 border border-[#030303] group-hover:scale-125 transition-transform" />

              {/* Technical Description */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                <h4 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {exp.role} <span className="text-blue-400 font-mono text-sm font-medium">@ {exp.company}</span>
                </h4>
                <span className="text-xs font-mono text-gray-500 flex items-center gap-1 shrink-0">
                  <Calendar size={12} />
                  {exp.duration}
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
