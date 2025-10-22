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
import { Metadata } from "next";

import WaterText from "@/components/WaterText/WaterText";


export const metadata: Metadata = {
  title: "Nautilus Club",
  description: "Nautilus Club | Pileta ~ Gimnasio ~ Basquet ~ Futbol",
  // other metadata
};

export default function Home() {
  return (
    <>
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
