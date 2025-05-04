import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-[600px] h-[750px] lg:w-[700px] lg:h-[850px]" // increased size
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="absolute inset-0 overflow-hidden rounded-none"
      >
        <Image
          src="/profileImage.png"
          alt="Professional Headshot"
          fill
          className="object-cover object-top"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </motion.div>
  )
}
