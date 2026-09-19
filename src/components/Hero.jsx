import { ReactTyped } from 'react-typed';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-medium mb-3 tracking-widest uppercase text-sm"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Arun Kumar V</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6 h-10"
            >
              I&apos;m a{' '}
              <ReactTyped
                strings={[
                  'Full Stack Developer',
                  'Java & Spring Boot Dev',
                  'React.js Developer',
                  'AI Application Builder',
                  'MCA Graduate',
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
                className="text-blue-400"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Full-Stack Developer with strong expertise in Java, Spring Boot, React.js, and PostgreSQL.
              Experienced in building AI-powered applications using OCR, OpenCV, and LLM technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Link to="projects" smooth duration={500}>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 neon-border">
                  View Projects
                </button>
              </Link>
              <a
                href="/resume.pdf"
                download="Arun-Kumar-V-Resume.pdf"
                className="px-6 py-3 glass border border-blue-500/50 text-blue-400 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:bg-blue-500/10 flex items-center gap-2"
              >
                <HiDownload size={18} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                {
                  icon: <FaGithub size={22} />,
                  href: 'https://github.com/arunkumar3333',
                  label: 'GitHub',
                },
                {
                  icon: <FaLinkedin size={22} />,
                  href: 'https://www.linkedin.com/in/arunkumarv03/',
                  label: 'LinkedIn',
                },
                {
                  icon: <MdEmail size={22} />,
                  href: 'mailto:arungowdav3@gmail.com',
                  label: 'Email',
                },
                {
                  icon: <FaPhone size={20} />,
                  href: 'tel:+917411277145',
                  label: 'Phone',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 glass rounded-xl text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md opacity-60 animate-pulse" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-blue-500/50 neon-border">
                <img
                  src={profileImg}
                  alt="Arun Kumar V - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass px-3 py-2 rounded-xl border border-blue-500/30"
              >
                <span className="text-xs font-semibold text-blue-400">Available for hire ✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-blue-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
