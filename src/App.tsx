import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Discipline from "./pages/Discipline";
import Achievements from "./pages/Achievements";
import NotFound from "./pages/NotFound";
import OurPartners from "./pages/our-partners"; 
import Career from "./pages/career";
import ContactUs from "./pages/contact";
import AboutUs from "./pages/About-us";  
import OurServices from "./pages/our-services";  
import Gallery from "./pages/Gallery"; 
import Events from "./pages/events";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Discipline" element={<Discipline />} />
          <Route path="/Achievements" element={<Achievements />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/our-partners" element={<OurPartners />} />
           <Route path="/career" element={<Career/>} />
           <Route path="/contact" element={<ContactUs />} />
           <Route path="/About-us" element={<AboutUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
