import { Navigation } from "@/components/Navigation";
import { Hero3D } from "@/components/Hero3D";
import { CategoryNav } from "@/components/CategoryNav";
import { ProductGrid } from "@/components/ProductGrid";
import { FeaturesSection } from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero3D />
      <CategoryNav />
      <ProductGrid />
      <FeaturesSection />
      
      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 ProdiStore. Intelligence Embedded. Solutions Engineered.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
