"use client"

import { motion } from "framer-motion"
import { Atom, Monitor, Factory, Cog, Users } from "lucide-react"

const areas = [
  {
    id: 1,
    name: "Área de Ciencias Básicas",
    icon: Atom,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Área de Sistemas, Computación e Informática",
    icon: Monitor,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    name: "Área de Gestión de la Producción",
    icon: Factory,
    color: "from-green-500 to-green-600",
  },
  {
    id: 4,
    name: "Área de Tecnología de la Producción",
    icon: Cog,
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 5,
    name: "Área de Humanidades y Ciencias",
    icon: Users,
    color: "from-red-500 to-red-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const },
  },
}

export default function Areas() {
  return (
    <section id="areas" className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: [0, 0, 1, 1] as const }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-[#711610]/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: [0, 0, 1, 1] as const }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#007b3e]/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Áreas Académicas
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[#711610] mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Conoce las áreas de especialización que conforman nuestra facultad
          </motion.p>
        </motion.div>

        {/* Areas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#711610] transition-colors">
                    {area.name}
                  </h3>


                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`h-1 w-12 bg-gradient-to-r ${area.color} mt-4 origin-left`}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}