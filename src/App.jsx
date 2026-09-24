import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import About from "./pages/About";
import OnGridSolar from "./pages/OnGridSolar";
import HybridGridSolar from "./pages/HybridGridSolar";
import OffGridSolar from "./pages/OffGridSolar";
import SolarSolutionsPage from "./pages/SolarSolutionsPage";
import ResidentialSolarPage from "./pages/ResidentialSolarPage";
import IndustrialSolarPage from "./pages/Industrial";
import UtilityScaleSolarPage from "./pages/utilityscale";
import ProjectDetail from "./pages/ProjectDetail";
import ServicePage from "./pages/ServicePage";
import ServiceMain from "./pages/ServiceMain";
import SolarCalculatorPage from "./pages/SolarCalculatorPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LegalPage from "./pages/LegalPage";
import Epc from "./pages/Epc";
import SEO from "./components/SEO";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <SEO />
      <Navbar />
      <WhatsAppFloat />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/epc" element={<Epc />} />
          <Route path="/solar-solutions" element={<SolarSolutionsPage />} />
          <Route path="/solar-solutions/residential" element={<ResidentialSolarPage />} />
          <Route path="/solar-solutions/industrial" element={<IndustrialSolarPage />} />
          <Route path="/solar-solutions/utility-scale" element={<UtilityScaleSolarPage />} />
          <Route path="/solar-solutions/on-grid" element={<OnGridSolar />} />
          <Route path="/solar-solutions/hybrid-grid" element={<HybridGridSolar />} />
          <Route path="/solar-solutions/off-grid" element={<OffGridSolar />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/services" element={<ServiceMain />} />
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
          <Route path="/solar-calculator" element={<SolarCalculatorPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
          <Route path="/terms-conditions" element={<LegalPage type="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
