import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolioData';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiSpringboot, SiPostgresql } from 'react-icons/si';
import { TbBrandVscode, TbBrandAngular } from 'react-icons/tb';

const iconMap = {
  HTML: <FaHtml5 className="text-orange-500" size={28} />,
  CSS: <FaCss3Alt className="text-blue-500" size={28} />,
  JavaScript: <FaJs className="text-yellow-400" size={28} />,
  'React.js': <FaReact className="text-cyan-400" size={28} />,
  'Tailwind CSS': <SiTailwindcss className="text-teal-400" size={28} />,
  Java: <FaJava className="text-red-500" size={28} />,
  'Spring Boot': <SiSpringboot className="text-green-500" size={28} />,
  MySQL: <SiMysql className="text-blue-400" size={28} />,
  PostgreSQL: <SiPostgresql className="text-blue-500" size={28} />,
  Git: <FaGitAlt className="text-orange-600" size={28} />,
  GitHub: <FaGithub className="text-gray-300" size={28} />,
  'VS Code': <TbBrandVscode className="text-blue-500" size={28} />,
};

// Extra skills shown as tags (from CV)
const extraSkills = {
  languages: ['Java', 'C++'],
  web: ['HTML5', 'CSS3', 'JavaScript', 'AngularJS', 'ReactJS'],
  backend: ['Java Servlets', 'Spring Boot', 'Hibernate'],
  database: ['MySQL', 'SQL', 'PostgreSQL', 'Relational DB Design'],
  tools: ['Eclipse IDE', 'XAMPP', 'Visual Studio', 'Postman'],
  libraries: ['Apache POI', 'Chart.js', 'Recharts'],
  concepts: ['OOP', 'Web App Development', 'Debugging', 'REST APIs'],
};

const categories = [
  { key: 'frontend', label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  { key: 'backend', label: 'Backend', color: 'from-green-500 to-emerald-500' },
  { key: 'database', label: 'Database', color: 'from-purple-500 to-violet-500' },
  { key: 'tools', label: 'Tools', color: 'from-orange-500 to-amber-500' },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {iconMap[name] ?? <span className="w-7 h-7" />}
          <span className="text-sm font-medium text-gray-300">{name}</span>
        </div>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 bg-gray-950">
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
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Proficiency bars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`} />
                <h3 className="font-bold text-white">{cat.label}</h3>
              </div>
              {skills[cat.key].map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={catIdx * 0.1 + i * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Full tech stack tags from CV */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-center font-bold text-white mb-6 text-lg">
            Complete <span className="gradient-text">Tech Stack</span>
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Languages', items: extraSkills.languages, color: 'text-red-400 border-red-500/20 bg-red-500/10' },
              { label: 'Web', items: extraSkills.web, color: 'text-blue-400 border-blue-500/20 bg-blue-500/10' },
              { label: 'Backend', items: extraSkills.backend, color: 'text-green-400 border-green-500/20 bg-green-500/10' },
              { label: 'Database', items: extraSkills.database, color: 'text-purple-400 border-purple-500/20 bg-purple-500/10' },
              { label: 'Tools', items: extraSkills.tools, color: 'text-orange-400 border-orange-500/20 bg-orange-500/10' },
              { label: 'Libraries', items: extraSkills.libraries, color: 'text-pink-400 border-pink-500/20 bg-pink-500/10' },
              { label: 'Concepts', items: extraSkills.concepts, color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10' },
            ].map(({ label, items, color }) => (
              <div key={label} className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-500 w-20 flex-shrink-0 font-medium">{label}:</span>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 text-xs font-medium border rounded-lg ${color}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
