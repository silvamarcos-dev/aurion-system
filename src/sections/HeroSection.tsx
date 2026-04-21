import { motion } from "framer-motion";
import RotatingText from "../components/RotatingText";
import HeroChatDemo from "../components/HeroChatDemo";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_28%)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.12)]"
          >
            Pré-lançamento aberto
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-8 text-5xl font-bold tracking-tight md:text-7xl"
          >
            Lyra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl lg:mx-0"
          >
            Pare de usar uma IA que apenas responde.
            <br />
            Use uma IA quue conversa, entende e se adapta a você.
            <br />
            <RotatingText />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start"
          >
            <button className="rounded-2xl bg-blue-600 px-8 py-4 font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] hover:bg-blue-500">
              Inscreva-se
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-xl transition hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
              Ver demo
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mx-auto w-full max-w-5xl"
        >
          <HeroChatDemo />
        </motion.div>
      </div>
    </section>
  );
}