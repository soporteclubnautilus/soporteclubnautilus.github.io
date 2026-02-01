"use client";
import { Testimonial } from "@/types/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Matías Ochoa",
    content: "Excelente atención y super responsables los profes de pileta",
  },
  {
    id: 2,
    name: "Rodolfo Camussi",
    content: "Muy buenas instalaciones profesores de primera. Muy recomendable",
  },
  {
    id: 3,
    name: "Cinthia Albornoz",
    content: "Mis nenes asisten a pile. Lo mejor de lo mejor",
  },
  {
    id: 4,
    name: "Nacho Larrea",
    content: "En todo los sectores, administración, encargado de vestuario muy buena la Atención!! Profesores De Natación 10 puntos!!!!.",
  },
  {
    id: 5,
    name: "Gustavo Guidice",
    content: "La mejor pile …el mejor club de Mar del Plata",
  },
  {
    id: 6,
    name: "Diego Dan",
    content: "Excelente atención y predisposición de los profesores en todas las disciplinas, totalmente recomendable",
  }
  ,
  {
    id: 7,
    name: "Luis Perdigon",
    content: "Excelente complejo completo buenas instalaciones!!",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="scroll-mt-28 md:scroll-mt-20 dark:bg-color-dark  relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Encabezado */}
        <div className="w-full text-center pb-12 md:pb-16 lg:pb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.05]">
            Opiniones sobre <br /> 
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Nautilus Club
            </span>            
            <span className="relative block mt-4">
              <span className="absolute left-1/2 -translate-x-1/2 w-24 h-[5px] bg-[#D97706] rounded-full"></span>
            </span>
          </h2>
          
          <p className="mt-10 text-base md:text-lg text-body-color dark:text-body-color-dark max-w-[510px] mx-auto">
            Lo que dicen quienes ya pasaron por Nautilus Club.
          </p>
        </div>

        {/* Carrusel */}
        <Swiper
          key={testimonialData.length} // CLAVE: Fuerza la inicialización correcta del loop
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true} 
          // Algunos usuarios reportan que necesitan estas dos para asegurar el loop en v10+:
          loopAddBlankSlides={true} 
          rewind={false} // Asegúrate de que esto sea false si usas loop
          grabCursor={true} // Permite arrastrar con el mouse para probar el infinito
          autoplay={{ 
            delay: 4000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-20 !px-2 testimonials-swiper"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!h-auto">
              {/* h-full y flex-col hacen que todas las cajas midan lo mismo */}
              <div className="group relative flex h-full flex-col rounded-xl border border-white/20 bg-white p-8 shadow-lg duration-300 hover:shadow-2xl dark:bg-[#1d2144] dark:border-white/10 lg:px-5 xl:px-8">
                
                {/* Header del Testimonio */}
                <div className="mb-5 flex items-center">
                  
                  <h3 className="text-lg font-bold text-dark dark:text-white">
                    {testimonial.name}
                  </h3>
                </div>

                {/* Contenido: flex-grow asegura que este espacio se estire */}
                <p className="flex-grow text-base italic leading-relaxed text-body-color dark:text-gray-300">
                  “{testimonial.content}”
                </p>
                
                {/* Decoración sutil inferior */}
                <div className="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-primary/5 blur-xl pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>


{/* --- SECCIÓN: Valoramos tu opinión --- */}
<div className="mt-6 flex flex-col items-center text-center border-t border-gray-200 dark:border-white/10 pt-10">
  <Link
    href="https://g.page/r/CWtOL25HqLhUEBM/review" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-full px-10 py-4 text-white font-bold text-lg shadow-lg transition-transform active:scale-95"
    style={{ backgroundColor: "#2E4E92" }}
  >
    Deja tu opinión
  </Link>
</div>
      

      {/* Fondo decorativo (opcional) */}
      <div className="absolute right-0 top-5 z-[-1] opacity-30">
        <svg width="238" height="531" viewBox="0 0 238 531" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_95:1005" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="238" height="531">
            <rect width="238" height="531" fill="#2E4E92" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <circle cx="282" cy="282" r="282" fill="url(#paint0_radial_95:1005)" />
          </g>
          <defs>
            <radialGradient id="paint0_radial_95:1005" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(282 282) rotate(90) scale(282)">
              <stop stopColor="white" stopOpacity="0.3" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;