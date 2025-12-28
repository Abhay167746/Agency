import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      
      {/* Base animated gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "400% 400%",
          backgroundImage: `
            linear-gradient(
              120deg,
              #020617,
              #0f172a,
              #1e293b,
              #020617
            )
          `,
        }}
      />

      {/* Floating blob 1 */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      />

      {/* Floating blob 2 */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "60%", left: "60%" }}
      />

      {/* Floating blob 3 (subtle highlight) */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-sky-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "30%", left: "70%" }}
      />

    </div>
  )
}
