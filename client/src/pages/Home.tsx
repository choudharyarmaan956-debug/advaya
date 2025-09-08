import { useLocation } from "wouter";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { InstagramGallery } from "@/components/InstagramGallery";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <>
      <Hero 
        onShopClick={() => navigate('/shop')}
        onStoryClick={() => navigate('/about')}
      />
      <Benefits />
      <InstagramGallery />
      <About />
      <Footer />
    </>
  );
}
