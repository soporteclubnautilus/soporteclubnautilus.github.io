import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import SedeEventos from "@/components/Inicio/SedeEventos";  
import ActivitiesSection from "@/components/Hero/ActivitiesSection";
import Testimonials from "@/components/Testimonials";
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
        title="Nautilus Club"       
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

      {/* --- CALL TO ACTION --- */}
      <div className="w-full px-6 mt-16">
        {/* Box con Efecto Glass Dinámico */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 dark:border-white/10 bg-white/40 dark:bg-black/20 backdrop-blur-xl p-8 md:p-14 shadow-2xl transition-colors duration-300">
          
          {/* Reflejo decorativo superior */}
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-500/10 blur-[60px]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="max-w-[600px] text-center lg:text-left">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                ¿Querés que tu evento tenga sede en <span className="text-blue-600 dark:text-blue-400">Nautilus</span>?
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Link 
                href="/instalaciones"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
              >
                Conocer instalaciones
              </Link>
              
              <Link 
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-white/10 dark:bg-transparent px-8 py-4 text-sm font-semibold text-slate-900 dark:text-white backdrop-blur-md transition-all hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-95"
              >
                Contactar ahora
              </Link>
            </div>

          </div>
        </div>
      </div>


      <Testimonials />
      
      <Contact />
      
    </>
  );
}
