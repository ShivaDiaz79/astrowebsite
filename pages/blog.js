import LandingHeader from "@/components/LandingHeader";
import { getNews } from "../utils/newsAPI";
import CryptoPrices from "@/components/CryptoPrices ";

import TodoList from "@/components/UiUx/TodoList";
import SectionBlogb from "@/components/SectionBlogb";
import Footer from "@/components/Footer";

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

      <SectionBlogb />

      <div className="z-10">
        <CryptoPrices />
      </div>
      <div className=" container mx-auto p-4">
        <TodoList />
      </div>
      <Footer/>
    </div>
  );
}

export default Blog;
