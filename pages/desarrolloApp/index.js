import Footer from "@/components/Footer";
import LandingHeader from "@/components/LandingHeader";

import SectionApp from "@/components/SectionApp";
import SectionAppb from "@/components/SectionAppb";

const index = () => {
  return (
    <div>
      <LandingHeader />

      <div className=" snap-y snap-mandatory relative w-full h-screen sm:overflow-auto sm:scroll-smooth">
        <div className="snap-center">
          <SectionAppb />
        </div>
        <div className="snap-center">
          <SectionApp />
        </div>
        <div className="snap-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;
