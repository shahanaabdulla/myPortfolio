import '@/styles/globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export default function App({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <div className={`${inter.variable} ${robotoMono.variable}`}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 }
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}