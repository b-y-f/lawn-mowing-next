import Hero from "../components/homePage/Hero";
import Testimonial from "../components/homePage/Testimonials";
import Services from "../components/homePage/Services";
import Articles from "../components/homePage/Articles";
import { getAllData } from "../lib/handleMarkdown";

export async function getStaticProps() {
  const serviceData = await getAllData("services");
  const articleData = await getAllData("articles");
  return {
    props: {
      serviceData,
      articleData,
    },
  };
}
export default function Home({ serviceData, articleData }) {
  return (
    <div>
      <Hero />
      <Services serviceData={serviceData} />
      <Articles articleData={articleData} />
      <Testimonial />
    </div>
  );
}

// TODO add video showcase
