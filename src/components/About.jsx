import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaCode size={24} />,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable, and well-documented code.',
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: 'Full Stack',
    desc: 'Java Spring Boot backend + React.js frontend expertise.',
  },
  {
    icon: <FaRocket size={24} />,
    title: 'AI Builder',
    desc: 'Building AI-powered apps with OCR, OpenCV & LLMs.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-2">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80"
                alt="Developer workspace"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent rounded-2xl" />
            </div>
            {/* Stats */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              {[
                { value: '8.6', label: 'MCA CGPA' },
                { value: '3+', label: 'Projects' },
                { value: '2', label: 'Certifications' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-3 text-center">
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Full Stack Developer &amp; MCA Graduate
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              I&apos;m <span className="text-white font-medium">Arun Kumar V</span>, a Full-Stack
              Developer with strong expertise in Java, Spring Boot, React.js, PostgreSQL, HTML, CSS,
              and JavaScript. I completed my BCA from Govt First Grade College, Kolar (CGPA: 8.99)
              and my MCA from Sri Venkateshwara College of Engineering, Bangalore (CGPA: 8.6).
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              I have hands-on experience building real-world projects during my MCA, including the
              <span className="text-blue-400 font-medium"> SmartScan AI Evaluator</span> — an
              AI-powered answer sheet evaluation system using OCR (Tesseract), OpenCV for image
              preprocessing, and LLM (Ollama) with cosine similarity for automated scoring.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              I&apos;m skilled in backend development, REST APIs, database design, and scalable web
              application development. I speak English, Kannada, Hindi, and Telugu, and I&apos;m
              based in Bangalore, Karnataka.
            </p>

            {/* Education quick view */}
            <div className="glass rounded-xl p-4 mb-6 border border-blue-500/20">
              <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-3">Education</p>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white text-sm font-medium">Masters in Computer Applications</p>
                    <p className="text-gray-400 text-xs">Sri Venkateshwara College of Engineering, Bangalore</p>
                  </div>
                  <span className="text-blue-400 text-xs font-semibold ml-4 flex-shrink-0">8.6 CGPA</span>
                </div>
                <div className="border-t border-gray-700/50 pt-2 flex justify-between items-start">
                  <div>
                    <p className="text-white text-sm font-medium">Bachelors in Computer Applications</p>
                    <p className="text-gray-400 text-xs">Govt First Grade College, Kolar</p>
                  </div>
                  <span className="text-blue-400 text-xs font-semibold ml-4 flex-shrink-0">8.99 CGPA</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Problem Solving', 'Team Collaboration', 'Communication', 'OOP', 'Debugging'].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="text-blue-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
