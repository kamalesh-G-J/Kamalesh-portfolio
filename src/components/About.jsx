import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-12 bg-transparent">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Bio & 2x2 Grid Stats & Profile Illustration */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div variants={itemVariants}>
              <h2 className="text-[10px] font-bold font-mono tracking-widest text-blue-400 uppercase mb-2">
                01. ABOUT ME
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Profile built for <span className="text-rose-600">recruiters</span>
              </h3>
              <div className="text-gray-400 font-light leading-relaxed text-sm md:text-base space-y-4 max-w-xl">
                <p>
                  I am a B.Tech Artificial Intelligence and Data Science student passionate about backend engineering, scalable systems, and full-stack development. I enjoy building secure and high-performance applications using Spring Boot, React, Redis, Kafka, and modern software engineering practices.
                </p>
                <p>
                  Through competitive programming and dedicated hands-on development, I continuously refine my understanding of data structures, algorithm complexities, concurrency, caching patterns, and database optimizations.
                </p>
              </div>
            </motion.div>

            {/* 2x2 Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 max-w-xl"
            >
              {/* Stat Card 1 */}
              <div className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-5 hover:border-rose-900/30 transition-colors">
                <span className="text-3xl font-extrabold text-rose-500 font-mono block mb-1">
                  370+
                </span>
                <span className="text-xs font-bold text-white block mb-0.5">
                  CodeChef Solved
                </span>
                <span className="text-[10px] text-gray-500 font-light leading-relaxed">
                  competitive programming challenges solved
                </span>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-5 hover:border-rose-900/30 transition-colors">
                <span className="text-3xl font-extrabold text-rose-500 font-mono block mb-1">
                  200+
                </span>
                <span className="text-xs font-bold text-white block mb-0.5">
                  LeetCode Solved
                </span>
                <span className="text-[10px] text-gray-500 font-light leading-relaxed">
                  algorithm complexity & details practice
                </span>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-5 hover:border-rose-900/30 transition-colors">
                <span className="text-3xl font-extrabold text-rose-500 font-mono block mb-1">
                  1550+
                </span>
                <span className="text-xs font-bold text-white block mb-0.5">
                  LeetCode Contest Rating
                </span>
                <span className="text-[10px] text-gray-500 font-light leading-relaxed">
                  peak competitive tournament rating
                </span>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-5 hover:border-rose-900/30 transition-colors">
                <span className="text-3xl font-extrabold text-rose-500 font-mono block mb-1">
                  4+
                </span>
                <span className="text-xs font-bold text-white block mb-0.5">
                  Certifications
                </span>
                <span className="text-[10px] text-gray-500 font-light leading-relaxed">
                  AWS Cloud, Spring Boot, DSA, and SQL credentials
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Education, Latest Experience & Projects, Certifications */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">

            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-6 hover:border-rose-900/20 transition-all duration-300 shadow-xl"
            >
              <h4 className="text-rose-500 font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Education
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      B.Tech AI & DS
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Sri Eshwar College of Engineering · CGPA 7.56 (2023–2027)
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      HSC
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Sri Vidya Mandir Matriculation HSS · 86.6% (2021–2023)
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      SSLC
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Sri Vidya Mandir Matriculation HSS (2020–2021)
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Latest Experience & Projects Card */}
            <motion.div
              variants={itemVariants}
              className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-6 hover:border-rose-900/20 transition-all duration-300 shadow-xl"
            >
              <h4 className="text-rose-500 font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Latest Experience & Projects
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      Java Full Stack Intern at RAMPeX Technologies
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Worked on Spring Boot APIs, React UI, JWT filters, and unit testing (2024)
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      MERN Stack Intern at G-Soft Solutions
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Built full-stack layouts with MongoDB, Express.js, React, and Node.js (2023–2024)
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      Real-Time Leaderboard System
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Redis sorted sets caching, Kafka sync topics, and Spring Boot backend (2024)
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      Job Portal System
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Role-based security filters candidate/employer portals, React state views (2024)
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              variants={itemVariants}
              className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-6 hover:border-rose-900/20 transition-all duration-300 shadow-xl"
            >
              <h4 className="text-rose-500 font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Certifications
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      AWS Cloud Foundations
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Amazon Web Services (AWS) credential (2023)
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      Spring Boot Certification
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Udemy Academic Program credential (2023)
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      DSA Certification
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Coding Abstractions credential (2023)
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      HackerRank SQL Certified
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      HackerRank Testing Center credential (2023)
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
