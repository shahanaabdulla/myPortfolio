import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';
import AnimatedText from './AnimatedText';
import ProfileImage from './ProfileImage';

export default function Hero() {
  const techIcons = [
    { icon: <FaReact className="text-blue-400" size={24} />, name: 'React' },
    { icon: <FaNodeJs className="text-green-500" size={24} />, name: 'Node.js' },
    { icon: <SiTypescript className="text-blue-600" size={20} />, name: 'TypeScript' },
    { icon: <SiTailwindcss className="text-cyan-400" size={20} />, name: 'Tailwind' },
    { icon: <SiMongodb className="text-green-400" size={20} />, name: 'MongoDB' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-neutral-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen opacity-10 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen opacity-10 filter blur-3xl animate-float-delay"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <motion.span 
                  className="inline-block px-4 py-1 bg-gray-800/50 text-blue-400 text-sm font-medium rounded-full border border-gray-700 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  MERN Stack Developer
                </motion.span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <AnimatedText 
                    text="Hi, I'm Shahana V V" 
                    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                  />
                </h1>
                
                <motion.p
                  className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Crafting digital experiences with modern web technologies and clean code.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center gap-2 hover:from-blue-600 hover:to-purple-700 transition-all group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Projects
                  <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="px-6 py-3 border border-gray-700 text-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-800 hover:text-white transition-all group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Me
                  <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.div>

              {/* Tech stack icons */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-gray-400 text-sm">Tech I work with:</span>
                <div className="flex gap-3">
                  {techIcons.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="tooltip"
                      data-tip={tech.name}
                      whileHover={{ y: -5 }}
                    >
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r"></div>
              <div className="relative overflow-hidden rounded-2xl ">
                <ProfileImage />
              </div>
            </motion.div> {/* ✅ Closing tag added here */}
          </div>
        </div>
      </div>
    </section>
  );
}
