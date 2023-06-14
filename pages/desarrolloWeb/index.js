import Image from "next/image";
import CarouselPhotos from "@/components/CarruselPhotos";
import LandingHeader from "@/components/LandingHeader";
import CountdownComponent from "@/components/UiUx/CountdownComponent";
import ImageeSection from "@/components/ImageeSection";
import SectionWeb from "@/components/SectionWeb";
const DesarrolloWeb = () => {
  const photos = ["1.png", "2.png", "3.png"];
  return (
    <div>
      <LandingHeader/>
     
      <SectionWeb/>

      <div className=" bg-black p-10 sm:p-36 " />
      <div className=" m-2 sm:m5"> 
        <CarouselPhotos photos={photos} />
      </div>

      <div className=" bg-red-800 flex-auto  m-6">
        <h1 className=" text-blue-50 ">Countdown</h1>
        <CountdownComponent />
      </div>

      <ImageeSection />
   

    

      
    </div>
  );
};

export default DesarrolloWeb;
