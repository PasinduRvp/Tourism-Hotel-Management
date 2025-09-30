import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Package7Days from "./pages/Package7Days";
import Package14Days from "./pages/Package14Days";
import Package21Days from "./pages/Package21Days";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Customizer from "./pages/Customizer";
import CustomizePackage from "./pages/CustomizePackage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/7-days" element={<Package7Days />} />
          <Route path="/packages/14-days" element={<Package14Days />} />
          <Route path="/packages/21-days" element={<Package21Days />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/customizer" element={<Customizer />} />
          <Route path="/customize-package" element={<CustomizePackage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
