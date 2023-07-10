import Image from "next/image";
import LandingHeader from "@/components/LandingHeader";
import ChargeSection from "@/components/ChargeSection";
import ChargeSectionb from "@/components/ChargeSectionb";
import Footer from "@/components/Footer";

const ServicioUx = () => {
  return (
    <main className="bg-black">
      <LandingHeader />

      <div className=" snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-smooth">
        <div className="snap-center bg-black">
        <ChargeSection />
         
        </div>
        <div className="snap-center">
        <ChargeSectionb />
        </div>
        <div className="snap-center">
        <Footer/>
        </div>
       
      </div>
 
    </main>
  );
};

export default ServicioUx;
