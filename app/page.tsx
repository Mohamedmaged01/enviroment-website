import Image from "next/image";
import RecycleHero from "./RecycleHero";
import RecyclingArticles from "./RecyclingArticles";
import LatestNews from "./LatestNews";
import BetterRecycling from "./Recycling";
import Footer from "./Footer";
import ServicesGrid from "./ServicesGrid";
import WhyREC from "./Why";
export default function Home() {
  return (
    <>
      <RecycleHero />
      <RecyclingArticles />
      <LatestNews />
      {/* <BetterRecycling /> */}
      <ServicesGrid />
      <WhyREC />
      <Footer />
    </>
  );
}
