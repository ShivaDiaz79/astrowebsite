

import HomeSection from "@/components/HomeSection";

import Layout from "@/components/Layout";

const HomePage = () => {

  
  return (
    <Layout>
      <HomeSection imagePath={'/Img/foto3.jpg'} text={'Hola'}/>    
      <HomeSection imagenIzquierda={true} imagePath={'/Img/foto3.jpg'} text={'Hola 57575765'}/>   
      <HomeSection imagePath={'/Img/foto3.jpg'} text={'Hola'}/>    
      <HomeSection imagenIzquierda={true} imagePath={'/Img/foto3.jpg'} text={'Hola 57575765'}/> 

    </Layout>
  );
};

export default HomePage;
