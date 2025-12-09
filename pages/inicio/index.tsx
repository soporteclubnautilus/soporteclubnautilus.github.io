import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import SedeEventos from "@/components/Inicio/SedeEventos";  
import ActivitiesSection from "@/components/Hero/ActivitiesSection";

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
      />
      <ScrollUp />
      <WaterText/>
      <ActivitiesSection/>
      <SedeEventos/>

      <Brands />
      
      <Contact />
      
    </>
  );
}
