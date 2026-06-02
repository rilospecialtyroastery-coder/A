import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InStockSection } from "@/components/InStockSection";
import { BestSellersSection } from "@/components/BestSellersSection";
import { OutOfStockSection } from "@/components/OutOfStockSection";
import { BrandPartnersSection } from "@/components/BrandPartnersSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InStockSection />
        <BestSellersSection />
        <OutOfStockSection />
        <BrandPartnersSection />
      </main>
      <Footer />
    </>
  );
}
