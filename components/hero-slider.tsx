"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  id: number
  title: string
  subtitle: string
  features: string[]
  date: string
  location: string
  image: string
  badge: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "ENCUENTROS",
    subtitle: "UJA",
    features: ["FORMACIÓN INTEGRAL | CERCANÍA", "INTERNACIONALIZACIÓN | EMPLEABILIDAD", "INSTALACIONES MODERNAS"],
    date: "Del 12 al 23 de enero de 2026",
    location: "Del 12 al 23 de enero de 2026, en el Campus Las Lagunillas de Jaén",
    image: "/university-student-campus-modern-building.jpg",
    badge: "Estudiantes",
  },
  {
    id: 2,
    title: "INVESTIGACIÓN",
    subtitle: "UJA",
    features: ["EXCELENCIA ACADÉMICA | INNOVACIÓN", "TRANSFERENCIA DEL CONOCIMIENTO", "COLABORACIÓN INTERNACIONAL"],
    date: "Curso académico 2025-2026",
    location: "Más de 200 grupos de investigación activos",
    image: "/university-research-laboratory-science.jpg",
    badge: "Investigación",
  },
  {
    id: 3,
    title: "CULTURA",
    subtitle: "UJA",
    features: ["ACTIVIDADES CULTURALES | DEPORTES", "ASOCIACIONES ESTUDIANTILES", "VIDA UNIVERSITARIA"],
    date: "Todo el año",
    location: "Disfruta de una experiencia universitaria completa",
    image: "/university-campus-students-activities-events.jpg",
    badge: "Campus",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const slide = slides[currentSlide]

  return (
    <section className="w-full">
      {/* Main Slider */}
      <div className="relative h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
        <div className="flex h-full">
          {/* Left Blue Section */}
          <div className="w-full md:w-[35%] bg-[#0066cc] relative flex flex-col justify-center px-6 md:px-10 py-8">
            {/* Title */}
            <div className="mb-6">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{slide.title}</h2>
              <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-none">{slide.subtitle}</h2>
            </div>

            {/* Navigation Arrow Left */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Features */}
            <div className="space-y-1 mb-6">
              {slide.features.map((feature, idx) => (
                <p key={idx} className="text-white/90 text-xs md:text-sm font-medium">
                  {feature}
                </p>
              ))}
            </div>

            {/* Date */}
            <p className="text-[#ffc107] text-xl md:text-2xl lg:text-3xl font-bold italic">{slide.date}</p>

            {/* Yellow diagonal accent */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-[#ffc107] hidden md:block" />
          </div>

          {/* Center Image Section */}
          <div className="hidden md:block w-[40%] relative">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={`${slide.title} ${slide.subtitle}`}
              className="w-full h-full object-cover"
            />
            {/* Yellow overlay triangle */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[150px] border-t-[#ffc107] border-r-[150px] border-r-transparent" />
          </div>

          {/* Right Orange/Green Section */}
          <div className="hidden md:flex w-[25%] relative flex-col">
            {/* Orange top part */}
            <div className="h-1/2 bg-[#f47920] relative">
              {/* Green diagonal */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #f47920 50%, #007b3e 50%)",
                }}
              />

              {/* Institutional logos */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">CEI</span>
                </div>
              </div>

              {/* UJA Logo and text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <p className="text-white text-xs mb-1">Universidad de Jaén</p>
                <div className="text-white text-4xl font-bold">
                  UJa<span className="text-[#007b3e]">.</span>
                </div>
                <p className="text-white text-sm mt-1 border border-white/50 rounded px-2 py-0.5">{slide.badge}</p>
              </div>
            </div>

            {/* Green bottom part with QR */}
            <div className="h-1/2 bg-[#007b3e] relative flex items-center justify-center">
              <div className="bg-white p-2 rounded">
                <div className="w-20 h-20 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-xs text-center">QR Code</span>
                </div>
              </div>

              {/* Navigation Arrow Right */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Arrow Right */}
        <button
          onClick={nextSlide}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors bg-black/20"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Title Bar */}
      <div className="bg-[#711610] border-t border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold text-lg md:text-xl">
            {slide.title} {slide.subtitle} 2026
          </h3>
          <p className="text-white text-sm">{slide.location}</p>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-transparent border-2 border-gray-400" : "bg-gray-400"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
