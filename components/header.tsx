"use client"

import { useState } from "react"
import { ChevronDown, Volume2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import UNILogo from "@/static/UniLogo.png"

const navItems = [
  { label: "FIIS", href: "/descripcion" },
  { label: "Areas", href: "/areas" },
  { label: "Nacional", href: "https://www.sunedu.gob.pe/universidades-publicas/" },
  { label: "Internacional", href: "https://www.hotcourseslatinoamerica.com/study/rankings/the-world-university.html" },
  { label: "Investigación y Transferencia", href: "https://www.facebook.com/Instituto.De.Investigacion.FIIS" },
  { label: "Postgrado", href: "https://www.facebook.com/posgrado.f.uni/?locale=es_LA" },
  { label: "Computo", href: "https://www.sistemasuni.edu.pe/" },
  { label: "Proyeccion Social", href: "https://www.facebook.com/opsec.fiisuni/?locale=es_LA" },
]

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Language Selector */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">
              English
            </Link>
            <Link href="#" className="text-sm font-semibold text-gray-900">
              Español
            </Link>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm text-[#007b3e] hover:text-[#006633]">
              <Volume2 className="w-4 h-4" />
              <span>Escuchar</span>
            </button>
            <button className="flex items-center gap-1 text-sm text-[#007b3e] hover:text-[#006633]">
              <span>Perfiles</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Directorio
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Sede Electrónica
            </Link>
            <a
              href="https://univirtual.uni.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DECA87] text-white px-4 py-2 text-sm font-semibold hover:bg-[#e6d9aa] transition-colors"
            >
              INTRANET
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="flex items-end">
              <Image src={UNILogo} alt="UNI Logo" width={70} height={70} />
              
            </div>
            <div className="ml-2 flex flex-col text-gray-900 text-xl leading-tight">
              <h1 className="font-bold text-[#711610]">UNIVERSIDAD NACIONAL DE INGENIERIA</h1>
              <h4 className="font-bold">Facultad de Ingenieria Industrial, de Sistemas y de Software</h4>
            </div>
          </Link>

          {/* Search */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#007b3e]"
            />
            <button className="bg-[#5a5a5a] text-white px-6 py-2 font-semibold hover:bg-[#4a4a4a] transition-colors">
              BUSCAR
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#711610]">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("http") ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-4 text-white text-sm font-medium hover:bg-[#B32117] transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-6 py-4 text-white text-sm font-medium hover:bg-[#B32117] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
