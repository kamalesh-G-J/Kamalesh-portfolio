import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValue, useSpring } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

// Scroll to top on route change to make pages feel like fresh loads
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();

  // Mouse Coordinates for follow glow
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Springs configuration for lagging movement
  const springConfig = { damping: 60, stiffness: 250, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half of orb size (150px) to center it under mouse
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [isDarkMode]);

  return (
    <div className="relative min-h-screen text-gray-100 selection:bg-blue-500/10 selection:text-blue-200 antialiased font-sans overflow-x-hidden flex flex-col justify-between">
      <ScrollToTop />
      <BackgroundAnimation />
      
      {/* Subtle Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Subtle Mouse-Follow Lighting Orb */}
      <motion.div
        className="fixed pointer-events-none z-10 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-[80px] hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      {/* Navigation */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Content Layout with Route-based Views */}
      <main className="flex-grow w-full relative z-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<div className="pt-24 pb-12"><About /></div>} />
          <Route path="/skills" element={<div className="pt-24 pb-12"><Skills /></div>} />
          <Route path="/projects" element={<div className="pt-24 pb-12"><Projects /></div>} />
          <Route path="/contact" element={<div className="pt-24 pb-12"><Contact /></div>} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
