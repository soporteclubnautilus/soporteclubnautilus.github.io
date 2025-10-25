import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";


import Meta from "@/components/Meta/MetaProps";


import dynamic from "next/dynamic";

const WaterText = dynamic(() => import("@/components/WaterText/WaterText"), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center text-white text-2xl">
      
    </div>
  ),
});

export default function Home() {
  return (
    <>
    <Meta 
        title="Nautilus Club ~ Inicio" 
        description="Nautilus Club: pileta, gimnasio, básquet, fútbol y actividades recreativas para todas las edades. Conocé horarios y viví la experiencia deportiva."        
      />
      <ScrollUp />
      <WaterText/>
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
