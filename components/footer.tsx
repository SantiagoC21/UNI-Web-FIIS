import Link from "next/link"
import Image from "next/image"
import { Youtube, Facebook, Linkedin, Instagram } from "lucide-react"
import UniLogo from "@/static/UniLogo.png"

const footerColumns = [
  {
    title: "FIIS",
    links: [
      { label: "Equipo de Gobierno", href: "#" },
      { label: "Plan Estratégico", href: "#" },
      { label: "Portal de la Investigación", href: "#" },
      { label: "Portal de Transparencia", href: "#" },
      { label: "Programa FIIS-CEP", href: "#" },
      { label: "Fundación Facultad de Ingenieria Industrial y de Sistemas - UNI - Empresa", href: "#" },
      { label: "Cita Previa", href: "#" },
    ],
  },
  {
    title: "Vida en los Campus",
    links: [
      { label: "Deporte", href: "#" },
      { label: "Cultura", href: "#" },
      { label: "Biblioteca", href: "#" },
      { label: "Defensor Universitario", href: "#" },
      { label: "Asociaciones de Estudiantes", href: "#" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Universidad Virtual", href: "#" },
      { label: "Gestión Académica Virtual", href: "#" },
      { label: "Servicios Administrativos", href: "#" },
      { label: "Trámites / Administración Electrónica", href: "#" },
      { label: "Empleo, Prácticas y Emprendimiento", href: "#" },
      { label: "Servicios TIC", href: "#" },
      { label: "FIIS App", href: "#" },
      { label: "Portal de Acceso Abierto", href: "#" },
    ],
  },
  {
    title: "Comunicación",
      links: [
      { label: "Comunicación Interna", href: "#" },
      { label: "Agenda FIIS", href: "#" },
      { label: "Agenda del Rector", href: "#" },
      { label: "Diario Digital", href: "#" },
      { label: "UniRadio", href: "#" },
      { label: "FIIS TV", href: "#" },
      { label: "Galería de Fotos", href: "#" },
      { label: "Divulgación Científica", href: "#" },
      { label: "Tienda FIIS", href: "#" },
    ],
  },
]

const legalLinks = [
  { label: "Mapa", href: "#" },
  { label: "Accesibilidad", href: "#" },
  { label: "Aviso Legal", href: "#" },
  { label: "Política de privacidad", href: "#" },
  { label: "Política de cookies", href: "#" },
  { label: "Gestión de cookies", href: "#" },
  { label: "Quejas y Sugerencias", href: "#" },
]

// Custom X (Twitter) icon since Lucide doesn't have the new X logo
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// TikTok icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  )
}

// Flickr icon
function FlickrIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="7" cy="12" r="4.5" />
      <circle cx="17" cy="12" r="4.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#e8e8e8] text-gray-700">
      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-[#007b3e] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-t border-gray-400"></div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Logo and Contact Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-end">
                <Image src={UniLogo} alt="UNI Logo" width={56} height={56} />
              </div>
              <div className="ml-1 flex flex-col text-gray-600 text-xs leading-tight">
                <span>Facultad de Ingenieria Industrial y de Sistemas</span>
                <span>- UNI</span>
              </div>
            </div>

            {/* Contact Details */}
              <div className="text-sm text-gray-600 leading-relaxed">
              <p>Av. Tupac Amaru 280, Lima 15333</p>
              <p>
                📞:{" "}
                <Link href="tel:+51(01) 4811424" className="text-[#007b3e] hover:underline">
                  +51 (01) 4811424
                </Link>
              </p>
              <p>
                📠:{" "}
                <Link href="tel:+51(01) 4811424" className="text-[#007b3e] hover:underline">
                  +51 (01) 4811424
                </Link>
              </p>
              <p>
                📧:
                <Link href="mailto:fiis@uni.edu.pe" className="text-[#007b3e] hover:underline">
                  fiis@uni.edu.pe
                </Link>
              </p>
              <p>
                🌐:
                <Link href="https://fiis.uni.edu.pe" className="text-[#007b3e] hover:underline">
                  fiis.uni.edu.pe
                </Link>
              </p>
              <p>
                ⭐:
                <Link href="https://www.facebook.com/fiisunioficial/reviews" className="text-[#007b3e] hover:underline">
                  calificar
                </Link>
              </p>
            </div>
          </div>

          {/* Legal Links and Social */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-2 text-sm">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center">
                  <Link href={link.href} className="text-gray-600 hover:text-[#007b3e]">
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && <span className="ml-2 text-gray-400">|</span>}
                </span>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-600 hover:text-[#007b3e]" aria-label="YouTube">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#007b3e]" aria-label="TikTok">
                <TikTokIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#007b3e]" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#007b3e]" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#007b3e]" aria-label="X (Twitter)">
                <XIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#007b3e]" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#007b3e]" aria-label="Flickr">
                <FlickrIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-t border-gray-400"></div>
      </div>

      {/* Partners Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 opacity-60">
          {/* Left Partners */}
          <div className="flex items-center gap-6">
            <div className="text-xs font-semibold text-gray-500">cei</div>
            <div className="text-xs font-semibold text-gray-500">ceia3</div>
            <div className="text-xs font-semibold text-gray-500">cambio</div>
          </div>

          {/* Right Partners */}
          <div className="flex items-center gap-6">
            <div className="text-xs font-semibold text-gray-500">hr</div>
            <div className="text-xs font-semibold text-gray-500">NEOLAIA</div>
            <div className="text-xs font-semibold text-gray-500">universia</div>
            <div className="text-xs font-semibold text-gray-500">CRUE</div>
            <div className="text-xs font-semibold text-gray-500">AUPA</div>
            <div className="text-xs font-semibold text-gray-500">LA RÁBIDA</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
