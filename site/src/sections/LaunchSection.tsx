export default function LaunchSection() {
  return (
    <section id="lancamento" className="px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Lançamento
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              A Lyra está chegando.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              O lançamento da Lyra marca o início de uma nova fase para a Aurion System:
              uma fase em que inteligência, automação e presença digital começam a operar juntas.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
                Acompanhar lançamento
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_35%)] p-8 md:p-12">
            <div className="aspect-video w-full rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
              <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-700 text-slate-500">
                Vídeo teaser da Lyra
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}