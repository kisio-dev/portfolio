export default function KisioPlay() {
  return (
    <main className="min-h-screen bg-[green]/5 text-black">

      {/* HERO */}
      <section
        id="play-home"
        className="relative flex min-h-[90vh] items-start overflow-hidden px-6 pt-24"
      >

        {/* GREEN GLOW */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-green-500/[0.08] blur-[130px]" />

        <div className="mx-auto w-full max-w-6xl">

          <p className="mb-5 text-sm font-medium tracking-[0.3em] text-green-400">
            KISIO / PLAY
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl">
            Estudio de
            <span className="block text-green-400">
              Juegos.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-800">
            Videojuegos, experiencias interactivas
            y experimentación. Un espacio para desarrollar
            ideas y convertirlas en juegos.
          </p>

        </div>
      </section>

    </main>
  )
}