"use client"

import { HeroSlider } from "@/components/hero-slider"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Welcome section moved below slider */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
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
            className="text-center mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Bienvenidos a la Facultad de Ingeniería Industrial y de Sistemas
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 w-24 bg-[#711610] mx-auto mb-8"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0, 0, 0.58, 1] as const }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed text-center"
            >
              La Facultad de Ingeniería Industrial y de Sistemas - UNI es una institución académica 
              comprometida con la <strong>excelencia en la enseñanza</strong>, la <strong>investigación</strong> y 
              la <strong>transferencia del conocimiento</strong>.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
