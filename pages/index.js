import HeroSection from "@/components/HeroSection";
import LandingHeader from "@/components/LandingHeader";

import SectionZero from "@/components/SectionZero";
import SectionZerob from "@/components/SectionZerob";
import Footer from "@/components/Footer";
import Efectletras from "@/components/Efectletras";
import SectionZeroc from "./zonaCero/SectionZeroc";


const ZonaCero = () => {
  return (
    <main>
      <LandingHeader />

      <HeroSection />
    

      <SectionZero />

      <div className=" bg-black">
        <Efectletras />
      </div>
      <SectionZeroc/>

      <SectionZerob />
   
    

      <Footer />
     
    </main>
  );
};

export default ZonaCero;
