import { HeroSection } from "@/components/HeroSection";
import { BookUnfoldSection } from "@/components/BookUnfoldSection";
import { DarkroomSection } from "@/components/DarkroomSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050708] text-white selection:bg-amber-900/40 selection:text-amber-100">
      <HeroSection />
      <BookUnfoldSection />
      <DarkroomSection />
    </main>
  );
}
