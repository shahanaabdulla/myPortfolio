import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiCode } from 'react-icons/fi'

const experiences = [
  {
    id: 1,
    role: "MERN Stack Developer",
    company: "Brototype",
    period: "Sept 2023 - Present",
    description: "Building scalable web applications with React, Node.js, and MongoDB. Led the development of real-time educational and e-commerce platforms, integrating secure authentication, payment systems, chat, and video conferencing.",
    skills: ["React", "Node.js", "MongoDB", "Express", "Redux", "JWT"]
  },
  {
    id: 2,
    role: "Frontend Developer & Documentation Coordinator",
    company: "Decode International LLP",
    period: "Apr 2021 - Jan 2023",
    description: "Maintained and developed responsive web apps using React.js. Focused on form validation, accessibility, mobile responsiveness, and streamlined internal documentation processes.",
    skills: ["React", "JavaScript", "HTML/CSS", "Formik", "Responsive Design"]
  },
  {
    id: 3,
    role: "Graduate Engineer Trainee",
    company: "KELTRON",
    period: "Feb 2020 - Feb 2021",
    description: "Contributed to the design and testing of electronic communication systems. Assisted senior engineers with troubleshooting and optimizing hardware and embedded software.",
    skills: ["Embedded Systems", "Hardware Testing", "Technical Documentation"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and key milestones
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="group relative pl-10 md:pl-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* Icon */}
                <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FiBriefcase className="text-white text-lg" />
                </div>
                
                {/* Date marker (mobile) */}
                <div className="md:hidden absolute -left-1 top-12 w-3 h-3 rounded-full bg-blue-500 border-4 border-gray-950" />
                
                <div className="md:flex gap-8">
                  {/* Date (desktop) */}
                  <div className="hidden md:block w-32 flex-shrink-0 pt-1 text-right">
                    <motion.div 
                      className="inline-flex items-center gap-2 text-sm text-gray-400"
                      whileHover={{ x: -5 }}
                    >
                      <FiCalendar className="text-blue-400" />
                      {exp.period}
                    </motion.div>
                  </div>
                  
                  {/* Content card */}
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/50 relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-blue-400">
                            <span>{exp.company}</span>
                            <span className="hidden md:inline">•</span>
                            <span className="md:hidden text-sm text-gray-400">{exp.period}</span>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                          <FiCalendar className="text-blue-400" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      
                      <div className="mt-6">
                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                          <FiCode className="text-blue-400" />
                          <span>Technologies used</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.span 
                              key={i}
                              className="text-xs px-3 py-1.5 rounded-full bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-blue-900/30 hover:border-blue-500/30 transition-colors"
                              whileHover={{ 
                                scale: 1.05,
                                backgroundColor: 'rgba(59, 130, 246, 0.2)'
                              }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              {skill}
                            </motion.span>
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
      </div>
    </section>
  )
}