import  {Navigation}  from "@/components/Navigation";
import { Hero3D } from "@/components/Hero3D";
import { CategoryNav } from "@/components/CategoryNav";
import { ProductGrid } from "@/components/ProductGrid";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { VideoCardSlides } from "@/components/VideoCardSlides";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero3D />
      <CategoryNav />
      <ProductGrid />
      <div id="training" className="scroll-mt-14" />
      <FeaturesSection />
      <VideoCardSlides />
      <AboutSection />

      <Footer />
    </div>
  );
};

export default Index;
