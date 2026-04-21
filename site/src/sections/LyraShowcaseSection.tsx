import ScrollReveal from "../components/ScrollReveal";

function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-base leading-8 text-slate-400">{description}</p>
    </div>
  );
}

export default function LyraShowcaseSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl space-y-24">
        <ScrollReveal>
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Lyra
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              O núcleo inteligente da Aurion.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              A Lyra não nasceu para ser apenas um chatbot.
              Ela está sendo construída para conversar, organizar, decidir, executar e evoluir.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between px-2">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Teaser Oficial
              </p>
            </div>

            <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
                playsInline
              >
                <source src="/public/videos/lyra.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <InfoCard
              title="História de origem"
              description="A Lyra começou em 14 de março de 2026 como um chatbot. Mas isso não era suficiente. Há poucos dias, a decisão mudou tudo: transformar a Lyra em um núcleo real de inteligência."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <InfoCard
              title="O que ela é hoje"
              description="Uma arquitetura de inteligência com chat humano, memória, agentes especializados, orquestração, supervisão e evolução contínua."
            />
          </ScrollReveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ScrollReveal>
            <InfoCard
              title="Chat Humano"
              description="Conversa natural, próxima e contextualizada."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <InfoCard
              title="Memória"
              description="Resumo, tags, objetivos e continuidade real."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <InfoCard
              title="Agentes"
              description="Especialistas internos colaborando para resolver tarefas complexas."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <InfoCard
              title="Orquestração"
              description="Coordenação inteligente entre múltiplas camadas de decisão."
            />
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Evolução
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              A Lyra está sendo construída em público.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm text-slate-500">14 de março de 2026</p>
                <h3 className="mt-3 text-xl font-semibold">Nascimento</h3>
                <p className="mt-3 text-slate-400">
                  A Lyra começou como um chatbot.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm text-slate-500">Evolução</p>
                <h3 className="mt-3 text-xl font-semibold">Expansão</h3>
                <p className="mt-3 text-slate-400">
                  Memória, agentes, orquestração e supervisão foram sendo adicionados.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm text-slate-500">Nova fase</p>
                <h3 className="mt-3 text-xl font-semibold">Núcleo</h3>
                <p className="mt-3 text-slate-400">
                  A Lyra deixou de ser apenas interface e passou a ser um núcleo inteligente.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Próximo passo
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Acompanhe o lançamento da Lyra
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A Lyra ainda está sendo construída. E isso é só o começo.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500">
                Quero acompanhar
              </button>

              <button className="rounded-2xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-slate-500">
                Ver lançamento
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}