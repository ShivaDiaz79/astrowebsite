import Image from "next/image";
import CarouselPhotos from "@/components/CarruselPhotos";
import LandingHeader from "@/components/LandingHeader";
import CountdownComponent from "@/components/UiUx/CountdownComponent";
import ImageSection from "@/components/ImageSection";
import SectionWeb from "@/components/SectionWeb";
import Footer from "@/components/Footer";
import Mocap from "@/components/Mocap";
import Mocap2 from "@/components/Mocap2";
import Mocap3 from "@/components/Mocap3";
import Mocap4 from "@/components/Mocap4";
import Mocap5 from "@/components/Mocap5";
import Mocap6 from "@/components/Mocap6";
import AddAnimation from "@/components/AddAnimation";
import Imagenblack from "@/components/Imagenblack";
import Galeria from "@/components/Galeria";
import PlaySource from "@/components/PlaySource";



const DesarrolloWeb = () => {
  const photos = ["11.jpg", "12.jpg", "13.jpg","14.jpg","15.jpg", "16.jpg"];
  return (
    <div className="bg-black">
      <LandingHeader />

      <SectionWeb />

      <ImageSection />
      <CarouselPhotos photos={photos} />
      <div className="m-10">
        <CountdownComponent />
      </div>
      <Galeria/>
      <PlaySource/>
   
      <Imagenblack />
      <AddAnimation />
      <Mocap6 />
      <Mocap5 />
      <Mocap4 />
      <Mocap3 />
      <Mocap2 />
      <div className="bg-white">
        <Mocap />
        
      </div>
      <Footer />
    </div>
  );
};

export default DesarrolloWeb;
