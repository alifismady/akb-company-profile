import ContactUsSection from "@/containers/home-page/contact-section";
import CompanyHeroSection from "@/containers/home-page/hero-section-update";
import LegalitySection from "@/containers/home-page/legality-section";
import PortfolioSection from "@/containers/home-page/portofolio-section";
import ScopeSection from "@/containers/home-page/scope-section";
import ServicesSection from "@/containers/home-page/services-section";

export default function Home() {
  return (
    <div>
      <CompanyHeroSection />
      <LegalitySection />
      <ServicesSection />
      <ScopeSection />
      <PortfolioSection />
      <ContactUsSection />
    </div>
  );
}
