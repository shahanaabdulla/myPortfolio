import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function AnimatedText({ text, className }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`overflow-hidden flex ${className}`}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={item}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}