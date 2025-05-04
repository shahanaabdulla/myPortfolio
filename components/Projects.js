import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: "Decode International",
    description: "Real-time educational consultancy platform with chat, video calls (Zegocloud), payments (Razorpay), and secure JWT auth.",
    tags: ["React", "Tailwind", "Redux", "Socket.IO", "Firebase", "Zegocloud", "MongoDB", "Express"],
    image: "/decode.png",
    link: "https://github.com/shahanaabdulla/decodeInternational",
   
  },
  {
    title: "Yoobuy - E-commerce",
    description: "E-commerce website with cart, wishlist, wallet system, Razorpay payments, and admin dashboard with reports.",
    tags: ["Node.js", "Express", "MongoDB", "HBS", "Bootstrap", "Razorpay"],
    image: "/Yoobuy.png",
    link: "https://github.com/shahanaabdulla/checkEcomm"
  },
  {
    title: "Netflix Clone",
    description: "Responsive Netflix UI clone built with React and styled-components.",
    tags: ["React", "CSS", "Firebase"],
    image: "/netflix.png",
    link: "https://github.com/shahanaabdulla/netfl-clone",
    
  },
  {
    title: "OLX Clone",
    description: "A functional OLX-style marketplace clone built using React.",
    tags: ["React", "Firebase"],
    image: "/olx.png",
    link: "https://github.com/shahanaabdulla/olx-clone"
  },
  {
    title: "User Management",
    description: "Admin panel to manage users, built with Redux and React.",
    tags: ["React", "Redux"],
    image: "/authapp.png",
    link: "https://github.com/shahanaabdulla/user-management"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects with modern technologies and clean implementations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl bg-gray-800 border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-700 text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <FiGithub className="mr-1.5" /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <FiExternalLink className="mr-1.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a
            href="https://github.com/shahanaabdulla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            View All Projects
            <FiGithub className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
