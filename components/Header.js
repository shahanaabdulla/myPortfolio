'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '#projects' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' }
  ];

  const socialIcons = [
    { icon: <FiGithub size={18} />, path: 'https://github.com', name: 'GitHub' },
    { icon: <FiLinkedin size={18} />, path: 'https://linkedin.com', name: 'LinkedIn' }
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-black/50 backdrop-blur-lg z-50 border-b border-gray-800/50"
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Shahana
          </Link>
          <span className="text-xs px-2 py-1 bg-gray-800/50 text-blue-400 rounded-full border border-gray-700">
            MERN Dev
          </span>
        </motion.div>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link href={item.path}>
                    <motion.div
                      className="relative px-3 py-2 text-gray-300 hover:text-white transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialIcons.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-full border border-gray-800 hover:border-gray-700 hover:bg-gray-800/30"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link href="#contact">
              <motion.button
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail size={16} />
                <span>Get in touch</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black/80 px-6 py-4 backdrop-blur-sm border-t border-gray-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="block text-gray-300 hover:text-white transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
