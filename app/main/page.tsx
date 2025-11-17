import Footer from "../Footer";
import {
  RecycleHero,
  RecyclingArticles,
  LatestNews,
  BetterRecycling,
  ServicesGrid,
  WhyREC,
} from "./MainPageComponents";

export default function MainPage() {
  return (
    <>
      <RecycleHero />
      <RecyclingArticles />
      <LatestNews />
      <BetterRecycling />
      <ServicesGrid />
      <WhyREC />
      <Footer />
    </>
  );
}
