export default function AurionSection() {
  return (
    <section id="aurion" className="px-6 py-24">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Aurion System
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Tecnologia criada com visão, ambição e propósito.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A Aurion System é uma empresa de tecnologia fundada em 07 de dezembro de 2025,
            com o objetivo de desenvolver soluções modernas, inteligentes e escaláveis para
            pessoas e empresas.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
            <h3 className="text-2xl font-semibold">História da Aurion</h3>
            <p className="mt-4 text-base leading-8 text-slate-400">
              Inicialmente conhecida como <span className="text-white">Adoração Criativa Church</span>,
              a organização passou por um processo de reestruturação e reposicionamento estratégico,
              dando origem à Aurion System. A partir daí, a empresa consolidou sua atuação no setor
              de tecnologia com foco em inovação, sistemas e inteligência aplicada.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
            <h3 className="text-2xl font-semibold">CEO</h3>
            <p className="mt-4 text-base leading-8 text-slate-400">
              A Aurion System é liderada por <span className="text-white">Marcos Vinícius da Silva Rodrigues</span>,
              fundador e CEO, com visão voltada à construção de sistemas próprios, inteligência
              artificial e soluções digitais com identidade forte e alto potencial de crescimento.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
            <h3 className="text-2xl font-semibold">Funcionamento</h3>
            <p className="mt-4 text-base leading-8 text-slate-400">
              A Aurion opera com foco em desenvolvimento, inovação, pesquisa e estruturação de
              produtos digitais. O funcionamento é voltado para evolução contínua de soluções,
              atendimento estratégico e construção de plataformas com base tecnológica sólida.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
            <h3 className="text-2xl font-semibold">Áreas de atuação</h3>
            <ul className="mt-4 space-y-3 text-base text-slate-400">
              <li>• Desenvolvimento de sistemas e softwares personalizados</li>
              <li>• Criação de plataformas e aplicações web</li>
              <li>• Automação de processos empresariais</li>
              <li>• Inteligência artificial e agentes inteligentes</li>
              <li>• Suporte e soluções tecnológicas sob demanda</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}