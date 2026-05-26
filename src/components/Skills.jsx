import { motion } from 'framer-motion';

export default function Skills() {
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
    <section id="skills" className="py-12 bg-transparent">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stack Philosophy & 2x2 Core Stack Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div variants={itemVariants}>
              <h2 className="text-[10px] font-bold font-mono tracking-widest text-blue-400 uppercase mb-2">
                02. TECHNICAL STACK
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Stack built for <span className="text-rose-600">performance</span>
              </h3>
              <div className="text-gray-400 font-light leading-relaxed text-sm md:text-base space-y-4 max-w-xl">
                <p>
                  I leverage a modern, robust, and clean development stack. From enterprise Java backends and scalable microservices to high-speed caching and database persistency, my engineering decisions prioritize scalability, speed, and safety.
                </p>
                <p>
                  On the frontend, I build highly interactive and fluid web interfaces with React, state management, and modern CSS frameworks, ensuring a premium user experience across all devices.
                </p>
              </div>
            </motion.div>

            {/* 2x2 Core Stack Highlights (Matching About Page UI) */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 max-w-xl"
            >
              {/* Highlight Card 1 */}
              <div className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-5 hover:border-rose-900/30 transition-colors">
                <span className="text-2xl font-extrabold text-rose-500 font-mono block mb-1">
                  Core
                </span>
                <span className="text-xs font-bold text-white block mb-0.5">
                  Java & Spring Boot
                </span>
                <span className="text-[10px] text-gray-500 font-light leading-relaxed">
                  Enterprise-grade backend APIs and RESTful microservices
                </span>
              </div>

              {/* Highlight Card 2 */}
              <div className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-5 hover:border-rose-900/30 transition-colors">
                <span className="text-2xl font-extrabold text-rose-500 font-mono block mb-1">
                  Database
                </span>
                <span className="text-xs font-bold text-white block mb-0.5">
                  Caching & SQL/NoSQL
                </span>
                <span className="text-[10px] text-gray-500 font-light leading-relaxed">
                  MySQL, Redis caching sets, and MongoDB data pipelines
                </span>
              </div>

              {/* Highlight Card 3 */}
              <div className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-5 hover:border-rose-900/30 transition-colors">
                <span className="text-2xl font-extrabold text-rose-500 font-mono block mb-1">
                  Frontend
                </span>
                <span className="text-xs font-bold text-white block mb-0.5">
                  React & Tailwind
                </span>
                <span className="text-[10px] text-gray-500 font-light leading-relaxed">
                  Highly interactive, responsive user interfaces and styling
                </span>
              </div>

              {/* Highlight Card 4 */}
              <div className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-5 hover:border-rose-900/30 transition-colors">
                <span className="text-2xl font-extrabold text-rose-500 font-mono block mb-1">
                  Quality
                </span>
                <span className="text-xs font-bold text-white block mb-0.5">
                  Testing & Delivery
                </span>
                <span className="text-[10px] text-gray-500 font-light leading-relaxed">
                  JUnit, Mockito unit test suites, Git, and Docker deployment
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills Panel Categories (Matching About Page UI) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
            
            {/* Backend & Languages Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-6 hover:border-rose-900/20 transition-all duration-300 shadow-xl"
            >
              <h4 className="text-rose-500 font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Languages & Backend
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      Programming Languages
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Java, Python, JavaScript, and structured SQL queries
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      Spring Boot Framework
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Microservices, Spring Security, Hibernate ORM, and REST APIs
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Databases & Caching Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-6 hover:border-rose-900/20 transition-all duration-300 shadow-xl"
            >
              <h4 className="text-rose-500 font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Databases & Cache
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      Persistence & NoSQL Databases
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      MySQL, PostgreSQL relational databases, and MongoDB collections
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      High-Performance Caching
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Redis cache layers, message brokers, and event synchronization
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Frontend & Tools Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#0a0c10]/60 border border-white/5 rounded-2xl p-6 hover:border-rose-900/20 transition-all duration-300 shadow-xl"
            >
              <h4 className="text-rose-500 font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Frontend & Dev Tools
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      UI Design & Client Views
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      ReactJS, HTML5, CSS3, and Tailwind CSS responsive styling
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      Development & Delivery Tools
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      Git, GitHub repository version controls, Docker containers, and Postman API testing
                    </span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <div className="text-xs">
                    <span className="text-white font-medium block">
                      Quality Assurance Testing
                    </span>
                    <span className="text-gray-400 block font-light mt-0.5">
                      JUnit, Mockito unit test suites, and Selenium browser automation
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
