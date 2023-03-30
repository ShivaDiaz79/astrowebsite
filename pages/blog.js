import Layout from "@/components/Layout";
import HomeSection from "@/components/HomeSection";
import FullscreenVideo from "../components/FullscreenVideo";
import { getNews } from '../utils/newsAPI';
import FrequentQuestions from "@/components/ FrequentQuestions";

export async function getStaticProps() {
  const news = await getNews();
  return {
    props: {
      news
    }
  }
}

function Blog({ news }) {
  
  return (
    <Layout>
        <FrequentQuestions
        
        />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {news.map((article, index) => (
          <li key={index} style={{ margin: "1rem 0" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{article.title}</h2>
            <p style={{ fontSize: "1rem" }}>{article.description}</p>
          </li>
        ))}
      </ul>
      <HomeSection imagePath={'/Img/foto3.jpg'} text={'Hola'}/> 
      <FullscreenVideo videoPath={'/Img/earthmoon.mp4'} text={'Hola'}/>  
      
      <FullscreenVideo videoIzquierda={true} videoPath={'/Img/earthmoon.mp4'} text={'Hola'}/>  
      <FrequentQuestions
        
      />
    </Layout>
  )
}

export default Blog;
