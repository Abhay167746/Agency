import AnimatedBackground from "./AnimatedBackground"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-5xl text-center">

        {/* Slow text reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "120%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.6,
              ease: "easeOut",
            }}
            className="
              max-w-4xl mx-auto
              text-4xl sm:text-5xl md:text-6xl
              font-extrabold text-white
              drop-shadow-[0_2px_30px_rgba(0,0,0,0.4)]
            "
          >
            We Build Digital Experiences That{" "}
            <span className="text-blue-400">Convert</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/80"
        >
          Modern websites, growth-focused design, and smart digital strategies.
        </motion.p>

      </div>
    </section>
  )
}
