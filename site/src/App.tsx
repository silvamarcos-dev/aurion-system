import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import LyraPage from "./pages/LyraPage";
import AurionPage from "./pages/AurionPage";
import LaunchPage from "./pages/LaunchPage";
import ContatoPage from "./pages/ContatoPage";
import ProdutosPage from "./pages/ProdutosPage";

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-slate-950 pt-24 text-white">
      <CursorGlow />
      <Navbar />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/lyra" element={<LyraPage />} />
            <Route path="/aurion" element={<AurionPage />} />
            <Route path="/lancamento" element={<LaunchPage />} />
            <Route path="/produtos" element={<ProdutosPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  );
}