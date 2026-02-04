"use client"

import { HeroSlider } from "@/components/hero-slider"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Welcome section */}
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

      {/* Additional content sections */}
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#8b1e3f] mb-8 text-center">
            Nuestras Escuelas Profesionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#1e5a8a] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Ingeniería Industrial
              </h3>
              <p className="text-gray-600 text-sm">
                Formamos profesionales capaces de diseñar, implementar y mejorar sistemas integrados de producción.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#388e3c] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Ingeniería de Sistemas
              </h3>
              <p className="text-gray-600 text-sm">
                Desarrollamos expertos en tecnologías de información y sistemas computacionales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#f57c00] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🖥️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Ingeniería de Software
              </h3>
              <p className="text-gray-600 text-sm">
                Preparamos especialistas en desarrollo, arquitectura y gestión de software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-12 px-8 bg-[#8b1e3f] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">60+</p>
            <p className="text-sm mt-2">Años de Excelencia</p>
          </div>
          <div>
            <p className="text-4xl font-bold">3000+</p>
            <p className="text-sm mt-2">Estudiantes Activos</p>
          </div>
          <div>
            <p className="text-4xl font-bold">150+</p>
            <p className="text-sm mt-2">Docentes Calificados</p>
          </div>
          <div>
            <p className="text-4xl font-bold">95%</p>
            <p className="text-sm mt-2">Empleabilidad</p>
          </div>
        </div>
      </section>
    </>
  )
}
