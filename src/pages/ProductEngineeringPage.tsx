import { Navigation } from "@/components/Navigation";
import { ProductEngineeringSection } from "@/components/ProductEngineeringSection"; // Assuming you saved the component here
import { Footer } from "@/components/Footer"; // Import the extracted Footer

const ProductEngineeringPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-grow pt-14"> {/* Add padding-top to account for fixed nav */}
        <ProductEngineeringSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProductEngineeringPage;