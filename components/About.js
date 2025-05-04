import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowRight } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiGit, SiRedux, SiMongodb, SiFirebase, SiSocketdotio } from 'react-icons/si';

export default function About() {
  const handleDownload = () => {
    // Resume download functionality
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shahana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const techStack = [
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={20} />, level: 'Advanced' },
    { name: 'React', icon: <FaReact className="text-blue-400" size={20} />, level: 'Advanced' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={20} />, level: 'Intermediate' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={20} />, level: 'Learning' },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" size={20} />, level: 'Intermediate' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" size={20} />, level: 'Intermediate' },
    { name: 'Express', icon: <SiExpress className="text-gray-100" size={20} />, level: 'Intermediate' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={20} />, level: 'Advanced' },
    { name: 'Git', icon: <SiGit className="text-orange-500" size={20} />, level: 'Intermediate' },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" size={20} />, level: 'Intermediate' },
    { name: 'Socket.IO', icon: <SiSocketdotio className="text-white" size={20} />, level: 'Basic' }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get to know more about my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Digital Experiences</span>
            </motion.h3>

            <motion.div
              className="space-y-4 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p>
                Hello! I'm <span className="text-blue-400 font-medium">Shahana</span>, a passionate MERN stack developer with a background in Electronics Engineering. My journey into tech began with curiosity and has evolved into a deep love for building meaningful digital solutions.
              </p>
              
              <div className="relative pl-6 border-l-2 border-blue-500/50 my-6">
                <p className="italic text-gray-200">
                  "What began as curiosity about web development became a passion for creating digital experiences that solve real problems."
                </p>
              </div>
              
              <p>
                I specialize in building responsive, accessible web applications using modern technologies like <span className="text-blue-400">React</span>, <span className="text-green-400">Node.js</span>, and <span className="text-purple-400">Redux</span>. My engineering background gives me a unique perspective on problem-solving and system design.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center gap-2 hover:from-blue-600 hover:to-purple-700 transition-all group"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiMail className="text-lg" />
                Contact Me
                <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.button
                onClick={handleDownload}
                className="px-6 py-3 border border-gray-700 text-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-800 hover:text-white transition-all group"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload className="text-lg" />
                Download CV
                <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all"
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Tech Stack</span>
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{tech.name}</h4>
                      <span className="text-xs text-gray-400">{tech.level}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 pt-6 border-t border-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gray-400 text-sm">
                Continuously learning and expanding my skill set to build better, more efficient applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}