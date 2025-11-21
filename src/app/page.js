import BgWhiteHoverComponent from "@/components/page_elements/BgWhiteHoverComponent";
import HeroSection from "@/components/page_elements/HeroSection";
import PrecinctSection from "@/components/page_elements/PrecinctSection";

export default function Home() {
  return (
    <>
      {/* ☑️ Full-WebPage-Wraper-Container */}
      <div className="w-full h-fit flex flex-col relative">

        {/* ☑️  Bg-White-Hover-Component */}
        <BgWhiteHoverComponent/>

        {/* ☑️ Hero-Section */}
        <HeroSection />

        {/* Precinct-Section */}
        <PrecinctSection />
      
        
      </div>
    </>
  );
}
