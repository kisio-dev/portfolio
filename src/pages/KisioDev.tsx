import {
    ArrowUpRight,
  Code2,
  Mail,
  MapPin,
} from 'lucide-react'

import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue.js',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'NestJS',
  'MySQL',
  'SQLite',
  'MongoDB',
  'PostgreSQL',
  'Git',
  'HTML',
  'CSS',
]

export default function KisioDev() {
  return (
    <main className="min-h-screen bg-[blue]/5 text-black">

      {/* HERO */}
      <section
        id="dev-home"
        className="relative flex min-h-[90vh] items-start overflow-hidden px-6 pt-24"
      >
        {/* BLUE GLOW */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[130px]" />

        <div className="mx-auto w-full max-w-6xl">

          <p className="mb-5 text-sm font-medium tracking-[0.3em] text-blue-400">
            KISIO / DEV
          </p>

          <h1
          id='#inicio' 
          className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl">
            Software
            <span className="block text-blue-800">
              Developer.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-800">
            Soy desarrollador egresado de la UTN,
            enfocado en construir aplicaciones web,
            desarrollar soluciones Full Stack y
            transformar ideas en productos digitales.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/kisio-dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-800 px-6 py-3 font-medium text-white transition hover:bg-blue-200 hover:text-black"
            >
              GitHub
              <ArrowUpRight size={18} />
            </a>

    

          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-zinc-500">
            <MapPin size={16} />
            Argentina
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="dev-projects"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <p className="mb-3 text-xs tracking-[0.3em] text-blue-800">
              PORTFOLIO
            </p>

            <h2 className="text-3xl font-bold sm:text-5xl">
            Proyectos Personales
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-800">
              Aplicaciones y entornos web que he construido
              para poner en práctica
              conocimientos, aprender nuevas tecnologías
              y resolver problemas.
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

      {/* TECHNOLOGIES */}
      <section
        id="dev-technologies"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-10">
            <p className="mb-3 text-xs tracking-[0.3em] text-blue-800">
              TECNOLOGÍAS
            </p>

            <h2 className="text-3xl font-bold sm:text-5xl">
              Stack 
            </h2>

            <p className="mt-5 max-w-xl text-zinc-800">
              Herramientas y tecnologías con las que
              trabajo y continúo desarrollando mis
              conocimientos.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-500 transition hover:border-blue-500/40 hover:bg-blue-500/[0.04] hover:text-black"
              >
                <Code2
                  size={16}
                  className="text-blue-800"
                />

                {technology}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="dev-about"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-blue-800">
              SOBRE MÍ
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Construyendo.
              <br />
              Aprendiendo.
              <br />
              Mejorando.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-zinc-800 md:text-base">

            <p>
              Soy egresado de la Tecnicatura Universitaria
              en Programación de la Universidad Tecnológica
              Nacional.
            </p>

            <p>
              Actualmente estoy enfocado en el desarrollo
              Full Stack, construyendo proyectos personales
              que me permitan profundizar mis conocimientos
              en frontend, backend, bases de datos y buenas
              prácticas de desarrollo.
            </p>

            <p>
              Busco mi primera oportunidad profesional
              para aportar, aprender de un equipo y
              continuar creciendo como desarrollador.
            </p>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="dev-contact"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-3 text-xs tracking-[0.3em] text-blue-800">
            CONTACTO
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-6xl">
            ¿Creamos algo juntos?
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-zinc-800">
            Estoy abierto a oportunidades laborales,
            proyectos freelance y colaboraciones.
            Si tenés una propuesta, no dudes en contactarme.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="mailto:kisiodev@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl bg-blue-800 px-6 py-3 font-medium text-white transition hover:bg-blue-300"
            >
              <Mail size={18} />
              Contactarme
            </a>

          </div>

        </div>
      </section>

    </main>
  )
}