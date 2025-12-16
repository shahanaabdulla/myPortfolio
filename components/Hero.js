'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaGitAlt, 
  FaPython, 
  FaAws, 
  FaDocker 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiNextdotjs, 
  SiExpress 
} from 'react-icons/si';
import ProfileImage from './ProfileImage';

export default function Hero() {
  const techIcons = [
    { icon: <FaReact className="text-cyan-400" size={24} />, name: 'React' },
    { icon: <FaNodeJs className="text-green-500" size={24} />, name: 'Node.js' },
    { icon: <SiTypescript className="text-blue-500" size={20} />, name: 'TypeScript' },
    { icon: <SiTailwindcss className="text-sky-400" size={20} />, name: 'Tailwind' },
    { icon: <SiMongodb className="text-green-400" size={20} />, name: 'MongoDB' },
    { icon: <SiNextdotjs className="text-white" size={20} />, name: 'Next.js' },
  ];

  // Floating icons positioned outside content areas
  const floatingTech = [
    { Icon: FaReact, color: 'text-cyan-400', size: 24, delay: 0, x: '5%', y: '10%' },
    { Icon: FaNodeJs, color: 'text-green-500', size: 22, delay: 0.5, x: '92%', y: '15%' },
    { Icon: SiTypescript, color: 'text-blue-500', size: 20, delay: 0.8, x: '8%', y: '85%' },
    { Icon: SiTailwindcss, color: 'text-sky-400', size: 18, delay: 1.2, x: '88%', y: '75%' },
    { Icon: FaJs, color: 'text-yellow-400', size: 22, delay: 0.3, x: '3%', y: '50%' },
    { Icon: SiNextdotjs, color: 'text-gray-200', size: 24, delay: 0.7, x: '94%', y: '50%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-neutral-950">
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/5 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-600/5 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating tech icons - positioned outside content areas */}
        {floatingTech.map((tech, i) => (
          <motion.div
            key={i}
            className="absolute hidden sm:block"
            style={{ 
              left: tech.x, 
              top: tech.y,
              zIndex: 0,
              pointerEvents: 'none'
            }}
            initial={{ 
              y: 0, 
              rotate: 0,
              opacity: 0.2,
            }}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: tech.delay,
            }}
          >
            <tech.Icon 
              className={`${tech.color} opacity-70`} 
              size={tech.size} 
            />
          </motion.div>
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full mb-6 sm:mb-8 group"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </motion.div>

              {/* Name with gradient text */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
                  Shahana V V
                </span>
              </h1>
              
              {/* Animated subtitle */}
              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-lg mx-auto lg:mx-0 mb-3 sm:mb-4">
                  Building{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                    exceptional
                  </span>{" "}
                  digital experiences
                </p>
                <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
                  Specialized in modern web technologies, scalable architectures, and user-centered design
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  href="#projects"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center gap-2 hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-semibold text-sm sm:text-base">View Projects</span>
                  <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-2 duration-300" />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-300 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800/50 hover:text-white hover:border-gray-700 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-semibold text-sm sm:text-base">Contact Me</span>
                  <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-2 duration-300" />
                </motion.a>
              </motion.div>

              {/* Tech stack */}
              <motion.div
                className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <span className="text-gray-500 text-sm font-medium">Tech Stack:</span>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {techIcons.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3 + index * 0.1 }}
                      className="group relative"
                      whileHover={{ y: -4 }}
                    >
                      <div className="p-2 sm:p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg sm:rounded-xl group-hover:border-cyan-500/50 transition-all duration-300">
                        {tech.icon}
                      </div>
                      <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <div className="lg:w-1/2 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Container for profile image */}
              <div className="relative scale-90 sm:scale-95 md:scale-100">
                {/* Wrapper with optimized dimensions */}
                <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[480px]">
                  <ProfileImage />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none"></div>
              </div>

              {/* Small badges around profile */}
              <motion.div
                className="absolute -top-3 -right-3 p-1.5 sm:p-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.5
                }}
              >
                <FaReact className="text-cyan-400" size={16} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-3 -left-3 p-1.5 sm:p-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full"
                animate={{ 
                  y: [0, 5, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1
                }}
              >
                <SiTypescript className="text-blue-500" size={14} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}