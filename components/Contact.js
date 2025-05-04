import { motion } from 'framer-motion'
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let's Connect
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </motion.p>
          </div>
          
          {/* Contact Form */}
          <motion.form
            action="https://formsubmit.co/90018429375faad59c33a66338c63cd2"
            method="POST"
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Hidden Form Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <span className="flex items-center gap-2">
                    <FiUser className="text-blue-400" />
                    Your Name
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg pointer-events-none border border-transparent group-hover:border-blue-500/30 transition-all" />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <span className="flex items-center gap-2">
                    <FiMail className="text-blue-400" />
                    Email Address
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg pointer-events-none border border-transparent group-hover:border-blue-500/30 transition-all" />
                </div>
              </motion.div>

              {/* Subject Field */}
              <motion.div
                className="md:col-span-2"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg pointer-events-none border border-transparent group-hover:border-blue-500/30 transition-all" />
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                className="md:col-span-2"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <span className="flex items-center gap-2">
                    <FiMessageSquare className="text-blue-400" />
                    Your Message
                  </span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg pointer-events-none border border-transparent group-hover:border-blue-500/30 transition-all" />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="md:col-span-2 mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <FiSend className="text-lg" />
                  Send Message
                </button>
              </motion.div>
            </div>
          </motion.form>

          {/* Additional Contact Info */}
          
        </motion.div>
      </div>
    </section>
  )
}