'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import AnimatedText from './AnimatedText';
import ProfileImage from './ProfileImage';
import FloatingIcon from './FloatingIcon';

export default function Hero() {
  const techIcons = [
    { icon: <FaIcons.FaReact className="text-cyan-400" size={26} />, name: 'React' },
    { icon: <FaIcons.FaNodeJs className="text-green-500" size={26} />, name: 'Node.js' },
    { icon: <SiIcons.SiTypescript className="text-blue-500" size={22} />, name: 'TypeScript' },
    { icon: <SiIcons.SiTailwindcss className="text-sky-400" size={22} />, name: 'Tailwind' },
    { icon: <SiIcons.SiMongodb className="text-green-400" size={22} />, name: 'MongoDB' },
    { icon: <SiIcons.SiNextdotjs className="text-white" size={22} />, name: 'Next.js' },
  ];

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: '#', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <FiMail size={20} />, href: '#', label: 'Email' },
  ];

  const floatingTech = [
    { Icon: FaIcons.FaReact, color: 'text-cyan-400', size: 32, delay: 0, x: '10%', y: '15%' },
    { Icon: FaIcons.FaNodeJs, color: 'text-green-500', size: 28, delay: 0.3, x: '85%', y: '25%' },
    { Icon: SiIcons.SiTypescript, color: 'text-blue-500', size: 26, delay: 0.6, x: '15%', y: '75%' },
    { Icon: SiIcons.SiTailwindcss, color: 'text-sky-400', size: 24, delay: 0.9, x: '80%', y: '60%' },
    { Icon: FaIcons.FaJs, color: 'text-yellow-400', size: 28, delay: 1.2, x: '5%', y: '45%' },
    { Icon: FaIcons.FaGitAlt, color: 'text-orange-500', size: 26, delay: 0.5, x: '90%', y: '80%' },
    { Icon: SiIcons.SiNextdotjs, color: 'text-gray-200', size: 30, delay: 0.8, x: '70%', y: '15%' },
    { Icon: SiIcons.SiExpress, color: 'text-gray-300', size: 28, delay: 1, x: '25%', y: '85%' },
    { Icon: FaIcons.FaPython, color: 'text-blue-400', size: 30, delay: 1.3, x: '8%', y: '20%' },
    { Icon: FaIcons.FaAws, color: 'text-orange-400', size: 32, delay: 0.2, x: '75%', y: '70%' },
    { Icon: FaIcons.FaDocker, color: 'text-blue-400', size: 30, delay: 1.4, x: '45%', y: '10%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-neutral-950">
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating tech icons */}
        {floatingTech.map((tech, i) => (
          <FloatingIcon
            key={i}
            Icon={tech.Icon}
            colorClass={tech.color}
            size={tech.size}
            x={tech.x}
            y={tech.y}
            delay={tech.delay}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full mb-8 group"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </motion.div>

              {/* Name with gradient text */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
                  Shahana V V
                </span>
              </h1>
              
              {/* Animated subtitle */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 max-w-lg mx-auto lg:mx-0 mb-4">
                  Building{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                    exceptional
                  </span>{" "}
                  digital experiences
                </p>
                <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
                  Specialized in modern web technologies, scalable architectures, and user-centered design
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  href="#projects"
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full flex items-center gap-3 hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-semibold">View Projects</span>
                  <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-2 duration-300" />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="group px-8 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-300 rounded-full flex items-center gap-3 hover:bg-gray-800/50 hover:text-white hover:border-gray-700 transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-semibold">Contact Me</span>
                  <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-2 duration-300" />
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  download
                  className="group px-6 py-4 text-gray-400 rounded-full flex items-center gap-2 hover:text-white transition-all"
                  whileHover={{ y: -4 }}
                >
                  <FiDownload className="transition-transform group-hover:-translate-y-1" />
                  <span className="text-sm">Resume</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center lg:justify-start gap-6 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-800/30 transition-all group"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Tech stack */}
              <motion.div
                className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <span className="text-gray-500 text-sm font-medium">Tech Stack:</span>
                <div className="flex flex-wrap gap-3">
                  {techIcons.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3 + index * 0.1 }}
                      className="group relative"
                      whileHover={{ y: -6 }}
                    >
                      <div className="p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl group-hover:border-cyan-500/50 transition-all duration-300">
                        {tech.icon}
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image Section - Smaller dimensions */}
          <div className="lg:w-1/2 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              {/* Subtle glow effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Container for smaller profile image */}
              <div className="relative scale-90 md:scale-95 lg:scale-100">
                {/* Wrapper with smaller dimensions */}
                <div className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[480px]">
                  <ProfileImage />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none"></div>
              </div>

              {/* Floating badge - adjusted position for smaller image */}
              <motion.div
                className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-gradient-to-r from-cyan-900/80 to-blue-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
              </motion.div>

              {/* Floating React icon */}
              <motion.div
                className="absolute -top-4 -left-4 p-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.5
                }}
              >
                <FaIcons.FaReact className="text-cyan-400" size={20} />
              </motion.div>
              
              {/* Floating TypeScript icon */}
              <motion.div
                className="absolute -bottom-4 -right-4 p-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full"
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1
                }}
              >
                <SiIcons.SiTypescript className="text-blue-500" size={18} />
              </motion.div>

              {/* Floating Node.js icon */}
              <motion.div
                className="absolute top-1/2 -right-6 p-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full"
                animate={{ 
                  x: [0, 8, 0],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.8
                }}
              >
                <FaIcons.FaNodeJs className="text-green-500" size={18} />
              </motion.div>

              {/* Floating Next.js icon */}
              <motion.div
                className="absolute -left-6 top-1/3 p-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full"
                animate={{ 
                  x: [0, -8, 0],
                  rotate: [0, -15, 15, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1.2
                }}
              >
                <SiIcons.SiNextdotjs className="text-gray-200" size={18} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}