import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductEngineeringPage from "./pages/ProductEngineeringPage";
import TechnicalConsultingPage from "./pages/TechnicalConsultingPage";
import ProcessConsultingPage from "./pages/ProcessConsultingPage";
import ApplyNowPage from "./pages/ApplyNowPage";
import EmbeddedTrainingPage from "./pages/EmbeddedTrainingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/services/product-engineering"
            element={<ProductEngineeringPage />}
          />
          <Route
            path="/services/technical-consulting"
            element={<TechnicalConsultingPage />}
          />
          <Route
            path="/services/process-consulting"
            element={<ProcessConsultingPage />}
          />
          <Route
            path="/services/embedded-training"
            element={<EmbeddedTrainingPage />}
          />
          <Route
            path="/apply-now"
            element={<ApplyNowPage />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;