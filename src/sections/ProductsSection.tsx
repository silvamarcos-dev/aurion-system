import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function ProductCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <h3 className="text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-base leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-8">
        <Link
          to={link}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/10"
        >
          Saiba mais
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section id="produtos" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Produtos
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Soluções criadas pela Aurion System
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              A Aurion desenvolve produtos com foco em inteligência, automação e
              experiência digital, unindo visão estratégica com tecnologia aplicada.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ScrollReveal>
            <ProductCard
              title="Lyra"
              description="A inteligência artificial da Aurion System. Uma arquitetura inteligente capaz de conversar, organizar, executar e evoluir com o tempo."
              link="/lyra"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <ProductCard
              title="Sistemas Web"
              description="Plataformas web profissionais para empresas que precisam de presença digital, operação estruturada e experiência moderna."
              link="/produtos/sistemas-web"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ProductCard
              title="Automação Empresarial"
              description="Soluções para automatizar processos internos, reduzir trabalho manual e aumentar eficiência operacional."
              link="/produtos/automacao-empresarial"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <ProductCard
              title="Agentes Inteligentes"
              description="Criação de agentes especializados para atendimento, estratégia, suporte, operação e contextos empresariais diversos."
              link="/produtos/agentes-inteligentes"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ProductCard
              title="Aplicações Sob Demanda"
              description="Desenvolvimento de soluções personalizadas para empresas, projetos e operações com necessidade específica."
              link="/produtos/aplicacoes-sob-demanda"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <ProductCard
              title="Arquitetura de IA"
              description="Estruturação de ecossistemas inteligentes baseados em memória, orquestração, agentes e expansão multimodal."
              link="/produtos/arquitetura-de-ia"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}