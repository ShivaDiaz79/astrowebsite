import HeroSection from "@/components/HeroSection";
import LandingHeader from "@/components/LandingHeader";
import ChargeSectionimg from "@/components/ChargeSectionimg";

const ZonaCero = () => {
  return (
    <main>
      <LandingHeader />

      <div className=" snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-smooth">
        <div className="snap-center">
          <HeroSection />
        </div>
        <div className="snap-center">
          <ChargeSectionimg />
        </div>
      </div>
    </main>
  );
};

export default ZonaCero;
