import Image from "next/image";
import Tilde from "./svg/Tilde";


const ContaiLe = ({parrafo1, parrafo2, parrafo3, parrafo4,   title1,click1,imagen, }) => {
  return (
    
        <div className="bg-white mx-10 relative  rounded-xl   dark:bg-slate-700 dark:border-gray-700 transition-transform hover:scale-110">
        <Image alt="imageo" src={imagen} width='500' height={200} className="mx-auto"/>
          
          <div className="p-6 text-center">
            <h4 className="mb-2 font-bold text-lg md:text-xl pb-2">
             {title1}
            </h4>
            <ul  className="text-justify my-2 space-y-2 pb-3">
              <li className="flex items-center space-x-2">
              <Tilde/>
                  
                <div className="text-sm md:text-base text-gray-900 dark:text-slate-200 ">
                  {parrafo1}
                </div>
              </li>
              <li className="flex space-x-2">
              <Tilde/>
                <div className="text-sm md:text-base text-gray-900 dark:text-slate-200 ">
                {parrafo2}
                </div>
              </li>
              <li className="flex space-x-2">
              <Tilde/>
                <div className="text-sm md:text-base text-gray-900 dark:text-slate-200 ">
                {parrafo3}
                </div>
              </li>
              <li className="flex space-x-2">
              <Tilde/>
                <div className="text-sm md:text-base text-gray-900 dark:text-slate-200 ">
                {parrafo4}
                </div>
              </li>
            </ul>
         
            <h5 className="mb-2 font-bold text-base md:text-lg pt-4 sm:mb-0 text-secondary-500">
            {click1}
            </h5>
            </div>
          </div>
       
      
     
    
  );
};

export default ContaiLe;
