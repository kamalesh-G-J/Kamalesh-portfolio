import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
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
            07. CONTACT
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-2xl font-bold text-white"
          >
            Start A Conversation
          </motion.h3>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Form */}
          <div className="md:col-span-7 flex">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="glass-card gradient-border rounded-xl p-6 border border-white/5 w-full flex flex-col justify-between"
            >
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-[10px] font-mono text-gray-500 uppercase mb-1.5 tracking-wider font-semibold">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/3 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500/30 focus:bg-white/[0.04] focus:shadow-[0_0_15px_rgba(59,130,246,0.08)] transition-all w-full"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-[10px] font-mono text-gray-500 uppercase mb-1.5 tracking-wider font-semibold">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/3 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500/30 focus:bg-white/[0.04] focus:shadow-[0_0_15px_rgba(59,130,246,0.08)] transition-all w-full"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-[10px] font-mono text-gray-500 uppercase mb-1.5 tracking-wider font-semibold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/3 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500/30 focus:bg-white/[0.04] focus:shadow-[0_0_15px_rgba(59,130,246,0.08)] transition-all w-full resize-none"
                    placeholder="Describe your message..."
                  />
                </div>

                {/* Action status & buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                  <div className="h-5 flex items-center justify-start text-[10px] font-mono">
                    <AnimatePresence mode="wait">
                      {status === 'success' && (
                        <motion.span
                          key="success"
                          initial={{ opacity: 0, y: 3 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-green-400 flex items-center gap-1 font-semibold"
                        >
                          <CheckCircle size={12} /> Message delivered!
                        </motion.span>
                      )}
                      {status === 'error' && (
                        <motion.span
                          key="error"
                          initial={{ opacity: 0, y: 3 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-400 flex items-center gap-1 font-semibold"
                        >
                          <AlertCircle size={12} /> Fill all fields.
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right Column: Contact Links */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              className="glass-card gradient-border rounded-xl p-5 border border-white/5 flex flex-col justify-center flex-grow"
            >
              <h4 className="text-sm font-semibold text-white mb-2">Reach Out Directly</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">
                I am looking for Java Full Stack and Backend engineering internships and full-time opportunities. Drop a line if you have an opening!
              </p>

              <div className="space-y-4">
                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/3 hover:bg-white/5 border border-white/5 hover:border-white/10 rounded-lg text-xs font-mono text-gray-300 transition-all cursor-pointer"
                  whileHover={{ x: 3, borderColor: 'rgba(168, 85, 247, 0.2)' }}
                  transition={{ duration: 0.2 }}
                >
                  <LinkedinIcon size={14} className="text-purple-400" />
                  <span>linkedin.com/in/kamaleshgj</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
