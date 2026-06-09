import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import TrustedBySection from "../components/sections/TrustedBySection";
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
    <div className="mx-auto w-full max-w-[1280px] border-x border-border bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 divide-y divide-border">
        <HeroSection />
        <TrustedBySection />
        <TrustMetricsSection />
        <SelectedWorkSection />
        <CapabilitiesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
