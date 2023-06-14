import LandingHeader from "@/components/LandingHeader";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>astro</Head>

      <div className="bg-black w-full h-full">
      <LandingHeader className="bg-black"/>
      </div>
    </div>
  );
};

export default index;
