import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  ExternalLink,
  Code2,
  Globe,
  ChevronDown,
  ArrowRight,
  Server,
  Database,
  Wrench,
  Briefcase,
  Calendar,
  Trophy
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

// --- Navbar Component ---
interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full transition-all duration-300 ease-in-out ${isScrolled && !isMobileMenuOpen ? '-translate-y-28 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}>
      <div className={`mx-auto rounded-full border transition-all duration-300 ${isScrolled
        ? 'bg-[#fafaf9]/85 dark:bg-[#0d0d0c]/85 backdrop-blur-md shadow-md py-2.5 px-6 border-neutral-200/60 dark:border-neutral-800/60'
        : 'bg-white/95 dark:bg-[#181816]/95 border-neutral-200/50 dark:border-neutral-800/50 py-3.5 px-6 shadow-sm'
        }`}>
        <div className="flex justify-between items-center">
          {/* Logo & Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/avatar.png"
              alt="Anil Kumar"
              className="w-8 h-8 rounded-full object-cover border border-neutral-200 dark:border-neutral-800"
            />
            <span className="font-sans font-semibold text-xs tracking-wide text-[#37322f] dark:text-neutral-50">
              Anil Kumar
            </span>
          </motion.div>

          {/* Desktop Nav Links - Matching Dheeraj Jha's typography: 13px, not uppercase */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-neutral-500 hover:text-[#37322f] dark:text-neutral-400 dark:hover:text-neutral-100 font-sans transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side: CTA Button, Theme Toggle & Mobile Menu Btn */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white hover:bg-neutral-50 active:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:active:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Let's Work Together CTA - matching Dheeraj Jha's styles */}
            <a
              href="#contact"
              className="hidden sm:inline-block border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600 bg-white hover:bg-neutral-50 active:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:active:bg-neutral-800 text-neutral-800 active:text-neutral-800 dark:text-neutral-200 px-4 py-1.5 rounded-full text-[13px] font-medium shadow-sm transition-all"
            >
              Let's Work Together
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-neutral-900/20 dark:bg-neutral-950/50 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 bg-white dark:bg-[#181816] rounded-2xl p-6 shadow-xl border border-neutral-200/70 dark:border-neutral-800/70 z-50 md:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white py-1.5 transition-colors border-b border-neutral-100 dark:border-neutral-800 last:border-0"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-[#37322f] hover:bg-[#272422] active:bg-[#1a1816] active:text-white text-white dark:bg-white dark:text-neutral-900 py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-sm"
                >
                  Let's Work Together
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-36 pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern mask-radial opacity-70 dark:opacity-40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 w-full">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#37322f]/80 dark:text-neutral-400 font-sans uppercase">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline - Exact size & style of dheerajjha.com H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-serif font-normal text-[#37322f] dark:text-neutral-50 mb-8 leading-[1.1] sm:leading-[1.15] md:leading-[1.2] max-w-4xl text-left"
        >
          Engineering{" "}
          <span className="font-serif italic font-light text-neutral-600 dark:text-neutral-400">
            high-performance web systems
          </span>{" "}
          that power business growth.
        </motion.h1>

        {/* Supporting Paragraph - Exact size of dheerajjha.com paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-[rgba(55,50,47,0.80)] dark:text-neutral-400 text-base sm:text-[17px] md:text-lg font-normal leading-[1.6] sm:leading-[1.65] md:leading-7 mb-10 font-sans font-light text-left"
        >
          I'm a Full Stack Developer specializing in building scalable, accessible, and clean-code digital products. I translate complex user needs and business requirements into fast, maintainable web architectures.
        </motion.p>

        {/* CTA Buttons - Matching colors & styling from Dheeraj's portfolio, fixing active text color display bug */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 bg-[#37322f] hover:bg-[#272422] active:bg-[#1a1816] active:text-white text-white dark:bg-white dark:hover:bg-neutral-100 dark:active:bg-neutral-200 dark:active:text-neutral-900 dark:text-neutral-900 font-medium px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform active:scale-[0.98] w-full sm:w-52 text-base font-sans text-center"
          >
            <span>View Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 active:bg-neutral-100 active:text-[#37322f] text-[#37322f] dark:bg-neutral-900 dark:hover:bg-neutral-800/80 dark:active:bg-neutral-800 dark:active:text-neutral-200 dark:text-neutral-200 font-medium px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-800 shadow-sm hover:shadow transition-all duration-200 transform active:scale-[0.98] w-full sm:w-52 text-base font-sans text-center"
          >
            <Mail size={16} className="text-neutral-500 group-hover:text-[#37322f] dark:group-hover:text-white transition-colors duration-200" />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 hover:text-[#37322f] dark:text-neutral-500 dark:hover:text-white transition-colors duration-200"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
};

// --- About Component ---
const About = () => {
  const [isGrayscale, setIsGrayscale] = useState(false);

  return (
    <section id="about" className="scroll-mt-24 py-28 max-w-5xl mx-auto px-6 sm:px-8 border-t border-neutral-200/50 dark:border-neutral-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-16"
      >
        <div className="flex-1 space-y-6">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-sans uppercase block">
            Who I Am
          </span>
          {/* Section Heading - matching Dheeraj heading sizes */}
          <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-serif font-normal tracking-tight text-[#37322f] dark:text-neutral-50">About Me</h2>
          <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-sans font-light">
            <p>
              I am a Full-Stack Developer focused on building scalable web applications and high-performance digital products. My work centers on transforming business requirements and user needs into clean, maintainable, and efficient software solutions that deliver real value.
            </p>
            <p>
              With experience collaborating on client-facing projects and product development, I solve technical challenges across both frontend and backend systems. I leverage modern technologies, development workflows, and best practices to build secure, optimized applications while delivering intuitive and reliable user experiences.
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer shrink-0" onClick={() => setIsGrayscale(!isGrayscale)}>
          <div className="w-64 h-64 border border-neutral-200 dark:border-neutral-800 rounded-2xl absolute -bottom-3 -right-3 group-hover:-bottom-1.5 group-hover:-right-1.5 transition-all"></div>
          <div className={`w-64 h-64 bg-white dark:bg-[#181816] border border-neutral-200 dark:border-neutral-800 p-2 rounded-2xl overflow-hidden relative z-10 shadow-sm transition-all duration-500 ${isGrayscale ? 'grayscale' : 'grayscale-0'}`}>
            <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover rounded-xl" />
          </div>
          <p className="absolute -bottom-10 left-0 w-full text-center text-[10px] font-mono tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Click photo to toggle color!
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
      icon: <Globe className="text-neutral-600 dark:text-neutral-400" size={18} />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'HTML5/CSS3']
    },
    {
      title: 'Backend',
      icon: <Server className="text-neutral-600 dark:text-neutral-400" size={18} />,
      skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Databases',
      icon: <Database className="text-neutral-600 dark:text-neutral-400" size={18} />,
      skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'SQL']
    },
    {
      title: 'Tools',
      icon: <Wrench className="text-neutral-600 dark:text-neutral-400" size={18} />,
      skills: ['Git', 'GitHub', 'Vite', 'Postman', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-28 border-t border-neutral-200/50 dark:border-neutral-800/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">

          {/* Sticky Left Column: Heading & Copy */}
          <div className="md:sticky md:top-28 space-y-6">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-sans uppercase block">
              What I Know
            </span>
            <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-serif font-normal tracking-tight text-[#37322f] dark:text-neutral-50 leading-tight">
              Technical Expertise
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-sans font-light">
              A curated collection of technologies I use to build scalable, high-performance, and reliable software systems. Focusing on modern architectures and clean-code practices.
            </p>
            <div className="h-px bg-neutral-200 dark:bg-neutral-800 w-full" />
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-neutral-400 dark:text-neutral-500">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
              <span>CONSTANTLY EVOLVING STACK</span>
            </div>
          </div>

          {/* Right Column: Skills Grid */}
          <div className="md:col-span-2 space-y-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-[#181816] rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:bg-[#37322f] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-[#37322f] transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#37322f] dark:text-neutral-200">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3.5 py-1.5 text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/80 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Experience Component ---
const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Collaborative Client Projects (Germany-based)',
      duration: 'Oct 2025 – Apr 2026',
      responsibilities: [
        'Collaborated with remote engineering teams in Germany to build and optimize full-stack web applications.',
        'Developed and integrated REST APIs ensuring high throughput and secure authentication flows.',
        'Built responsive, clean-code user interfaces in React matching pixel-perfect design specifications.'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Git'],
      achievements: [
        'Successfully shipped 3 client-facing features ahead of schedule.',
        'Reduced client-side rendering bottlenecks, improving overall page speed by 30%.',
        'Optimized database query models resulting in 40% faster API load cycles.'
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-24 py-28 border-t border-neutral-200/50 dark:border-neutral-800/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-sans uppercase block mb-3">
            My Journey
          </span>
          <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-serif font-normal tracking-tight text-[#37322f] dark:text-[#f5f5f3]">
            Professional Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-2 sm:ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[6px] top-2.5 w-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-white dark:border-[#0d0d0c] group-hover:bg-[#37322f] dark:group-hover:bg-white transition-colors duration-300" />

              {/* Main Card */}
              <div className="bg-white dark:bg-[#181816] border border-neutral-200/60 dark:border-neutral-800/60 rounded-2xl p-6 sm:p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm">

                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-200/30 dark:border-neutral-800 mb-3 uppercase tracking-wider">
                      <Briefcase size={10} />
                      {exp.role}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#37322f] dark:text-neutral-50">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 sm:self-start bg-neutral-50 dark:bg-neutral-900 px-3 py-1.5 rounded-md border border-neutral-200/60 dark:border-neutral-800/60">
                    <Calendar size={11} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Grid layout for Details */}
                <div className="grid md:grid-cols-2 gap-8">

                  {/* Left Column: Responsibilities */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      Core Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-sans font-light">
                          <span className="text-neutral-400 dark:text-neutral-500 mt-1.5 text-[8px] shrink-0">■</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Achievements & Tech Stack */}
                  <div className="space-y-6">

                    {/* Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 flex items-center gap-2">
                        <Trophy size={11} className="text-neutral-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-sans font-light">
                            <span className="text-neutral-500 dark:text-neutral-400 mt-0.5 shrink-0">✓</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies used */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[10px] font-mono rounded bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

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
      link: 'https://blogify-r8za.vercel.app/'
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
      link: 'https://todo-next-js-orcin.vercel.app/'
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
      link: 'https://dice-game-kappa-eosin.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-28 border-t border-neutral-200/50 dark:border-neutral-800/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="mb-16 text-left">
          <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-serif font-normal tracking-tight text-[#37322f] dark:text-neutral-50">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-[#181816] rounded-2xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-neutral-400 group-hover:bg-[#37322f] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-[#37322f] transition-all duration-200">
                    <Code2 size={16} />
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 mb-6 text-sm font-sans font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="px-6 pb-6 pt-0 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/50 text-neutral-500 dark:text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
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
    <section id="contact" className="scroll-mt-24 py-28 border-t border-neutral-200/50 dark:border-neutral-800/50 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-sans uppercase block">
            Let's Connect
          </span>
          <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-serif font-normal tracking-tight text-[#37322f] dark:text-[#f5f5f3]">Get In Touch</h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto font-sans font-light text-base leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="pt-4">
            <a
              href="mailto:0711akumar@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-[#37322f] hover:bg-[#272422] active:bg-[#1a1816] active:text-white text-white dark:bg-white dark:hover:bg-neutral-100 dark:active:bg-neutral-200 dark:active:text-neutral-900 dark:text-neutral-900 font-medium px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform active:scale-[0.98] font-sans text-sm"
            >
              <Mail size={16} />
              <span>Say Hello</span>
            </a>
          </div>
          <div className="pt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/11anil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all shadow-sm"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anil-kumar-0a40a1220"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all shadow-sm"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="py-8 border-t border-neutral-200/50 dark:border-neutral-800/50 text-center bg-white dark:bg-[#0d0d0c]">
      <p className="text-neutral-400 dark:text-neutral-500 text-xs font-sans tracking-wide">
        All rights reserved by Anil kumar. © 2026
      </p>
    </footer>
  );
};

// --- Main App Component ---
function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="bg-[#fafaf9] dark:bg-[#0d0d0c] min-h-screen text-neutral-800 dark:text-neutral-300 selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-300 font-sans">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
