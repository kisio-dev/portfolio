import { Menu, X, ChevronDown, Palette, Gamepad2, Code2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [modulesOpen, setModulesOpen] = useState(false)

  const socialmedias = [
    { label: 'Instagram', href: 'https://www.instagram.com/https.kisio', logo: 'logoig.png'},
    { label: 'Kick', href: 'https://www.instagram.com/kisio.dev'},
    { label: 'Twitch', href: 'https://www.instagram.com/kisio.dev'},
    { label: 'TikTok', href: 'https://www.instagram.com/kisio.dev'},
    { label: 'YouTube', href: 'https://www.instagram.com/kisio.dev'},
    { label: 'GitHub', href: 'https://github.com/kisio-dev'},
    { label: 'Facebook', href: 'https://www.facebook.com/kisio' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kisio-dev/' },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-black/10 bg-[black]/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* LOGO + DROPDOWN */}
        <div className="relative group"
        onMouseEnter={() => setModulesOpen(true)}
        onMouseLeave={() => setModulesOpen(false)}>

          {/* Botón principal */}
          <button
              type="button"
              onClick={() => setModulesOpen((prev) => !prev)}
              className="flex items-center gap-4 rounded-full px-3 py-1 transition-all duration-300 hover:bg-black/5"
            >
            {/* Logo */}
            <div className="rounded-full border border-transparent transition-all duration-300 group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.25)]">
              <Link to="/">
              <img
                src="/kisio-logo.png"
                alt="Kisio logo"
                className="h-10 w-10 rounded-full object-cover"
              />
            </Link>
            </div>

            {/* Nombre */}
            <span className="font-semibold tracking-tight text-black">
              Kisio
            </span>

            {/* Indicador verde */}
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            {/* Flecha */}
            <ChevronDown
            size={15}
            className={`text-zinc-500 transition-transform duration-300 ${
              modulesOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
          </button>

          {/* DROPDOWN */}
          <div className={`absolute left-0 top-full z-50 w-56 pt-3 transition-all duration-200 ${
            modulesOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible translate-y-2 opacity-0'
          }`}>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#ffffff] p-2 shadow-2xl shadow-black/40">
              
              {/* KISIO PLAY */}
              <Link
                to="/dev"
                className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-black/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
                  <Code2 size={18} className="text-blue-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-black">
                  PROGRAMACIÓN
                  </p>

                  <p className="text-xs text-zinc-500">
                    Software y tecnología
                  </p>
                </div>
              </Link>

              {/* KISIO ART */}
              <Link
                to="/art"
                className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-black/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
                  <Palette size={18} className="text-orange-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-black">
                    ARTE
                  </p>

                  <p className="text-xs text-zinc-500">
                    Diseño y creatividad
                  </p>
                </div>
              </Link>

              {/* KISIO PLAY */}
              <Link
                to="/play"
                className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-black/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
                  <Gamepad2 size={18} className="text-green-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-black">
                  JUEGOS
                  </p>

                  <p className="text-xs text-zinc-500">
                    Gaming y entretenimiento
                  </p>
                </div>
              </Link>

            </div>
          </div>
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
          className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#ffffff]/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {socialmedias.map((link) => (
              <Link
                key={link.label}
                target='_blank'
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-500 transition hover:text-black"
              >
                {link.label}
              </Link>
            ))}

            
          </div>
        </div>
      )}
    </nav>
  )
}