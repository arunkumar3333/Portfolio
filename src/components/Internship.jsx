import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { internships } from '../data/portfolioData';
import { MdWork, MdLocationOn, MdCalendarToday } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';

export default function Internship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="internship" className="py-20 bg-gray-950">
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
            Work experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {internships.map((intern, index) => (
            <motion.div
              key={intern.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent hidden sm:block" />

              <div className="glass rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
                    <MdWork className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{intern.role}</h3>
                    <p className="text-blue-400 font-semibold text-lg mb-2">{intern.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <MdCalendarToday size={14} />
                        {intern.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MdLocationOn size={14} />
                        {intern.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {intern.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-3 text-gray-400 text-sm"
                      >
                        <FaCheckCircle className="text-blue-400 mt-0.5 flex-shrink-0" size={14} />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {intern.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
