import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Kitchen from "./pages/services/Kitchen";
import Bathroom from "./pages/services/Bathroom";
import Painting from "./pages/services/Painting";
import Tile from "./pages/services/Tile";
import Fencing from "./pages/services/Fencing";
import Decking from "./pages/services/Decking";
import Survey from "./pages/Survey";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Service Detail Pages */}
          <Route path="/services/kitchen" element={<Kitchen />} />
          <Route path="/services/bathroom" element={<Bathroom />} />
          <Route path="/services/painting" element={<Painting />} />
          <Route path="/services/tile" element={<Tile />} />
          <Route path="/services/fencing" element={<Fencing />} />
          <Route path="/services/decking" element={<Decking />} />
          {/* Feedback Survey */}
          <Route path="/survey" element={<Survey />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
