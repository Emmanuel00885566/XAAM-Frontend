import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";
import Features from "../components/Features";
import SmarterLearning from "../components/SmarterLearning";
import NewsSection from "../components/NewsSection";
import Testimonials from "../components/Testimonials";
import Community from "../components/Community";
import FAQ from "../components/FAQ";

const Landing = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      <main className="w-full">
        <HeroSection />
        <Stats />
        <Features />
        <SmarterLearning />
        <NewsSection />
        <Testimonials />
        <Community />
        <FAQ />
      </main>
    </div>
  );
};

export default Landing;