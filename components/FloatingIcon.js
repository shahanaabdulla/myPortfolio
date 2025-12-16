'use client';

import { motion } from 'framer-motion';

export default function FloatingIcon({ 
  Icon, 
  size = 40, 
  x, 
  y, 
  delay = 0, 
  colorClass = ''
}) {
  return (
    <motion.div
      style={{ 
        position: 'absolute', 
        left: x, 
        top: y, 
        zIndex: 0,
        pointerEvents: 'none'
      }}
      initial={{ 
        y: 0, 
        rotate: 0,
        opacity: 0.3,
      }}
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: delay,
      }}
      className="hover:opacity-100 transition-opacity"
    >
      <Icon 
        className={`${colorClass} drop-shadow-lg`} 
        size={size} 
      />
    </motion.div>
  );
}