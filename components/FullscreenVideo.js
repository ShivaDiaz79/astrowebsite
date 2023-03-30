import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

const FullscreenVideo = ({ text, videoPath, videoIzquierda = false, }) => {
  return (
    <div
      className={`flex mt-6 bg-green-200 p-4 flex-col lg:flex-row ${
        videoIzquierda && "lg:flex-row-reverse"
      }`}
    >
      <div className="flex-1 bg-blue-100 justify-center items-center flex">
        <video
          height={700}
          width={700}
          src={videoPath}
          alt="video mediano"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="flex-1 bg-red-100 flex justify-center items-center p-4">
        <p className="text-2xl underline">{text}</p>
      </div>
      

    </div>
  );
};

export default FullscreenVideo;
