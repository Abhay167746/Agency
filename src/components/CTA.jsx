import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        px-6 md:px-16 py-32
      "
    >
      {/* Dark animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 40,
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

      <div className="max-w-5xl mx-auto text-center">

        {/* Glass CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            bg-white/80 backdrop-blur-xl
            border border-gray-200/50
            rounded-3xl
            px-10 md:px-16 py-16
            shadow-xl
          "
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Ready to Grow Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Let’s build a digital solution that helps you stand out and convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-blue-600 hover:bg-blue-700
                text-white
                px-12 py-4
                rounded-xl
                font-semibold
                shadow-lg
                cursor-pointer
              "
            >
              Book a Free Call
            </motion.button>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

