import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { InstagramGallery } from "@/components/InstagramGallery";
import { Shop } from "@/components/Shop";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Hero 
        onShopClick={() => scrollToSection('shop')}
        onStoryClick={() => scrollToSection('about')}
      />
      <Benefits />
      <InstagramGallery />
      <Shop />
      <About />
      <Footer />
    </Layout>
  );
}
