import LandingHeader from "@/components/LandingHeader";
import { getNews } from "../utils/newsAPI";
import CryptoPrices from "@/components/CryptoPrices ";
import SectionBlog from "@/components/SectionBlog";
import SectionBlogb from "@/components/SectionBlogb";

export async function getStaticProps() {
  const news = await getNews();
  return {
    props: {
      news,
    },
  };
}

function Blog({ news }) {
  return (
    <div>
      <LandingHeader />

      <div className=" snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-smooth">
        <div className="snap-center">
          <SectionBlog />
        </div>
        <div className="snap-center">
          <SectionBlogb />
        </div>
        <div className="snap-center">
          <CryptoPrices />
        </div>
      </div>
    </div>
  );
}

export default Blog;
