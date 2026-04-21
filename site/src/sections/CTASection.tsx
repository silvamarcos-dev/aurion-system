export default function CTASection() {
  return (
    <section id="contato" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-10 shadow-2xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Contato
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Fale com a Aurion System
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Entre em contato para conhecer a Lyra, acompanhar o lançamento ou falar
              diretamente com o desenvolvimento da Aurion.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                Desenvolvimento
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Marcos Vinícius da Silva Rodrigues
              </h3>
              <p className="mt-3 text-base text-slate-400">
                Fundador, CEO e responsável pelo desenvolvimento da Aurion System.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                Contatos
              </p>

              <div className="mt-4 space-y-3 text-base text-slate-300">
                <p>Email: aurionsystem@gmail.com</p>
                <p>Instagram: @aurion.system</p>
                <p>WhatsApp: (44) 99720-3562</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                Lançamento da Lyra
              </p>
              <p className="mt-4 text-base leading-8 text-slate-400">
                Acompanhe as atualizações da Lyra e faça parte do início de uma nova fase
                da inteligência artificial criada pela Aurion System.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}