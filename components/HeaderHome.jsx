import { motion } from 'framer-motion'

export default function HeaderHome() {
  return (
    <header className="text-center py-4">
      <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.6 }} className="text-3xl font-extrabold">
        ❤️ Happy Bhai Dooj, Dipali (Baccha)! ❤️
      </motion.h1>
      <p className="mt-2 text-sm text-gray-700">A small surprise from your bhai — memes, music, a cute game and my message just for you.</p>
    </header>
  )
}
