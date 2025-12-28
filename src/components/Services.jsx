import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      title: "Website Design & Development",
      desc: "Modern, responsive websites built to convert visitors into customers.",
      icon: "💻",
    },
    {
      title: "SEO & Growth Marketing",
      desc: "Data-driven strategies to improve visibility and organic traffic.",
      icon: "📈",
    },
    {
      title: "Content & Branding",
      desc: "Clear messaging and branding that builds trust and authority.",
      icon: "✍️",
    },
  ]

  return (
    <section
      id="services"
      className="
        relative
        bg-gray-50/80 backdrop-blur-xl
        px-6 md:px-16 py-32
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-3xl md:text-4xl font-bold text-center
            text-gray-900
          "
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="
            mt-5 text-center text-gray-600
            max-w-2xl mx-auto
          "
        >
          We provide end-to-end digital solutions designed for growth.
        </motion.p>

        {/* Cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-3 cursor-pointer">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                bg-white/90
                backdrop-blur-md
                border border-gray-200/60
                p-10 rounded-2xl
                shadow-sm hover:shadow-xl
                transition-all
              "
            >
              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed ">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
