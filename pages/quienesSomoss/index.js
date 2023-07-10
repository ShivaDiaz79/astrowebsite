import LandingHeader from "@/components/LandingHeader";
import Head from "next/head";
import SectionService from "@/components/SectionService";
import Footer from "@/components/Footer";


const IndexPage = () => {
  return (
    <div className="bg-black">
      <Head>astro</Head>

      <div className="bg-black w-full h-full">
        <LandingHeader />
      </div>
      <div className="">
        <SectionService />
        
      </div>
      <Footer/>
    </div>
  );
};

export default IndexPage;

    


