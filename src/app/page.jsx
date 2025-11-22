// src/app/page.jsx
import HeroSection from "@/components/HeroSection";
import MiddleSection from "@/components/MiddleSection";
import Statistics from "@/components/Statistics";
import FeedbackSlider from "@/components/FeedbackSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MiddleSection />
      <Statistics />
      <FeedbackSlider />
      <Footer />
    </>
  );
}
