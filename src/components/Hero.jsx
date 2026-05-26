import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TextType from './TextType';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TECH_LIST = [
  {
    name: 'Java',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 shrink-0">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <path d="M6 1v3M10 1v3M14 1v3" />
      </svg>
    )
  },
  {
    name: 'Spring Boot',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500 shrink-0">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 3 .5 4.5 1.5 6l1.5-1.5c-1-1-1-2.5-1-4.5 0-4.5 3.5-8 8-8 2 0 3.5.5 4.5 1.5L18 4C16.5 3 15 2 12 2z" />
        <path d="M12 22c5.5 0 10-4.5 10-10 0-3-.5-4.5-1.5-6L19 7.5c1 1 1 2.5 1 4.5 0 4.5-3.5 8-8 8-2 0-3.5-.5-4.5-1.5L6 20c1.5 1 3 2 6 2z" />
        <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
      </svg>
    )
  },
  {
    name: 'React',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400 shrink-0">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'MySQL',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500 shrink-0">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    )
  },
  {
    name: 'Redis',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500 shrink-0">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    name: 'Kafka',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 shrink-0">
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="5" r="2.5" />
        <circle cx="19" cy="5" r="2.5" />
        <circle cx="12" cy="19" r="2.5" />
        <path d="M6.5 6.5l3.5 3.5M17.5 6.5l-3.5 3.5M12 16.5v-1.5" />
      </svg>
    )
  },
  {
    name: 'MongoDB',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 shrink-0">
        <path d="M12 2C12 2 9 7 9 11c0 3 2 5 3 7c1-2 3-4 3-7c0-4-3-9-3-9z" />
        <path d="M12 18v4" />
      </svg>
    )
  },
  {
    name: 'PostgreSQL',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-500 shrink-0">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0v-2a4 4 0 0 0-4-4z" />
        <path d="M8 12h8" />
      </svg>
    )
  },
  {
    name: 'Git',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-600 shrink-0">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 15V9a4 4 0 0 0-4-4H9" />
        <path d="M6 9v6" />
      </svg>
    )
  },
  {
    name: 'Docker',
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500 shrink-0">
        <rect x="4" y="8" width="4" height="4" />
        <rect x="10" y="8" width="4" height="4" />
        <rect x="16" y="8" width="4" height="4" />
        <rect x="7" y="14" width="10" height="4" />
      </svg>
    )
  }
];

const ResumeCircularBadge = () => (
  <a
    href="https://drive.google.com/drive/folders/16kcZaOfAMD-o3bZO9SJTzxwr-JyIB2RY?usp=drive_link"
    target="_blank"
    rel="noreferrer"
    className="relative w-32 h-32 flex items-center justify-center cursor-pointer group"
  >
    {/* Dotted border rotating */}
    <svg className="absolute w-full h-full text-white/25 animate-spin-slow group-hover:text-rose-500/40 transition-colors" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
    </svg>
    {/* Curved Text */}
    <svg className="absolute w-[90%] h-[90%] animate-spin-slow" viewBox="0 0 100 100" style={{ animationDuration: '12s' }}>
      <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
      <text fill="#ffffff" className="font-mono text-[8px] font-bold" letterSpacing="4.5">
        <textPath href="#circlePath" startOffset="0%">
          RESUME • HERE • RESUME • HERE •
        </textPath>
      </text>
    </svg>
    {/* Down Arrow in the center */}
    <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-rose-500/30 group-hover:bg-rose-500/10 transition-all">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-rose-500 transition-colors group-hover:translate-y-0.5 duration-300">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </div>
  </a>
);

export default function Hero() {
  const navigate = useNavigate();

  // Staggered Intro sequence variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Line-by-line reveal for description
  const descriptionLineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-between items-center pt-28 pb-4 overflow-hidden bg-transparent"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-20 w-full text-left flex-grow">

        {/* Left Side: Staggered Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start pb-6 lg:pb-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-[10px] font-bold font-mono tracking-widest text-blue-400 uppercase mb-3 px-2 py-0.5 rounded border border-blue-500/10 bg-blue-500/5"
          >
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <motion.div variants={itemVariants} className="relative mb-2">
            <span className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-15 -z-10 rounded-full" />
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white cursor-default">
              Hi, I'm Kamalesh
            </h1>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-extrabold text-rose-500 mb-6 uppercase tracking-wider font-sans min-h-[40px]"
          >
            <TextType
              text={["Backend Developer", "Java Developer", "SpringBoot Developer"]}
              typingSpeed={70}
              pauseDuration={1800}
              showCursor
              cursorCharacter="|"
              deletingSpeed={45}
              loop={true}
            />
          </motion.h2>

          <div className="text-xs md:text-sm text-gray-400 max-w-md leading-relaxed mb-8 font-light space-y-2.5">
            <motion.p variants={descriptionLineVariants}>
              AI & Data Science undergrad focused on recruiter-ready, production-grade systems: autonomous job application pipelines, agentic workflows, and real-time big-data analytics with Spring Boot, Redis, and Kafka.
            </motion.p>
          </div>



          {/* Action CTAs: View Projects & Curved Resume Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 w-full sm:w-auto"
          >
            <motion.button
              onClick={() => navigate('/projects')}
              className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer group"
              whileHover={{ scale: 1.02, boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            {/* Circular Spinning Resume Badge */}
            <ResumeCircularBadge />
          </motion.div>
        </motion.div>

        {/* Right Side: Huge Borderless Bottom-Aligned Profile Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-end w-full self-end relative">
          <motion.div
            className="relative w-full max-w-sm md:max-w-md lg:max-w-lg flex items-end justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background glowing circle for style */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-rose-500/10 to-purple-500/10 blur-3xl opacity-50 z-0 bottom-10" />

            <img
              src="/profile.jpg"
              alt="Kamalesh G J"
              className="w-full h-auto max-h-[60vh] lg:max-h-[70vh] object-contain object-bottom rounded-b-none rounded-t-2xl z-10 select-none pointer-events-none"
            />
            {/* Dark vignette blending bottom of image */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030303] to-transparent z-20" />
          </motion.div>
        </div>

      </div>

      {/* Base: Tech Stack Highlights - static layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full max-w-4xl px-6 mx-auto mt-6 pb-6 relative z-30"
      >
        <h3 className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase mb-4 text-center">
          CORE TECHNOLOGY STACK
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {TECH_LIST.map((tech, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#0a0c10]/80 border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-default group"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div className="shrink-0 p-1.5 rounded-lg bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.05] transition-colors">
                {tech.logo}
              </div>
              <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
