import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
} from 'lucide-react'

import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

function App() {
  const technologies = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MySQL',
    'Sqlite',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'HTML',
    'CSS',
  ]

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-600/10 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-6xl py-24">

          <div className="mb-8 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <span className="text-sm text-zinc-400">
              Disponible para oportunidades laborales
            </span>
          </div>

          <p className="mb-4 text-lg text-orange-400">
            Hola, soy desarrollador de software.
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Construyo soluciones
            <span className="block text-orange-300">
              digitales.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Soy desarrollador egresado de la UTN, Argentina.
            Me apasiona construir aplicaciones web,
            aprender nuevas tecnologías y resolver
            problemas mediante la programación.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-medium transition hover:bg-orange-400"
            >
              Ver proyectos
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/10 px-6 py-3 font-medium transition hover:bg-white/5"
            >
              Contactarme
            </a>
          </div>

          <div className="mt-12 flex items-center gap-2 text-sm text-zinc-500">
            <MapPin size={16} />
            Argentina
          </div>

          <a
            href="#projects"
            className="mt-20 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
          >
            Descubrí mi trabajo
            <ArrowDown size={16} />
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <p className="mb-3 text-sm font-medium text-orange-400">
              PORTFOLIO
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Proyectos destacados
            </h2>

            <p className="mt-4 max-w-xl text-zinc-400">
              Algunos proyectos en los que estoy trabajando
              para aplicar conocimientos y seguir creciendo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-medium text-orange-400">
              SOBRE MÍ
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Aprender.
              <br />
              Construir.
              <br />
              Mejorar.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-zinc-400">
              Soy egresado de la Tecnicatura Universitaria
              en Programación de la Universidad Tecnológica
              Nacional.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              Actualmente estoy enfocado en el desarrollo
              Full Stack, construyendo proyectos personales
              que me permitan profundizar mis conocimientos
              en frontend, backend, bases de datos y buenas
              prácticas de desarrollo.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              Busco mi primera oportunidad profesional
              para aportar, aprender de un equipo y
              continuar creciendo como desarrollador.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10">
            <p className="mb-3 text-sm font-medium text-orange-400">
              SKILLS
            </p>

            <h2 className="text-3xl font-bold">
              Tecnologías
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 transition hover:border-red-500/40 hover:text-white"
              >
                <Code2 size={16} className="text-blue-400" />
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-3 text-sm font-medium text-orange-400">
            CONTACTO
          </p>

          <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">
            ¿Trabajamos juntos?
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-zinc-400">
            Estoy abierto a oportunidades laborales,
            proyectos freelance y colaboraciones.
            Si tenés una propuesta, no dudes en contactarme.
          </p>

          <a
            href="mailto:kisiodev@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            <Mail size={18} />
            Enviarme un email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Kisio. Hecho con React.
          </p>

          <p>
            Diseñado y desarrollado por Kisio.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App