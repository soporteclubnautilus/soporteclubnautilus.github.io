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

import WaterText from "@/components/WaterText/WaterText";

import Meta from "@/components/Meta/MetaProps";

export default function Home() {
  return (
    <>
    <Meta 
        title="Nautilus Club ~ Inicio" 
        description="Bienvenido a Nautilus Club, actividades y horarios"        
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
