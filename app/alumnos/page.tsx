"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { alumnos } from "@/lib/data";
import { ArrowLeft, User, Search, GraduationCap } from "lucide-react";
import Link from "next/link";

const ciclos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function AlumnosPage() {
  const [selectedCiclo, setSelectedCiclo] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const alumnosFiltrados = selectedCiclo
    ? alumnos.filter(
        (alumno) =>
          alumno.ciclo === selectedCiclo &&
          (alumno.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumno.apellidoPaterno.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumno.apellidoMaterno.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumno.codigo.includes(searchTerm))
      )
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-[#1e5a8a] hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-[#8b1e3f] mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8" />
            Alumnos Actuales por Ciclo
          </h1>

          {!selectedCiclo ? (
            /* Ciclos Grid */
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {ciclos.map((ciclo) => {
                const count = alumnos.filter((a) => a.ciclo === ciclo).length;
                return (
                  <button
                    key={ciclo}
                    onClick={() => setSelectedCiclo(ciclo)}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-transparent hover:border-[#8b1e3f] group"
                  >
                    <div className="text-4xl font-bold text-[#8b1e3f] group-hover:text-[#6d1831] mb-2">
                      {ciclo}
                    </div>
                    <div className="text-gray-600 text-sm">Ciclo {ciclo}</div>
                    <div className="mt-3 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {count} alumnos
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Alumnos List */
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <button
                  onClick={() => {
                    setSelectedCiclo(null);
                    setSearchTerm("");
                  }}
                  className="inline-flex items-center text-[#1e5a8a] hover:underline"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver a ciclos
                </button>
                
                <h2 className="text-2xl font-semibold text-gray-800">
                  Ciclo {selectedCiclo} - {alumnosFiltrados.length} alumnos
                </h2>

                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar alumno..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b1e3f] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Alumnos Table */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#8b1e3f] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">
                          Código
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">
                          Nombre Completo
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold hidden md:table-cell">
                          Especialidad
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold hidden lg:table-cell">
                          Email
                        </th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">
                          Promedio
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {alumnosFiltrados.map((alumno, index) => (
                        <tr
                          key={alumno.id}
                          className={`hover:bg-gray-50 transition-colors ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                          }`}
                        >
                          <td className="px-4 py-3">
                            <span className="font-mono text-sm text-gray-700">
                              {alumno.codigo}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-[#1e5a8a] rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  {alumno.apellidoPaterno} {alumno.apellidoMaterno}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {alumno.nombre}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 hidden md:table-cell">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                alumno.especialidad === "Ingeniería Industrial"
                                  ? "bg-blue-100 text-blue-800"
                                  : alumno.especialidad === "Ingeniería de Sistemas"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-orange-100 text-orange-800"
                              }`}
                            >
                              {alumno.especialidad.replace("Ingeniería de ", "").replace("Ingeniería ", "")}
                            </span>
                          </td>
                          <td className="px-4 py-3 hidden lg:table-cell">
                            <span className="text-sm text-gray-600">
                              {alumno.email}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span
                              className={`font-semibold ${
                                alumno.promedio >= 14
                                  ? "text-green-600"
                                  : alumno.promedio >= 12
                                  ? "text-yellow-600"
                                  : "text-red-600"
                              }`}
                            >
                              {alumno.promedio.toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {alumnosFiltrados.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    No se encontraron alumnos con ese criterio de búsqueda.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Summary Stats */}
          {!selectedCiclo && (
            <div className="mt-8 bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Resumen de Alumnos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-[#8b1e3f]">
                    {alumnos.length}
                  </p>
                  <p className="text-sm text-gray-600">Total Alumnos</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-[#1e5a8a]">
                    {alumnos.filter((a) => a.especialidad === "Ingeniería Industrial").length}
                  </p>
                  <p className="text-sm text-gray-600">Ing. Industrial</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-[#388e3c]">
                    {alumnos.filter((a) => a.especialidad === "Ingeniería de Sistemas").length}
                  </p>
                  <p className="text-sm text-gray-600">Ing. de Sistemas</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-[#f57c00]">
                    {alumnos.filter((a) => a.especialidad === "Ingeniería de Software").length}
                  </p>
                  <p className="text-sm text-gray-600">Ing. de Software</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-6 px-8 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2026 Universidad Nacional de Ingeniería - FIIS
          </p>
        </div>
      </footer>
    </div>
  );
}
