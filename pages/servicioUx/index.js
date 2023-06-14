import Image from "next/image";
import LandingHeader from "@/components/LandingHeader";
import ChargeSection from "@/components/ChargeSection";
import ChargeSectionb from "@/components/ChargeSectionb";

const ServicioUx = () => {
  return (
    <main className="bg-black">
      <LandingHeader />

      <div className=" snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-smooth">
        <div className="snap-center">
          <ChargeSectionb />
        </div>
        <div className="snap-center">
          <ChargeSection />
        </div>
      </div>
    </main>
  );
};

export default ServicioUx;
