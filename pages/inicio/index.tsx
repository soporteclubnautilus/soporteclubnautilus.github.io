import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import SedeEventos from "@/components/Inicio/SedeEventos";  
import ActivitiesSection from "@/components/Hero/ActivitiesSection";

import Meta from "@/components/Meta/MetaProps";
import Link from 'next/link';
import actividades from 'actividades.json'


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


      <div className="w-full py-8 px-3 bg-transparent ">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative w-full bg-primary ">
          
          {/* Contenido */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between px-5 md:px-10 py-6 md:py-10 gap-6 ">
            
            {/* Texto */}
            <div className="text-white w-full md:max-w-xl">
              <h2 className="text-2xl md:text-4xl font-semibold mb-3">
                Horarios de actividades
              </h2>

              {/* Marquee infinito */}
              <div className="relative overflow-hidden w-full">
                <div className="marquee-track">
                  
                  {/* Grupo 1 */}
                  <div className="marquee-group">
                    {actividades.map((act, i) => (
                      <span key={`a-${i}`} className="chip">
                        {act.titulo}
                      </span>
                    ))}
                  </div>

                  {/* Grupo 2 (duplicado) */}
                  <div className="marquee-group">
                    {actividades.map((act, i) => (
                      <span key={`b-${i}`} className="chip">
                        {act.titulo}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/horarios"
              className="
                bg-white text-gray-900
                px-6 md:px-8
                py-3 md:py-4
                rounded-xl
                font-semibold
                shadow-lg
                transition
                hover:scale-105 hover:shadow-xl
                w-full md:w-auto
                text-center
              "
            >
              Ver horarios
            </Link>
          </div>

          
        </div>
                     


        {/* CSS seguro */}
        <style jsx>{`
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }

          .marquee-group {
            display: flex;
            gap: 0.75rem;
            padding-right: 0.75rem;
          }

          .chip {
            background: rgba(255, 255, 255, 0.12);
            color: white;
            padding: 0.375rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
            white-space: nowrap;
            backdrop-filter: blur(6px);
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>





      <ActivitiesSection/>
      
      <SedeEventos/>

      <Brands />
      
      <Contact />
      
    </>
  );
}
