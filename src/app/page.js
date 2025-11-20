import BgWhiteHoverComponent from "@/components/page_elements/BgWhiteHoverComponent";

export default function Home() {
  return (
    <>
      {/* ☑️ Full-WebPage-Wraper-Container */}
      <div className="w-full h-fit flex flex-col relative">

        {/* ☑️  Bg-White-Hover-Component */}
        <BgWhiteHoverComponent/>
        
      </div>
    </>
  );
}
