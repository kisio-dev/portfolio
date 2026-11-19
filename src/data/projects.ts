export interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  demo?: string
  status: 'completed' | 'in-progress'
}

export const projects: Project[] = [
  {
    title: 'Sistema de gestión',
    description:
      'Aplicación Full Stack para administrar productos, clientes, stock y ventas de un negocio.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/kisio-dev/business-management-system',
    status: 'in-progress',
  },
  {
    title: 'API REST',
    description:
      'API para gestionar tareas, usuarios y proyectos. Incluye autenticación y validaciones.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/kisio-dev/task-management-api',
    status: 'in-progress',
  },
  {
    title: 'Portfolio',
    description:
      'Mi sitio personal para mostrar proyectos, tecnologías y experiencia como desarrollador.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/kisio-dev/portfolio',
    status: 'in-progress',
  },
]