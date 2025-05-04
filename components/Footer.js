import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/Shahanaabdulla', 
    icon: <FaGithub />,
    color: 'hover:text-gray-400'
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/shahanavv/', 
    icon: <FaLinkedin />,
    color: 'hover:text-blue-400'
  },
  { 
    name: 'Email', 
    url: 'mailto:shahanamuhammedvava@gmail.com', 
    icon: <FaEnvelope />,
    color: 'hover:text-red-400'
  }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <motion.footer 
      className="bg-black/50 backdrop-blur-lg border-t border-gray-800/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <motion.div 
                className="flex items-center gap-2 mb-4"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Shahana V V
                </span>
              </motion.div>
            </Link>
            <p className="text-gray-400 max-w-xs">
              MERN Stack Developer creating modern web applications with clean code and great user experiences.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors group"
                  >
                    <span>{item}</span>
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect section */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-medium text-white mb-4">Let&apos;s Connect</h3>
            <div className="flex gap-4 text-2xl">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-colors`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Shahana V V. All rights reserved.
          </p>
          
          <motion.div
            className="mt-4 md:mt-0 flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            <span className="text-gray-500 text-sm">Built with</span>
            <div className="flex gap-1">
              <span className="px-2 py-1 bg-gray-800/50 text-blue-400 rounded text-xs">Next.js</span>
              <span className="px-2 py-1 bg-gray-800/50 text-cyan-400 rounded text-xs">Tailwind</span>
              <span className="px-2 py-1 bg-gray-800/50 text-purple-400 rounded text-xs">Framer</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}