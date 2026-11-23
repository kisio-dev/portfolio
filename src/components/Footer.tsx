import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-b border-black/10 bg-[black]/5 backdrop-blur-xl">

      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 border-t border-black/5 pt-6 sm:flex-row mb-4">

        <p className="ml-4 text-xs text-zinc-500">
          © {new Date().getFullYear()} Kisio. Todos los derechos reservados.
        </p>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className="flex items-center gap-2 text-xs text-zinc-700 transition hover:text-black mr-4 ml-4"
        >
          Volver arriba
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  )
}