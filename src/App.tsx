import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

// --- Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Portfolio.
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 border-b border-slate-700"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-gray-300 hover:bg-slate-700 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-400 font-mono mb-4"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Anil Kumar.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-slate-400 mb-8"
        >
          I build things for the web.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-slate-400 text-lg mb-12"
        >
          I'm a software engineer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently focusing on accessible, human-centered products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#projects"
            className="inline-block bg-transparent border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
          >
            Check out my work!
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

// --- About Component ---
const About = () => {
  const [isGrayscale, setIsGrayscale] = useState(false);

  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-2">About Me</h2>
          <div className="space-y-4 text-slate-400">
            <p>
              I’m a Full-Stack Developer and BCA graduate focused on building fast, scalable web applications.
              I work mainly with the MERN stack and enjoy turning real-world ideas into practical digital solutions.
            </p>
            <p>
              I’ve built projects like AI-powered tools and real-time apps, and I’m continuously improving
              my skills in modern technologies. My goal is to create clean, efficient code and deliver
              user-friendly products that solve real problems.
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer" onClick={() => setIsGrayscale(!isGrayscale)}>
          <div className="w-64 h-64 border-2 border-blue-500 rounded-xl absolute -bottom-4 -right-4 group-hover:-bottom-2 group-hover:-right-2 transition-all"></div>
          <div className={`w-64 h-64 bg-slate-800 rounded-xl overflow-hidden relative z-10 transition-all duration-500 ${isGrayscale ? 'grayscale' : 'grayscale-0'}`}>
            <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <p className="absolute -bottom-10 left-0 w-full text-center text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to toggle color!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// --- Skills Component ---
const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: <Globe className="text-blue-400" />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      icon: <Terminal className="text-purple-400" />,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma']
    },
    {
      title: 'Tools',
      icon: <Cpu className="text-emerald-400" />,
      skills: ['Vite', 'Git', 'Docker', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-16 inline-block border-b-4 border-blue-500 pb-2">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-6 flex justify-center">{cat.icon}</div>
              <h3 className="text-xl font-bold text-white mb-6 font-mono">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-sm border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Projects Component ---
const Projects = () => {
  const projects = [
    {
      title: 'Blogify',
      description: 'A full-stack blogging platform with user authentication and rich text editing.',
      tech: ['React', 'Node.js', 'Express', 'Prisma'],
      link: 'https://github.com/11anil/Blogify'
    },
    {
      title: 'Chess Web App',
      description: 'Real-time chess game with legal move highlighting and game state persistence.',
      tech: ['React', 'Chess.js', 'Tailwind'],
      link: 'https://github.com/11anil/chess'
    },
    {
      title: 'TODO NextJS',
      description: 'A modern todo application built with Next.js and server-side features.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      link: 'https://github.com/11anil/TODO-NextJS'
    },
    {
      title: 'News-web',
      description: 'A dynamic news portal that fetches and displays the latest headlines globally.',
      tech: ['React', 'API', 'Tailwind'],
      link: 'https://github.com/11anil/News-web'
    },
    {
      title: 'Dice-game',
      description: 'An interactive 2-player dice game with score tracking and win logic.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/11anil/Dice-game'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 inline-block border-b-4 border-purple-500 pb-2">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <Code2 size={48} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-blue-400 font-mono">{t}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-white text-sm hover:text-blue-500 transition-colors">
                  View Source <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Component ---
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6 underline decoration-blue-500 decoration-4 underline-offset-8">Get In Touch</h2>
          <p className="text-slate-400 mb-12">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:0711akumar@gmail.com"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105"
          >
            <Mail size={20} />
            <span>Say Hello</span>
          </a>
          <div className="mt-16 flex justify-center space-x-8">
            <a href="https://github.com/11anil" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={28} /></a>
            <a href="https://www.linkedin.com/in/anil-kumar-0a40a1220" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><FaLinkedin size={28} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="py-6 bg-slate-900 border-t border-slate-800 text-center">
      <p className="text-slate-500 text-sm">
        All rights reserved by Anil kumar. © 2026
      </p>
    </footer>
  );
};

// --- Main App Component ---
function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
