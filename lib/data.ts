// Datos de alumnos generados aleatoriamente
const nombres = [
  "Carlos", "María", "José", "Ana", "Luis", "Carla", "Pedro", "Sofia", "Miguel", "Valeria",
  "Fernando", "Lucia", "Diego", "Camila", "Andrés", "Paula", "Ricardo", "Daniela", "Jorge", "Andrea",
  "Eduardo", "Natalia", "Sergio", "Gabriela", "Roberto", "Isabella", "Manuel", "Victoria", "Francisco", "Alejandra",
  "Javier", "Fernanda", "Oscar", "Mariana", "Raúl", "Carolina", "Alberto", "Patricia", "Gustavo", "Adriana",
  "Arturo", "Rosa", "Enrique", "Elena", "Hugo", "Claudia", "César", "Diana", "Víctor", "Mónica"
];

const apellidos = [
  "García", "Rodríguez", "Martínez", "López", "González", "Hernández", "Pérez", "Sánchez", "Ramírez", "Torres",
  "Flores", "Rivera", "Gómez", "Díaz", "Cruz", "Morales", "Reyes", "Gutiérrez", "Ortiz", "Ramos",
  "Vargas", "Castillo", "Mendoza", "Ruiz", "Jiménez", "Herrera", "Medina", "Aguilar", "Vega", "Fernández",
  "Castro", "Romero", "Alvarez", "Navarro", "Delgado", "Molina", "Cabrera", "Ríos", "Silva", "Paredes"
];

const especialidades = [
  "Ingeniería Industrial",
  "Ingeniería de Sistemas",
  "Ingeniería de Software"
];

export interface Alumno {
  id: string;
  codigo: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  ciclo: number;
  especialidad: string;
  email: string;
  promedio: number;
}

export interface Docente {
  id: string;
  codigo: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  especialidad: string;
  email: string;
  grado: string;
  cargo: string;
  cursos: string[];
}

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateCodigo(ciclo: number, index: number): string {
  const year = 2025 - (ciclo - 1);
  return `${year}${String(index + 1).padStart(4, '0')}`;
}

// Generar 60 alumnos distribuidos en los 10 ciclos
export function generateAlumnos(): Alumno[] {
  const alumnos: Alumno[] = [];
  let globalIndex = 0;
  
  for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const alumnosPorCiclo = ciclo <= 5 ? 7 : 5; // Más alumnos en ciclos bajos
    
    for (let i = 0; i < alumnosPorCiclo; i++) {
      const nombre = getRandomElement(nombres);
      const apellidoPaterno = getRandomElement(apellidos);
      const apellidoMaterno = getRandomElement(apellidos);
      const especialidad = getRandomElement(especialidades);
      const codigo = generateCodigo(ciclo, globalIndex);
      
      alumnos.push({
        id: `alumno-${globalIndex}`,
        codigo,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        ciclo,
        especialidad,
        email: `${nombre.toLowerCase()}.${apellidoPaterno.toLowerCase()}@uni.pe`,
        promedio: Math.round((Math.random() * 6 + 11) * 100) / 100, // 11.00 - 17.00
      });
      
      globalIndex++;
    }
  }
  
  return alumnos;
}

// Generar docentes
const cursosPorEspecialidad: Record<string, string[]> = {
  "Ingeniería Industrial": [
    "Procesos Industriales", "Gestión de la Calidad", "Logística", "Investigación de Operaciones",
    "Ergonomía", "Gestión de Proyectos", "Ingeniería de Métodos", "Control de Producción"
  ],
  "Ingeniería de Sistemas": [
    "Algoritmos", "Estructuras de Datos", "Base de Datos", "Redes de Computadoras",
    "Sistemas Operativos", "Inteligencia Artificial", "Arquitectura de Computadoras", "Seguridad Informática"
  ],
  "Ingeniería de Software": [
    "Desarrollo Web", "Ingeniería de Software", "Testing de Software", "DevOps",
    "Arquitectura de Software", "UX/UI Design", "Metodologías Ágiles", "Cloud Computing"
  ]
};

const grados = [
  "Magíster en Ingeniería",
  "Doctor en Ingeniería",
  "Magíster en Ciencias",
  "Doctor en Ciencias de la Computación",
  "Magíster en Administración"
];

const cargos = [
  "Profesor Principal",
  "Profesor Asociado",
  "Profesor Auxiliar",
  "Jefe de Práctica",
  "Coordinador de Área"
];

export function generateDocentes(): Docente[] {
  const docentes: Docente[] = [];
  
  const docentesData = [
    { nombre: "Roberto", apellidoPaterno: "Mendoza", apellidoMaterno: "Silva" },
    { nombre: "Patricia", apellidoPaterno: "García", apellidoMaterno: "Torres" },
    { nombre: "Eduardo", apellidoPaterno: "Ramírez", apellidoMaterno: "López" },
    { nombre: "Carmen", apellidoPaterno: "Hernández", apellidoMaterno: "Vega" },
    { nombre: "Mario", apellidoPaterno: "Castillo", apellidoMaterno: "Flores" },
    { nombre: "Lucía", apellidoPaterno: "Morales", apellidoMaterno: "Díaz" },
    { nombre: "Fernando", apellidoPaterno: "Rivera", apellidoMaterno: "Cruz" },
    { nombre: "Isabel", apellidoPaterno: "Gutiérrez", apellidoMaterno: "Reyes" },
    { nombre: "Andrés", apellidoPaterno: "Vargas", apellidoMaterno: "Medina" },
    { nombre: "Gabriela", apellidoPaterno: "Ruiz", apellidoMaterno: "Aguilar" },
    { nombre: "César", apellidoPaterno: "Ortiz", apellidoMaterno: "Fernández" },
    { nombre: "Adriana", apellidoPaterno: "Castro", apellidoMaterno: "Romero" },
    { nombre: "Jorge", apellidoPaterno: "Delgado", apellidoMaterno: "Molina" },
    { nombre: "Natalia", apellidoPaterno: "Cabrera", apellidoMaterno: "Ríos" },
    { nombre: "Sergio", apellidoPaterno: "Paredes", apellidoMaterno: "Navarro" },
  ];
  
  docentesData.forEach((data, index) => {
    const especialidad = especialidades[index % especialidades.length];
    const cursosDisponibles = cursosPorEspecialidad[especialidad];
    const numCursos = Math.floor(Math.random() * 2) + 2; // 2-3 cursos
    const cursos: string[] = [];
    
    for (let i = 0; i < numCursos; i++) {
      const curso = cursosDisponibles[Math.floor(Math.random() * cursosDisponibles.length)];
      if (!cursos.includes(curso)) {
        cursos.push(curso);
      }
    }
    
    docentes.push({
      id: `docente-${index}`,
      codigo: `DOC${String(index + 1).padStart(3, '0')}`,
      nombre: data.nombre,
      apellidoPaterno: data.apellidoPaterno,
      apellidoMaterno: data.apellidoMaterno,
      especialidad,
      email: `${data.nombre.toLowerCase()}.${data.apellidoPaterno.toLowerCase()}@uni.edu.pe`,
      grado: grados[index % grados.length],
      cargo: cargos[index % cargos.length],
      cursos,
    });
  });
  
  return docentes;
}

export const alumnos = generateAlumnos();
export const docentes = generateDocentes();
