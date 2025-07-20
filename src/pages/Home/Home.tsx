import { CTASection } from "../../components/CTASection";
import { FeaturesSection } from "../../components/FeaturesSection";
import { HeroSection } from "../../components/HeroSection";

const Home = () => {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection scrollToFeatures={scrollToFeatures} />
      <FeaturesSection />
      <CTASection />
    </main>
  );
};

export default Home;
