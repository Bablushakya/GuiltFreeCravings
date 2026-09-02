import Hero from "../../components/landing/Hero";
import About from "../../components/landing/About";
import FeaturedProducts from "../../components/landing/FeaturedProducts";
import OurVision from "../../components/landing/OurVision";
import WhyChooseUs from "../../components/landing/WhyChooseUs";
import OurPromise from "../../components/landing/PromiseSection";
import OurStory from "../../components/landing/StorySection";
import FinalCTA from "../../components/landing/FinalCTA";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <OurPromise />
      <FeaturedProducts />
      <OurStory />
      <OurVision />
      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}

export default HomePage;