import HeroSection from "../sections/HeroSection";
import ManifestoSection from "../sections/ManifestoSection";
import LyraSection from "../sections/LyraSection";
import ProductsSection from "../sections/ProductsSection";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <ManifestoSection />
      <LyraSection />
      <ProductsSection />
    </PageTransition>
  );
}