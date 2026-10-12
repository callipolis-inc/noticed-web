import { HeroSection } from "@/components/HeroSection";
import { BookUnfoldSection } from "@/components/BookUnfoldSection";
import { DarkroomSection } from "@/components/DarkroomSection";
import { FaqSection } from "@/components/FaqSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050708] text-white selection:bg-amber-900/40 selection:text-amber-100">
      <HeroSection />
      <BookUnfoldSection />
      <DarkroomSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
