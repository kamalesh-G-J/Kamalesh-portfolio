import { motion } from 'framer-motion';
import { Cloud, BookOpen, Layers, Award, ExternalLink } from 'lucide-react';

const CERT_DATA = [
  {
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Dec 2023',
    icon: <Cloud className="text-blue-400" size={18} />,
    verifyLink: 'https://aws.amazon.com/'
  },
  {
    title: 'Spring Boot Certification',
    issuer: 'Udemy Academic Program',
    date: 'Nov 2023',
    icon: <BookOpen className="text-green-400" size={18} />,
    verifyLink: 'https://www.udemy.com/'
  },
  {
    title: 'DSA Certification',
    issuer: 'Coding Abstractions',
    date: 'Oct 2023',
    icon: <Layers className="text-purple-400" size={18} />,
    verifyLink: 'https://github.com'
  },
  {
    title: 'HackerRank SQL Certified',
    issuer: 'HackerRank Testing Center',
    date: 'Aug 2023',
    icon: <Award className="text-pink-400" size={18} />,
    verifyLink: 'https://www.hackerrank.com/'
  }
];

export default function Certifications() {
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
    <section id="certifications" className="py-20 bg-transparent border-t border-white/5">
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
            06. CERTIFICATIONS
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-2xl font-bold text-white"
          >
            Academic & Cloud Credentials
          </motion.h3>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CERT_DATA.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded-xl p-5 border border-white/5 flex flex-col justify-between min-h-[160px] cursor-pointer"
              whileHover={{
                y: -4,
                borderColor: 'rgba(96, 165, 250, 0.2)',
                boxShadow: '0 10px 25px -10px rgba(59, 130, 246, 0.15)'
              }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-1.5 rounded bg-white/5 border border-white/5">{cert.icon}</span>
                  <span className="text-[9px] font-mono text-gray-500">{cert.date}</span>
                </div>
                <h4 className="text-xs font-bold text-white leading-normal mb-1">
                  {cert.title}
                </h4>
                <p className="text-[10px] font-mono text-gray-500 tracking-wide">
                  {cert.issuer}
                </p>
              </div>

              {/* Verify Link */}
              <div className="border-t border-white/5 pt-3 mt-4">
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[10px] font-mono text-blue-400 hover:text-blue-300 transition-colors uppercase font-bold"
                >
                  Verify <ExternalLink size={8} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
