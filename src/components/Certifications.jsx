import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import { MdVerified, MdCalendarToday, MdOpenInNew, MdClose, MdDownload } from 'react-icons/md';

/* ── Certificate Preview Modal ─────────────────────────── */
function CertModal({ cert, onClose }) {
  const isPdf = cert.link.endsWith('.pdf');

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
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <div>
              <h3 className="font-bold text-white text-sm">{cert.title}</h3>
              <p className="text-blue-400 text-xs">{cert.organization}</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={cert.link}
                download
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-200"
              >
                <MdDownload size={14} />
                Download
              </a>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 glass border border-gray-600 hover:border-blue-500/50 text-gray-300 text-xs font-medium rounded-lg transition-colors duration-200"
              >
                <MdOpenInNew size={14} />
                Open
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                aria-label="Close"
              >
                <MdClose size={18} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 max-h-[75vh] overflow-auto">
            {isPdf ? (
              <iframe
                src={cert.link}
                title={cert.title}
                className="w-full h-[65vh] rounded-xl border border-gray-700"
              />
            ) : (
              <img
                src={cert.link}
                alt={cert.title}
                className="w-full rounded-xl object-contain max-h-[65vh]"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Main Section ───────────────────────────────────────── */
export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="py-20 bg-gray-900/50">
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
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 group flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                <MdVerified className="text-blue-400" size={24} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-2">{cert.organization}</p>
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
                  <MdCalendarToday size={12} />
                  {cert.date}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSelected(cert)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white rounded-xl text-sm font-medium transition-all duration-300"
                >
                  <MdVerified size={14} />
                  View
                </button>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 glass border border-gray-600 hover:border-blue-500/50 text-gray-400 hover:text-white rounded-xl text-sm font-medium transition-all duration-300"
                  title="Open in new tab"
                >
                  <MdOpenInNew size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <CertModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
