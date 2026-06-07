import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import TrustMetricsSection from "../components/sections/TrustMetricsSection";
import SelectedWorkSection from "../components/sections/SelectedWorkSection";
import CapabilitiesSection from "../components/sections/CapabilitiesSection";
import ProcessSection from "../components/sections/ProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustMetricsSection />
      <SelectedWorkSection />
      <CapabilitiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
