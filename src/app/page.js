import Footer from "@/components/common/Footer";
import AmenitiesSection from "@/components/page_elements/AmenitiesSection";
import BgWhiteHoverComponent from "@/components/page_elements/BgWhiteHoverComponent";
import CraftedSection from "@/components/page_elements/CraftedSection";
import FormSection from "@/components/page_elements/FormSection";
import HeroSection from "@/components/page_elements/HeroSection";
import ImelessSection from "@/components/page_elements/ImelessSection";
import LegacyComponent from "@/components/page_elements/LegacyComponent";
import ModrenAra from "@/components/page_elements/ModrenAra";
import PrecinctSection from "@/components/page_elements/PrecinctSection";
import ResidenceSection from "@/components/page_elements/ResidenceSection";

export default function Home() {
  return (
    <>
      {/* ☑️ Full-WebPage-Wraper-Container */}
      <div className="w-full h-fit flex flex-col relative text-black ">
        
        {/* ☑️ Hero-Section */}
        <HeroSection />

        {/* Imeless */}
        <ImelessSection />

        {/* ☑️ Legacy-Section */}
        <LegacyComponent />

        {/* ☑️ Precinct-Section */}
        <PrecinctSection />

        {/* ☑️ Modren Ara */}
        <ModrenAra />

        {/* ☑️ Residence-Section */}
        <ResidenceSection />

        {/* ☑️ Amenities-Section */}
        <AmenitiesSection />

        {/* Crafted Section */}
        <CraftedSection />

        {/* ☑️ Form-Section */}
        <FormSection />

        {/* ☑️ Footer */}
        <Footer />
      </div>
    </>
  );
}
