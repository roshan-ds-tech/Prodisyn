import { Navigation } from "@/components/Navigation";
import { EmbeddedTrainingSection } from "@/components/EmbeddedTrainingSection";
import { Footer } from "@/components/Footer";

const EmbeddedTrainingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-grow pt-14">
        <EmbeddedTrainingSection />
      </main>
      <Footer />
    </div>
  );
};

export default EmbeddedTrainingPage;
