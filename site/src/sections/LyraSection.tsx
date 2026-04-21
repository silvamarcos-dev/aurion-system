import { motion } from "framer-motion";

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function LyraSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Lyra Core
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Uma nova forma de inteligência.
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            A Lyra não responde apenas.
            Ela entende, organiza, decide e executa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard
            title="Conversa humana"
            description="Interação natural, fluida e adaptativa, como uma conversa real."
          />

          <FeatureCard
            title="Orquestração inteligente"
            description="Coordena agentes, tarefas e decisões com base no contexto."
          />

          <FeatureCard
            title="Memória contínua"
            description="Lembra do usuário, contexto e evolui a cada interação."
          />

          <FeatureCard
            title="Execução de tarefas"
            description="Capaz de agir: enviar mensagens, gerar conteúdo e automatizar ações."
          />

          <FeatureCard
            title="Arquitetura modular"
            description="Expansível com novos agentes, funções e integrações."
          />

          <FeatureCard
            title="Visão estratégica"
            description="Auxilia em decisões, planejamento e análise de cenários."
          />
        </div>
      </div>
    </section>
  );
}