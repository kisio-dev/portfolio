export default function KisioArt() {
  return (
    <main className="min-h-screen bg-[orange]/5 text-black">

      {/* HERO */}
      <section
        id="art-home"
        className="relative flex min-h-[90vh] items-start overflow-hidden px-6 pt-24"
      >

        {/* ORANGE GLOW */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-500/[0.08] blur-[130px]" />

        <div className="mx-auto w-full max-w-6xl">

          <p className="mb-5 text-sm font-medium tracking-[0.3em] text-orange-400">
            KISIO / ARTE
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl">
            Estudio
            <span className="block text-orange-400">
              Creativo
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-800">
            Diseño, arte y experimentación
            creativa. Un espacio para explorar ideas
            y construir experiencias visuales.
          </p>

        </div>
      </section>

    </main>
  )
}