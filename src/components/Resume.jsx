  import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiDownload } from 'react-icons/hi';
import { MdOpenInNew } from 'react-icons/md';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-2">
            My resume
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Download <span className="gradient-text">Resume</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden"
        >
          {/* Resume Preview */}
          <div className="bg-gray-900/80 p-8 sm:p-12">
            <div className="max-w-2xl mx-auto">

              {/* Resume Header */}
              <div className="text-center mb-8 pb-6 border-b border-gray-700">
                <h3 className="text-3xl font-bold text-white mb-1">Arun Kumar V</h3>
                <p className="text-blue-400 font-medium mb-3">Full Stack Developer | MCA Graduate</p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-400">
                  <span>📧 arungowdav3@gmail.com</span>
                  <span>📱 +91 7411277145</span>
                  <span>📍 Kolar, Karnataka</span>
                </div>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-400 mt-1">
                  <span>🔗 linkedin.com/in/arunkumarv03</span>
                  <span>💻 github.com/arunkumar3333</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-6">
                <h4 className="text-blue-400 font-semibold uppercase tracking-wider mb-2 text-xs border-b border-gray-700 pb-1">
                  Professional Summary
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Full-Stack Developer with strong expertise in Java, Spring Boot, React.js, PostgreSQL, HTML, CSS, and JavaScript.
                  Experienced in building AI-powered applications using OCR (Tesseract), OpenCV, and LLM (Ollama) with cosine similarity.
                  Skilled in backend development, REST APIs, database design, and scalable web application development.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                {/* Education */}
                <div>
                  <h4 className="text-blue-400 font-semibold uppercase tracking-wider mb-3 text-xs border-b border-gray-700 pb-1">
                    Education
                  </h4>
                  <div className="space-y-3 text-gray-400 text-xs">
                    <div>
                      <p className="text-white font-semibold">Masters in Computer Applications</p>
                      <p>Sri Venkateshwara College of Engineering, Bangalore</p>
                      <p className="text-blue-400">CGPA: 8.6 &nbsp;|&nbsp; 2024–2026</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Bachelors in Computer Applications</p>
                      <p>Govt First Grade College, Kolar</p>
                      <p className="text-blue-400">CGPA: 8.99 &nbsp;|&nbsp; 2021–2024</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-blue-400 font-semibold uppercase tracking-wider mb-3 text-xs border-b border-gray-700 pb-1">
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {[
                      'Java', 'C++', 'Spring Boot', 'React.js', 'AngularJS',
                      'HTML5', 'CSS3', 'JavaScript', 'Hibernate', 'MySQL',
                      'PostgreSQL', 'Apache POI', 'Chart.js', 'Postman',
                    ].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="text-blue-400 font-semibold uppercase tracking-wider mb-3 text-xs border-b border-gray-700 pb-1">
                    Internship
                  </h4>
                  <div className="text-gray-400 text-xs space-y-1">
                    <p className="text-white font-semibold">Full Stack Developer Intern</p>
                    <p className="text-blue-400">Techspiration India Pvt Ltd</p>
                    <p>February 2026</p>
                    <p className="text-gray-500 leading-relaxed mt-1">
                      Built SmartScan AI Evaluator using Java Spring Boot, React.js, PostgreSQL,
                      Tesseract OCR, OpenCV &amp; Ollama LLM.
                    </p>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="text-blue-400 font-semibold uppercase tracking-wider mb-3 text-xs border-b border-gray-700 pb-1">
                    Projects
                  </h4>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• SmartScan AI Evaluator</li>
                    <li>• Carbon Emission Calculator</li>
                    <li>• AI Resume Screening System</li>
                  </ul>
                </div>

                {/* Certifications */}
                <div className="sm:col-span-2">
                  <h4 className="text-blue-400 font-semibold uppercase tracking-wider mb-3 text-xs border-b border-gray-700 pb-1">
                    Certifications
                  </h4>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Full Stack Web Development Workshop (1-week intensive program)</li>
                    <li>• IobiT Solutions, Bengaluru: Innovating with IoT – Process Design &amp; Development (3 days)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-gray-700/50 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download="Arun-Kumar-V-Resume.pdf"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 neon-border"
            >
              <HiDownload size={20} />
              Download Resume (PDF)
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 glass border border-blue-500/50 text-blue-400 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:bg-blue-500/10"
            >
              <MdOpenInNew size={20} />
              View Full Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
