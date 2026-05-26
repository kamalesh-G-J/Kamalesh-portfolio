import { motion } from 'framer-motion';

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

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-[#030303] text-gray-500 font-mono text-[10px] tracking-wide relative z-20">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        
        {/* Left: Name and Copyright */}
        <div>
          <span>Kamalesh G J &copy; {new Date().getFullYear()}</span>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
            aria-label="GitHub"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <GithubIcon size={14} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
            aria-label="LinkedIn"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <LinkedinIcon size={14} />
          </motion.a>
          <motion.a
            href="https://codechef.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors cursor-pointer font-bold font-sans text-[11px] leading-none"
            aria-label="CodeChef"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            CC
          </motion.a>
        </div>

      </div>
    </footer>
  );
}
