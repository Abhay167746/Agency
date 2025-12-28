import { motion } from "framer-motion"

export default function WhyUs() {
  const points = [
    {
      title: "Results-Focused Approach",
      desc: "We design and build digital solutions that help businesses grow sustainably.",
    },
    {
      title: "Clean & Professional Design",
      desc: "Modern layouts, clear messaging, and user-first experiences.",
    },
    {
      title: "Reliable & Transparent Process",
      desc: "Clear communication, realistic timelines, and honest delivery.",
    },
  ]

  return (
    <section
      id="about"
      className="
        relative
        px-6 md:px-16 py-32
        bg-gradient-to-b
        from-zinc-900 via-zinc-900 to-zinc-800
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Glass Heading Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mx-auto max-w-3xl
            bg-white/10 backdrop-blur-xl
            border border-white/15
            rounded-2xl
            px-8 py-10
            text-center
          "
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose Us
          </h2>

          <p className="mt-4 text-white/70">
            We partner with businesses to deliver digital solutions that are
            simple, effective, and scalable.
          </p>
        </motion.div>

        {/* Points */}
        <div className="mt-20 grid gap-12 md:grid-cols-3 text-center cursor-pointer">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
                px-6 py-10
                rounded-2xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                hover:bg-white/10
                transition
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-white/65 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
