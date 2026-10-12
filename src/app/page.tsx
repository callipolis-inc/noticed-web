import { LiquidNavbar } from "@/components/LiquidNavbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { BookUnfoldSection } from "@/components/BookUnfoldSection";
import { BookshelfSection } from "@/components/BookshelfSection";
import { FaqSection } from "@/components/FaqSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050708] text-white selection:bg-amber-900/40 selection:text-amber-100">
      <LiquidNavbar />
      <HeroSection />
      <MarqueeSection />
      <BookUnfoldSection />
      <BookshelfSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
