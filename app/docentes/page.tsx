"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { docentes } from "@/lib/data";
import { ArrowLeft, Search, Mail, BookOpen, Award, Briefcase } from "lucide-react";
import Link from "next/link";

export default function DocentesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEspecialidad, setFilterEspecialidad] = useState<string>("");
  const [selectedDocente, setSelectedDocente] = useState<string | null>(null);

  const docentesFiltrados = docentes.filter(
    (docente) =>
      (docente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        docente.apellidoPaterno.toLowerCase().includes(searchTerm.toLowerCase()) ||
        docente.apellidoMaterno.toLowerCase().includes(searchTerm.toLowerCase()) ||
        docente.codigo.includes(searchTerm)) &&
      (filterEspecialidad === "" || docente.especialidad === filterEspecialidad)
  );

  const docenteSeleccionado = docentes.find((d) => d.id === selectedDocente);

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
            <Briefcase className="w-8 h-8" />
            Plana Docente
          </h1>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar docente por nombre o código..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b1e3f] focus:border-transparent"
                />
              </div>
              <select
                value={filterEspecialidad}
                onChange={(e) => setFilterEspecialidad(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b1e3f] focus:border-transparent"
              >
                <option value="">Todas las especialidades</option>
                <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
                <option value="Ingeniería de Software">Ingeniería de Software</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Docentes Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {docentesFiltrados.map((docente) => (
                  <div
                    key={docente.id}
                    onClick={() => setSelectedDocente(docente.id)}
                    className={`bg-white rounded-xl shadow-md p-5 cursor-pointer transition-all hover:shadow-lg border-2 ${
                      selectedDocente === docente.id
                        ? "border-[#8b1e3f]"
                        : "border-transparent hover:border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                          docente.especialidad === "Ingeniería Industrial"
                            ? "bg-[#1e5a8a]"
                            : docente.especialidad === "Ingeniería de Sistemas"
                            ? "bg-[#388e3c]"
                            : "bg-[#f57c00]"
                        }`}
                      >
                        {docente.nombre[0]}
                        {docente.apellidoPaterno[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {docente.nombre} {docente.apellidoPaterno}
                        </h3>
                        <p className="text-sm text-gray-500">{docente.cargo}</p>
                        <span
                          className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                            docente.especialidad === "Ingeniería Industrial"
                              ? "bg-blue-100 text-blue-800"
                              : docente.especialidad === "Ingeniería de Sistemas"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {docente.especialidad.replace("Ingeniería de ", "").replace("Ingeniería ", "")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {docentesFiltrados.length === 0 && (
                <div className="text-center py-12 text-gray-500 bg-white rounded-xl shadow-md">
                  No se encontraron docentes con ese criterio de búsqueda.
                </div>
              )}
            </div>

            {/* Docente Detail Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
                {docenteSeleccionado ? (
                  <div>
                    <div className="text-center mb-6">
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 ${
                          docenteSeleccionado.especialidad === "Ingeniería Industrial"
                            ? "bg-[#1e5a8a]"
                            : docenteSeleccionado.especialidad === "Ingeniería de Sistemas"
                            ? "bg-[#388e3c]"
                            : "bg-[#f57c00]"
                        }`}
                      >
                        {docenteSeleccionado.nombre[0]}
                        {docenteSeleccionado.apellidoPaterno[0]}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {docenteSeleccionado.nombre} {docenteSeleccionado.apellidoPaterno}{" "}
                        {docenteSeleccionado.apellidoMaterno}
                      </h2>
                      <p className="text-gray-500">{docenteSeleccionado.cargo}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <Award className="w-5 h-5 text-[#8b1e3f] mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Grado Académico
                          </p>
                          <p className="font-medium text-gray-900">
                            {docenteSeleccionado.grado}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <Briefcase className="w-5 h-5 text-[#8b1e3f] mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Especialidad
                          </p>
                          <p className="font-medium text-gray-900">
                            {docenteSeleccionado.especialidad}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <Mail className="w-5 h-5 text-[#8b1e3f] mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Correo Institucional
                          </p>
                          <p className="font-medium text-gray-900 text-sm break-all">
                            {docenteSeleccionado.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <BookOpen className="w-5 h-5 text-[#8b1e3f] mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                            Cursos que Dicta
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {docenteSeleccionado.cursos.map((curso) => (
                              <span
                                key={curso}
                                className="px-2 py-1 bg-[#8b1e3f] text-white text-xs rounded-full"
                              >
                                {curso}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <p className="text-xs text-gray-400 text-center">
                          Código: {docenteSeleccionado.codigo}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Briefcase className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Selecciona un docente para ver su información detallada</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-8 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Resumen de Plana Docente
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-[#8b1e3f]">
                  {docentes.length}
                </p>
                <p className="text-sm text-gray-600">Total Docentes</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-[#1e5a8a]">
                  {docentes.filter((d) => d.especialidad === "Ingeniería Industrial").length}
                </p>
                <p className="text-sm text-gray-600">Ing. Industrial</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-[#388e3c]">
                  {docentes.filter((d) => d.especialidad === "Ingeniería de Sistemas").length}
                </p>
                <p className="text-sm text-gray-600">Ing. de Sistemas</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-[#f57c00]">
                  {docentes.filter((d) => d.especialidad === "Ingeniería de Software").length}
                </p>
                <p className="text-sm text-gray-600">Ing. de Software</p>
              </div>
            </div>
          </div>
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
