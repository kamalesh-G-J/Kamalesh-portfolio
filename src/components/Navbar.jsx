import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', id: 'home', path: '/' },
  { label: 'About', id: 'about', path: '/about' },
  { label: 'Skills', id: 'skills', path: '/skills' },
  { label: 'Projects', id: 'projects', path: '/projects' },
  { label: 'Contact', id: 'contact', path: '/contact' },
];

const MotionLink = motion(Link);

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030303]/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container flex justify-between items-center w-full">
        {/* Text Logo */}
        <MotionLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-base font-semibold tracking-wide text-white hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Kamalesh G J
        </MotionLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item, idx) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 + 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`text-[13px] font-medium transition-colors relative py-1 focus:outline-none cursor-pointer ${
                    activePath === item.path ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activePath === item.path && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-blue-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle Theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </motion.button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full border-b border-white/5 bg-[#030303]/95 backdrop-blur-lg md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="px-6 py-5 flex flex-col gap-3 text-left">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`w-full block py-1.5 text-sm font-medium transition-colors text-left ${
                      activePath === item.path ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
