import Footer from "@/components/Footer";
import LandingHeader from "@/components/LandingHeader";
import SectionW2 from "@/components/SectionW2";
import SectionWmaster from "@/components/SectionWmaster";

const serviciosWebmaster = () => {
  return (
    <div>
      <LandingHeader />
      <SectionWmaster />
      <div className="">
        <SectionW2 />
      </div>
      <Footer />
    </div>
  );
};

export default serviciosWebmaster;
