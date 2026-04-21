import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (to: string, label: string) => {
    const active = location.pathname === to;

    return (
      <Link
        to={to}
        className={`relative transition-colors duration-300 ${
          active ? "text-white" : "text-slate-400 hover:text-white"
        }`}
      >
        <span>{label}</span>

        <span
          className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-400 transition-all duration-300 ${
            active ? "w-5 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </Link>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/55 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-white/5 bg-black/20 backdrop-blur-xl"
        }`}
      >
        <Link to="/" className="group flex items-center gap-3">
          <img
            src="/aurion-system.png"
            alt="Aurion System"
            className="h-8 w-auto transition duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.45)]"
          />

          <div className="hidden sm:block">
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navItem("/", "Início")}
          {navItem("/lyra", "Lyra")}
          {navItem("/aurion", "Aurion")}
          {navItem("/produtos", "Produtos")}
          {navItem("/contato", "Contato")}
        </nav>

        <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition duration-300 hover:border-white/20 hover:bg-white/10">
          Falar com a gente
        </button>
      </div>
    </header>
  );
}