import  Navigation  from "@/components/Navigation";
import { Hero3D } from "@/components/Hero3D";
import { CategoryNav } from "@/components/CategoryNav";
import { ProductGrid } from "@/components/ProductGrid";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero3D />
      <CategoryNav />
      <ProductGrid />
      <FeaturesSection />
      <div id="training" className="scroll-mt-14" />
      <AboutSection />
      
      <footer className="border-t border-border/50 py-12 px-6 bg-secondary/20">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© 2025 Prodisyn Innovations. Intelligence Embedded. Solutions Engineered.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
