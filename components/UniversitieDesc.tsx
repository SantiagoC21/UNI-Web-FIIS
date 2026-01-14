"use client"

import { motion } from "framer-motion"

export default function UniversitieDesc() {
  return (
    <section id="descripcion" className="py-12 md:py-16 bg-white relative overflow-hidden">
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
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Sobre la Facultad
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[#711610] mx-auto"
          />
        </motion.div>

        {/* Description content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0, 0, 0.58, 1] as const }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline-style content */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#711610] via-[#711610]/50 to-transparent origin-top hidden md:block"
            />

            {/* First paragraph - Origins */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative md:pr-12 md:text-right md:w-1/2 mb-12"
            >
              <div className="hidden md:block absolute right-0 top-2 w-4 h-4 bg-[#711610] rounded-full transform translate-x-[calc(50%+1px)]" />
              <span className="inline-block bg-[#711610] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                1901
              </span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                La historia de la facultad se remonta al <strong>11 de enero de 1901</strong> cuando 
                fue creada la Sección de Ingenieros Industriales de la Escuela de Ingenieros 
                (antecesora de la Universidad Nacional de Ingeniería). Antes de su establecimiento, 
                la Escuela de Ingenieros se dedicaba principalmente a formar profesionales en el 
                campo de la extracción minera y la construcción de infraestructura civil. 
                Fue la tercera sección en ser establecida en la Escuela de Ingenieros.
              </p>
            </motion.div>

            {/* Second paragraph - Evolution */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative md:pl-12 md:ml-auto md:w-1/2 mb-12"
            >
              <div className="hidden md:block absolute left-0 top-2 w-4 h-4 bg-[#007b3e] rounded-full transform -translate-x-[calc(50%+1px)]" />
              <span className="inline-block bg-[#007b3e] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                1937 - 1969
              </span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                En el año <strong>1937</strong> pasó a llamarse Sección de Ingenieros Químicos 
                Industriales mientras que en <strong>1946</strong> cambió de nombre a Departamento 
                de Ingeniería Química Industrial. El <strong>23 de abril de 1959</strong> el Consejo 
                Universitario cambió el nombre por Facultad de Ingeniería Industrial, que rigió 
                hasta 1969, año en que se creó el sistema departamentalista. Surgieron así los 
                programas de Ingeniería Industrial e Ingeniería de Sistemas.
              </p>
            </motion.div>

            {/* Third paragraph - Present */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="relative md:pr-12 md:text-right md:w-1/2"
            >
              <div className="hidden md:block absolute right-0 top-2 w-4 h-4 bg-[#711610] rounded-full transform translate-x-[calc(50%+1px)]" />
              <span className="inline-block bg-[#711610] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                1984 - Actualidad
              </span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                En <strong>abril de 1984</strong>, regresó nuevamente al sistema facultativo, 
                organizándose la facultad en dos escuelas profesionales: <strong>Ingeniería 
                Industrial</strong> e <strong>Ingeniería de Sistemas</strong>; que están vigentes 
                hasta la fecha.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

