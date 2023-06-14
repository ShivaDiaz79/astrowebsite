
import Links from 'next/link';


const MenuFlotante = ({ menuDown }) => {
  return (
    <>
    
      {menuDown !== '' && (
        <div className="flex-cols sm:mx-52 justify-center ml-20 sm:ml-96 p-4  pl-52 z-50 ">
          {menuDown === 'servicios' && (
            <>
              <ul>
                <a href="/servicioUx">
                  <span className=" text-black text-3xl font-bold font-anto sm:pl-96 hover:text-black"> DISEÑ0 UX/UI</span>
                </a>
              </ul>
              <ul>
                <a href="/desarrolloWeb">
                  <span className=" text-black text-3xl font-bold font-anto sm:pl-48 hover:text-black"> WEB SITE</span>
                </a>
              </ul>
              <ul>
                <a href="/desarrolloApp">
                  <span className=" text-black text-3xl font-bold font-anto sm:pl-96 hover:text-black">APLICACIONES</span>
                </a>
              </ul>
              <ul>
                <a href="/serviciosWebmaster">
                  <span className=" text-black text-3xl font-bold font-anto sm:pl-96 hover:text-black">WEB MASTER</span>
                </a>
              </ul>
            
            </>
          )}
     
        </div>
      )}
    
       </>
        
  );
};

export default MenuFlotante