import { Navigation } from "@/components/Navigation";
import { TechnicalConsultingSection } from "@/components/TechnicalConsultingSection";
import { Footer } from "@/components/Footer";

const TechnicalConsultingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-grow pt-14">
        <TechnicalConsultingSection />
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalConsultingPage;
