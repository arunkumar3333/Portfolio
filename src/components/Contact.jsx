import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { MdEmail, MdLocationOn, MdSend, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <MdEmail size={22} />,
    label: 'Email',
    value: 'arungowdav3@gmail.com',
    href: 'mailto:arungowdav3@gmail.com',
  },
  {
    icon: <MdPhone size={22} />,
    label: 'Phone',
    value: '+91 7411277145',
    href: 'tel:+917411277145',
  },
  {
    icon: <FaLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/arunkumarv03',
    href: 'https://www.linkedin.com/in/arunkumarv03/',
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    value: 'github.com/arunkumar3333',
    href: 'https://github.com/arunkumar3333',
  },
  {
    icon: <MdLocationOn size={22} />,
    label: 'Location',
    value: 'Bangalore, Karnataka – 563136',
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
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
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Let&apos;s Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I&apos;m currently open to new opportunities and collaborations. Whether you have a
              question, a project idea, or just want to say hi — my inbox is always open!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 glass rounded-xl hover:border-blue-500/40 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600/30 transition-colors duration-300 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                        <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300 text-sm">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass rounded-xl">
                      <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                        <p className="text-gray-300 text-sm">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-blue-500 rounded-xl text-white placeholder-gray-500 outline-none transition-colors duration-300 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-blue-500 rounded-xl text-white placeholder-gray-500 outline-none transition-colors duration-300 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-blue-500 rounded-xl text-white placeholder-colors-300 outline-none transition-colors duration-300 text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-blue-500 rounded-xl text-white placeholder-gray-500 outline-none transition-colors duration-300 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] neon-border"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <MdSend size={18} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm font-medium"
                >
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
