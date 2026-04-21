import { useEffect, useMemo, useState } from "react";

const userMessage = "Crie uma estratégia para lançar um SaaS de IA no mercado.";
const lyraMessage =
  "Entendi. Vou estruturar uma estratégia completa dividida em três fases: posicionamento, validação e escala.";

function useTypewriter(text: string, speed = 28, start = true) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) {
      setDisplayed("");
      return;
    }

    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return displayed;
}

export default function HeroChatDemo() {
  const [phase, setPhase] = useState<"idle" | "user" | "lyra" | "agents">("idle");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setPhase("idle");

    const t1 = setTimeout(() => setPhase("user"), 500);
    const t2 = setTimeout(() => setPhase("lyra"), 2200);
    const t3 = setTimeout(() => setPhase("agents"), 6200);
    const t4 = setTimeout(() => setCycle((c) => c + 1), 9000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [cycle]);

  const typedUser = useTypewriter(userMessage, 18, phase === "user" || phase === "lyra" || phase === "agents");
  const typedLyra = useTypewriter(lyraMessage, 20, phase === "lyra" || phase === "agents");

  const dots = useMemo(() => {
    if (phase !== "agents") return "";
    return "···";
  }, [phase]);

  return (
    <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_30%)] pointer-events-none" />

      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Lyra Interface
          </span>
        </div>

        <div className="grid md:grid-cols-[280px_1fr]">
          <div className="border-r border-white/10 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Sessões
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                Estratégia de negócio
              </div>
              <div className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5">
                Criação de agente
              </div>
              <div className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5">
                Planejamento SaaS
              </div>
            </div>
          </div>

          <div className="space-y-4 p-6">
            <div className="text-sm text-slate-400">Você</div>

            <div className="min-h-[92px] rounded-2xl bg-slate-900 p-4 text-slate-200 shadow-inner">
              <span className="whitespace-pre-wrap">{typedUser}</span>
              {(phase === "user" || phase === "lyra" || phase === "agents") && typedUser.length < userMessage.length && (
                <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-slate-400 align-middle" />
              )}
            </div>

            <div className="text-sm text-blue-400">Lyra</div>

            <div className="min-h-[120px] rounded-2xl border border-blue-500/10 bg-blue-500/10 p-4 text-slate-100">
              {phase === "idle" && (
                <span className="text-slate-400">Aguardando comando...</span>
              )}

              {(phase === "lyra" || phase === "agents") && (
                <>
                  <span className="whitespace-pre-wrap">{typedLyra}</span>
                  {typedLyra.length < lyraMessage.length && phase === "lyra" && (
                    <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-blue-300 align-middle" />
                  )}
                </>
              )}
            </div>

            <div className="rounded-2xl border border-white/10 p-4 text-slate-400">
              {phase === "agents" ? (
                <span className="inline-flex items-center gap-2">
                  <span>Orquestrando agentes</span>
                  <span className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400" />
                  </span>
                </span>
              ) : (
                <span className="text-slate-600">Orquestração pronta para ativação {dots}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}