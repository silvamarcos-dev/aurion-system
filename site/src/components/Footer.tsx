export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Aurion System. Todos os direitos reservados.
      </div>
    </footer>
  );
}