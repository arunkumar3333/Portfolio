import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link to="hero" smooth duration={500} className="cursor-pointer">
            <span className="text-2xl font-bold gradient-text">Portfolio</span>
          </Link>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            {['hero', 'about', 'skills', 'projects', 'internship', 'certifications', 'contact'].map(
              (section) => (
                <Link
                  key={section}
                  to={section}
                  smooth
                  duration={500}
                  className="hover:text-blue-400 cursor-pointer transition-colors duration-200 capitalize"
                >
                  {section === 'hero' ? 'Home' : section}
                </Link>
              )
            )}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: <FaGithub size={18} />, href: 'https://github.com/arunkumar3333', label: 'GitHub' },
              { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/arunkumarv03/', label: 'LinkedIn' },
              { icon: <FaInstagram size={18} />, href: 'https://instagram.com', label: 'Instagram' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {year} Arun Kumar V. Made with{' '}
            <FaHeart className="text-red-500" size={12} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
