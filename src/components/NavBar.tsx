import { Menu, X, ChevronDown, Palette, Gamepad2 } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Inicio', href: '#home' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* LOGO + DROPDOWN */}
        <div className="relative group">

          {/* Botón principal */}
          <button
            className="flex items-center gap-3 rounded-full px-2 py-1 transition-all duration-300 hover:bg-white/5"
          >
            {/* Logo */}
            <div className="rounded-full border border-transparent transition-all duration-300 group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.25)]">
              <img
                src="/kisio-logo.png"
                alt="Kisio logo"
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>

            {/* Nombre */}
            <span className="font-semibold tracking-tight text-white">
              Kisio
            </span>

            {/* Indicador verde */}
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            {/* Flecha */}
            <ChevronDown
              size={15}
              className="text-zinc-500 transition-transform duration-300 group-hover:rotate-180"
            />
          </button>

          {/* DROPDOWN */}
          <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111113] p-2 shadow-2xl shadow-black/40">

              {/* KISIO ART */}
              <a
                href="https://kisio-art.com"
                className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-white/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
                  <Palette size={18} className="text-orange-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    KISIO ART
                  </p>

                  <p className="text-xs text-zinc-500">
                    Diseño y creatividad
                  </p>
                </div>
              </a>

              {/* KISIO PLAY */}
              <a
                href="https://kisio-play.com"
                className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-white/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
                  <Gamepad2 size={18} className="text-blue-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    KISIO PLAY
                  </p>

                  <p className="text-xs text-zinc-500">
                    Gaming y desarrollo
                  </p>
                </div>
              </a>

            </div>
          </div>
        </div>

        

        {/* LINKS */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* GITHUB */}
        <div className="hidden md:flex">
          <a
            href="https://github.com/kisio-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group rounded-full border-2 border-transparent p-1 transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.25)]"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="h-8 w-8 rounded-full object-cover"
            />
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="rounded-lg p-2 text-zinc-300 transition hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#09090b]/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://github.com/kisio-dev"
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-center gap-3"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="h-8 w-8 rounded-full"
              />

              <span className="text-sm text-zinc-300">
                GitHub
              </span>
            </a>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-xs text-zinc-400">
                Disponible para oportunidades laborales
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}