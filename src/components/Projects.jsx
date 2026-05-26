import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

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

const ServerIcon = ({ size = 22, className = "" }) => (
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
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);

const BriefcaseIcon = ({ size = 22, className = "" }) => (
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
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

const GlowingBrain = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-48 h-48 md:w-56 md:h-56 text-rose-500/80 drop-shadow-[0_0_25px_rgba(244,63,94,0.3)] mx-auto lg:mx-0 mt-8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="brainGradient" x1="0" y1="0" x2="200" y2="200">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="50%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <filter id="brainGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    {/* Left hemisphere brain patterns */}
    <path d="M 100 40 C 70 40, 50 60, 50 90 C 50 110, 60 120, 60 130 C 60 145, 75 160, 100 160" stroke="url(#brainGradient)" strokeWidth="1.5" filter="url(#brainGlow)" />
    <path d="M 100 60 C 80 60, 70 75, 70 95 C 70 110, 80 115, 80 125 C 80 135, 90 145, 100 145" stroke="url(#brainGradient)" strokeWidth="1" opacity="0.8" />
    <path d="M 100 80 C 90 80, 85 90, 85 100 C 85 110, 90 115, 90 125 C 90 130, 95 135, 100 135" stroke="url(#brainGradient)" strokeWidth="0.8" opacity="0.6" />
    
    {/* Right hemisphere brain patterns */}
    <path d="M 100 40 C 130 40, 150 60, 150 90 C 150 110, 140 120, 140 130 C 140 145, 125 160, 100 160" stroke="url(#brainGradient)" strokeWidth="1.5" filter="url(#brainGlow)" />
    <path d="M 100 60 C 120 60, 130 75, 130 95 C 130 110, 120 115, 120 125 C 120 135, 110 145, 100 145" stroke="url(#brainGradient)" strokeWidth="1" opacity="0.8" />
    <path d="M 100 80 C 110 80, 115 90, 115 100 C 115 110, 110 115, 110 125 C 110 130, 105 135, 100 135" stroke="url(#brainGradient)" strokeWidth="0.8" opacity="0.6" />
    
    {/* Central neural connections and glowing nodes */}
    <line x1="100" y1="40" x2="100" y2="160" stroke="url(#brainGradient)" strokeWidth="0.8" opacity="0.5" strokeDasharray="3 3" />
    <circle cx="100" cy="40" r="3.5" fill="#ef4444" filter="url(#brainGlow)" />
    <circle cx="100" cy="90" r="4.5" fill="#a855f7" filter="url(#brainGlow)" />
    <circle cx="100" cy="160" r="3.5" fill="#3b82f6" filter="url(#brainGlow)" />
    
    <circle cx="70" cy="95" r="2.5" fill="#a855f7" />
    <circle cx="130" cy="95" r="2.5" fill="#a855f7" />
    <circle cx="60" cy="130" r="3.5" fill="#3b82f6" filter="url(#brainGlow)" />
    <circle cx="140" cy="130" r="3.5" fill="#3b82f6" filter="url(#brainGlow)" />
  </svg>
);

const PROJECTS_DATA = [
  {
    title: 'Realtime Leaderboard System',
    description: 'Developed a scalable realtime leaderboard system using Spring Boot and Microservices Architecture with JWT-based authentication, Redis caching, and Kafka event-driven communication.',
    tech: ['JAVA', 'SPRING BOOT', 'REACT', 'MYSQL', 'REDIS', 'KAFKA', 'JWT'],
    metric: '99.9% event synchronization efficiency',
    year: '2024',
    icon: <ServerIcon className="text-rose-500" />,
    githubLink: 'https://github.com/kamalesh-G-J/Real-Time-Leaderboard-System'
  },
  {
    title: 'Job Portal System',
    description: 'Developed a secure Job Portal System using Spring Boot and React with role-based authentication for employers and candidates.',
    tech: ['SPRING BOOT', 'REACT', 'MYSQL', 'JWT', 'SPRING SECURITY'],
    metric: '100% role-based access security rating',
    year: '2024',
    icon: <BriefcaseIcon className="text-rose-500" />,
    githubLink: 'https://github.com/kamalesh-G-J/Job-Portal-System'
  }
];

function ProjectCard({ proj, cardVariants, index }) {
  const cardRef = useRef(null);
  
  // Motion values for x/y mouse coordinates relative to the card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Create smooth springs for rotation
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const [mousePos, setMousePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    
    // Calculate normalized cursor coordinates (-0.5 to 0.5)
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);

    // Calculate percentage coords for spotlight glare
    const xPos = ((event.clientX - rect.left) / rect.width) * 100;
    const yPos = ((event.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: xPos, y: yPos, opacity: 0.08 });
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-[#0a0815]/90 border border-rose-950/40 rounded-2xl p-6 flex flex-col justify-between min-h-[360px] cursor-pointer perspective-container relative group hover:border-rose-900/40 transition-all duration-300 shadow-2xl"
    >
      {/* Glare spotlight glow */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 rounded-2xl"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(circle 200px at ${mousePos.x}% ${mousePos.y}%, rgba(244, 63, 94, 0.15), transparent)`
        }}
      />

      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {/* Card Header: Icon & Year */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-2.5 rounded-xl bg-rose-500/5 border border-rose-950/30">
            {proj.icon}
          </div>
          <span className="text-xs font-semibold font-mono text-gray-500">
            {proj.year}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-xl font-bold text-white mb-3 tracking-wide transition-colors group-hover:text-rose-500">
          {proj.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-gray-400 leading-relaxed font-light mb-5 min-h-[54px]">
          {proj.description}
        </p>

        {/* Highlight Metric */}
        <div className="mb-5">
          <span className="text-xs font-semibold text-rose-500 block">
            {proj.metric}
          </span>
        </div>

        {/* Tech Stack Badge Pills */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {proj.tech.map((t) => (
            <span key={t} className="px-2.5 py-0.5 rounded-full bg-white/[0.02] border border-white/5 text-[9px] font-mono font-medium text-gray-400 group-hover:border-rose-950/30 group-hover:text-gray-300 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: GitHub & Page Indicator Dots */}
      <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center z-20" style={{ transform: "translateZ(20px)" }}>
        {/* GitHub link */}
        <motion.a
          href={proj.githubLink}
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="GitHub Repository"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon size={18} />
        </motion.a>

        {/* Hardcoded Pagination dots */}
        <div className="flex gap-1.5 items-center">
          <span className={`rounded-full transition-all duration-300 ${index === 0 ? 'bg-rose-500 w-2.5 h-2.5' : 'bg-gray-700 w-1.5 h-1.5'}`} />
          <span className={`rounded-full transition-all duration-300 ${index === 1 ? 'bg-rose-500 w-2.5 h-2.5' : 'bg-gray-700 w-1.5 h-1.5'}`} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="projects" className="py-12 bg-transparent">
      <div className="section-container text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading, Description & Brain Illustration */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-[10px] font-bold font-mono tracking-widest text-blue-400 uppercase mb-2">
                03. PROJECTS
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Recruiter-Focused <span className="text-rose-600">Projects.</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light max-w-sm">
                Production-grade projects with measurable impact in backend architecture, caching performance, real-time messaging pipelines, and full-stack development. Open any card to view source repositories.
              </p>
            </div>
            
            {/* Neural Brain Outline SVG Illustration */}
            <GlowingBrain />
          </div>

          {/* Right Column: Side-by-side Project Cards */}
          <div className="lg:col-span-8 w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {PROJECTS_DATA.map((proj, idx) => (
                <ProjectCard key={idx} proj={proj} cardVariants={cardVariants} index={idx} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
