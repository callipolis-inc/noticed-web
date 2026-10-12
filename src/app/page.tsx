import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b0d] text-white selection:bg-amber-900/40 selection:text-amber-100">
      <HeroSection />
      <ManifestoSection />
    </main>
  );
}
