import { Navigation } from "@/components/Navigation";
import { ProcessConsultingSection } from "@/components/ProcessConsultingSection";
import { Footer } from "@/components/Footer";

const ProcessConsultingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-grow pt-14">
        <ProcessConsultingSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProcessConsultingPage;
