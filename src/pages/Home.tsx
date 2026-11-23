import {
  ArrowDown,
  ArrowUpRight,
  Palette,
  Code2,
  Gamepad2,
  Layers3,
} from 'lucide-react'

import { Link } from 'react-router-dom'

const modules = [
  {
    name: 'ARTE',
    subtitle: 'HECHO A MANO',
    description:
      'Diseño visual, arte, creatividad y experimentación.',
    path: '/art',
    icon: Palette,
    color: 'orange',
    status: 'EXPLORAR',
  },
  {
    name: 'PROGRAMACIÓN',
    subtitle: 'SOFTWARE Y TECNOLOGÍA',
    description:
      'Desarrollo web, software, aplicaciones y soluciones digitales.',
    path: '/dev',
    icon: Code2,
    color: 'blue',
    status: 'EXPLORAR',
  },
  {
    name: 'PLAY',
    subtitle: 'ENLACES ONLINE',
    description:
      'Videojuegos, experiencias interactivas y proyectos experimentales. Creando y conociendo',
    path: '/play',
    icon: Gamepad2,
    color: 'green',
    status: 'EXPLORAR',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff]/5 text-black">

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[85vh] items-start overflow-hidden px-6 pt-24"
      >
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-orange-500/[0.07] blur-[130px]" />

        <div className="mx-auto w-full max-w-6xl">
    
          {/* TITLE */}
          <p className="mb-5 text-sm font-medium tracking-[0.3em] text-red-800">
           ECOSISTEMA KISIO 
          </p>

          <h1 className="max-w-5xl text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
            Transformando ideas en 
            <span className="block text-red-800">
            EXPERIENCIAS
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-800 md:text-lg">
            Kisio es un espacio donde convergen
            lo artesanal,
            la tecnología, la creatividad y el desarrollo.
            Un ecosistema dedicado a crear,
            experimentar y construir proyectos de todo tipo.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-xl bg-red-800 px-6 py-3 font-medium text-white transition hover:bg-red-200 hover:text-black" 
            >
              Explorar ecosistema
              <ArrowDown size={18} />
            </a>

            <a
              href="#about-kisio"
              
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-medium text-zinc-400 transition hover:border-white/20 hover:bg-white/5 hover:text-black"
            >
              sobre kisio
              <ArrowDown size={18} />
            </a>


          </div>

          {/* DECORATIVE */}
          <div className="mt-20 flex items-center gap-3 text-xs tracking-widest text-zinc-600">
            <Layers3 size={16} />
            <span>3 MÓDULOS · 1 ECOSISTEMA</span>
          </div>

        </div>
      </section>

      {/* MODULES */}
      <section
        id="modules"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          {/* HEADER */}
          <div className="mb-12">
            <p className="mb-3 text-xs tracking-[0.3em] text-red-800">
              MÓDULOS INTERNOS
            </p>

            <h2 className="text-3xl font-bold sm:text-5xl">
              Investigar <span className="text-red-800">
                Módulos
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-800">
              Cada módulo representa una parte
              diferente de mí. Explorá las distintas
              áreas y conóceme.
            </p>
          </div>

          {/* MODULE GRID */}
          <div className="grid gap-5 md:grid-cols-3">

            {modules.map((module) => {
              const Icon = module.icon

              return (
                <Link
                  key={module.name}
                  to={module.path}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] ${
                    module.color === 'orange'
                      ? 'hover:border-orange-500/40'
                      : module.color === 'blue'
                        ? 'hover:border-blue-500/40'
                        : 'hover:border-green-500/40'
                  }`}
                >

                  {/* ICON */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      module.color === 'orange'
                        ? 'bg-orange-500/10 text-orange-400'
                        : module.color === 'blue'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-green-500/10 text-green-400'
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  {/* CONTENT */}
                  <p className="mt-8 text-xs tracking-[0.2em] text-zinc-800">
                    {module.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {module.name}
                  </h3>

                  <p className="mt-4 min-h-20 text-sm leading-6 text-zinc-800">
                    {module.description}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">

                    <span
                      className={`text-xs font-medium tracking-widest ${
                        module.color === 'orange'
                          ? 'text-orange-400'
                          : module.color === 'blue'
                            ? 'text-blue-400'
                            : 'text-green-400'
                      }`}
                    >
                      {module.status}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                    />

                  </div>
                </Link>
              )
            })}

          </div>
        </div>
      </section>

      {/* ABOUT KISIO */}
      <section 
      id="about-kisio"
      className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-red-800">
              Sobre Kisio
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Espacio interactivo experimental para
              <br />
              <span className="text-red-800">
                crear sin límites
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-zinc-800 md:text-base">

            <p>
              Kisio nace como un espacio personal para
              explorar diferentes disciplinas digitales,
              desarrollar ideas y compartir proyectos.
            </p>

            <p>
              Desde programación y desarrollo de software
              hasta arte y videojuegos, cada módulo
              tiene su propia identidad dentro de un mismo
              ecosistema.
            </p>

            <p>
              Un proyecto en constante evolución.
            </p>

          </div>
        </div>
      </section>

    </main>
  )
}