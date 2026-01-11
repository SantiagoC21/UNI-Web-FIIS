"use client"

import { useState } from "react"
import { ChevronDown, Volume2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import UNILogo from "@/static/UniLogo.png"

const navItems = [
  { label: "La Universidad", href: "#" },
  { label: "Estudios", href: "#" },
  { label: "Internacional", href: "#" },
  { label: "Investigación y Transferencia", href: "#" },
  { label: "Cultura y Deporte", href: "#" },
  { label: "Centros", href: "#" },
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
            <Link
              href="#"
              className="bg-[#DECA87] text-white px-4 py-2 text-sm font-semibold hover:bg-[#e6d9aa] transition-colors"
            >
              INTRANET
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-end">
              <Image src={UNILogo} alt="UNI Logo" width={100} height={100} />
              
            </div>
            <div className="ml-2 flex flex-col text-gray-900 text-xl leading-tight">
              <h4 className="font-bold">Facultad</h4>
              <h4 className="font-bold">de Ingenieria Industrial, de Sistemas e Informática</h4>
            </div>
          </div>

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
                <Link
                  href={item.href}
                  className="block px-6 py-4 text-white text-sm font-medium hover:bg-[#B32117] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
