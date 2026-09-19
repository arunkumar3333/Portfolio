import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { projects } from '../data/portfolioData';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { MdCode, MdLightbulb, MdBuild, MdCalculate } from 'react-icons/md';

/* ─── Modal ─────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-white/10 shadow-2xl"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
            aria-label="Close modal"
          >
            <FaTimes size={16} />
          </button>

          {/* Hero Image */}
          <div className="relative h-52 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
            {/* Badge */}
            <span
              className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${project.badgeColor}`}
            >
              {project.badge}
            </span>
            <div className="absolute bottom-4 left-6">
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-blue-300 text-sm">{project.tagline}</p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Description */}
            <p className="text-gray-300 leading-relaxed">{project.description}</p>

            {/* Goal */}
            <div className="glass rounded-xl p-4 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <MdLightbulb className="text-yellow-400" size={18} />
                <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Goal</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{project.goal}</p>
            </div>

            {/* How it's used */}
            <div className="glass rounded-xl p-4 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <MdBuild className="text-purple-400" size={18} />
                <h3 className="font-semibold text-white text-sm uppercase tracking-wider">How It Works</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{project.use}</p>
            </div>

            {/* Formula (if present) */}
            {project.formula && (
              <div className="glass rounded-xl p-4 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <MdCalculate className="text-green-400" size={18} />
                  <h3 className="font-semibold text-white text-sm uppercase tracking-wider">
                    Scoring Formula
                  </h3>
                </div>
                <code className="text-green-300 text-sm font-mono">{project.formula}</code>
              </div>
            )}

            {/* Features */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MdCode className="text-blue-400" size={18} />
                <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Key Features</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <FaCheckCircle className="text-blue-400 mt-0.5 flex-shrink-0" size={13} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack by Category */}
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
                Tech Stack
              </h3>
              <div className="space-y-3">
                {Object.entries(project.techCategories).map(([cat, techs]) => (
                  <div key={cat} className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-gray-500 w-20 flex-shrink-0">{cat}:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {techs.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 glass border border-gray-600 hover:border-blue-500/60 text-gray-300 hover:text-white rounded-xl text-sm font-semibold transition-all duration-300"
              >
                <FaGithub size={16} />
                View on GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all duration-300"
              >
                <FaExternalLinkAlt size={13} />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Project Card ───────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.12 }}
        className="glass rounded-2xl overflow-hidden group hover:border-blue-500/40 transition-all duration-300 flex flex-col"
      >
        {/* Image */}
        <div className="relative overflow-hidden h-48 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
          <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge */}
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${project.badgeColor}`}
          >
            {project.badge}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-blue-400 text-xs font-medium mb-3">{project.tagline}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Expandable Details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {/* Goal */}
                <div className="mb-3 p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                  <p className="text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-1">
                    🎯 Goal
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">{project.goal}</p>
                </div>

                {/* How it works */}
                <div className="mb-3 p-3 rounded-xl bg-purple-500/5 border border-purple-500/20">
                  <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                    ⚙️ How It Works
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">{project.use}</p>
                </div>

                {/* Formula */}
                {project.formula && (
                  <div className="mb-3 p-3 rounded-xl bg-green-500/5 border border-green-500/20">
                    <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">
                      📊 Formula
                    </p>
                    <code className="text-green-300 text-xs font-mono">{project.formula}</code>
                  </div>
                )}

                {/* Features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    ✅ Key Features
                  </p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                        <FaCheckCircle className="text-blue-400 mt-0.5 flex-shrink-0" size={11} />
                        {f}
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-blue-400 text-xs pl-4">
                        +{project.features.length - 4} more features...
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="px-2 py-0.5 text-xs font-medium bg-gray-700/50 text-gray-400 border border-gray-600/30 rounded-lg">
                +{project.tech.length - 5} more
              </span>
            )}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Toggle expand */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-center gap-1.5 py-2 mb-3 text-xs font-medium text-gray-400 hover:text-blue-400 border border-gray-700/50 hover:border-blue-500/40 rounded-xl transition-all duration-200"
          >
            {expanded ? (
              <>
                <FaChevronUp size={11} /> Show Less
              </>
            ) : (
              <>
                <FaChevronDown size={11} /> Show Details
              </>
            )}
          </button>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 glass border border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white rounded-xl text-xs font-semibold transition-all duration-300"
            >
              <FaGithub size={14} />
              GitHub
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-all duration-300"
            >
              <FaExternalLinkAlt size={12} />
              Full Details
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-2">
            What I&apos;ve built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Real-world projects combining AI, full-stack development, and data processing.
            Click <span className="text-blue-400 font-medium">Show Details</span> or{' '}
            <span className="text-blue-400 font-medium">Full Details</span> to explore each project in depth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
