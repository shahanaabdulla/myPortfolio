import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiRedux } from 'react-icons/si'

const technologies = [
    { 
      name: "Next.js", 
      icon: <SiNextdotjs className="text-white" />, 
      proficiency: 90, 
      color: "from-gray-400 to-gray-300" 
    },
    { 
      name: "React", 
      icon: <FaReact className="text-blue-400" />, 
      proficiency: 90, 
      color: "from-blue-600 to-blue-400" 
    },
    { 
      name: "Node.js", 
      icon: <FaNodeJs className="text-green-500" />, 
      proficiency: 85, 
      color: "from-green-600 to-green-400" 
    },
    { 
      name: "MongoDB", 
      icon: <FaDatabase className="text-green-400" />, 
      proficiency: 80, 
      color: "from-green-700 to-green-500" 
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript className="text-blue-600" />, 
      proficiency: 75, 
      color: "from-blue-700 to-blue-500" 
    },
    { 
      name: "JavaScript", 
      icon: <FaJs className="text-yellow-400" />, 
      proficiency: 85, 
      color: "from-yellow-400 to-yellow-300" 
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss className="text-cyan-400" />, 
      proficiency: 80, 
      color: "from-cyan-500 to-blue-500" 
    },
    { 
      name: "Git & GitHub", 
      icon: <FaGitAlt className="text-orange-500" />, 
      proficiency: 80, 
      color: "from-orange-600 to-orange-400" 
    },
    { 
      name: "Express", 
      icon: <SiExpress className="text-gray-100" />, 
      proficiency: 75, 
      color: "from-gray-400 to-gray-300" 
    },
    { 
      name: "Redux", 
      icon: <SiRedux className="text-purple-500" />, 
      proficiency: 70, 
      color: "from-purple-700 to-purple-500" 
    }
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-black via-zinc-900 to-neutral-900 overflow-hidden">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-30 blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-200 mb-4">
            My Tech Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies I&apos;ve worked with and my proficiency level in each
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tech.color} p-0.5 shadow-lg`}
            >
              <div className="relative bg-gray-900 rounded-[calc(1rem-2px)] p-6 h-full flex flex-col">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{tech.name}</h3>
                <div className="mt-auto">
                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                    <span>Proficiency</span>
                    <span>{tech.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div 
                      className={`bg-gradient-to-r ${tech.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.proficiency}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.15,
                        type: "spring",
                        damping: 10
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[calc(1rem-2px)]" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            And many more tools and libraries in my development toolkit...
          </p>
        </motion.div>
      </div>
    </section>
  )
}