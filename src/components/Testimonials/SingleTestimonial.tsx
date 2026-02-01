import { Testimonial } from "@/types/testimonial";
import React from "react";
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, content } = testimonial;

  return (
    // Agregamos py-4 para que la sombra inferior tenga espacio y no se corte
    <div className="w-full py-4 px-2">
      <div className="relative z-10 overflow-hidden rounded-xl border border-white/20 bg-white p-8 shadow-lg duration-300 hover:shadow-2xl dark:bg-[#1d2144] dark:border-white/10 lg:px-5 xl:px-8 transition-all hover:-translate-y-1">
        
        {/* Detalle de color superior para que se note el Primary */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary"></div>

        {/* Cuerpo del testimonio */}
        <p className="mb-8 text-base italic leading-relaxed text-body-color dark:text-gray-300">
          “{content}”
        </p>

        {/* Info del Autor con divisor de color */}
        <div className="flex items-center border-t border-gray-100 pt-6 dark:border-white/10">
          <div className="relative mr-4 h-[50px] w-[50px] shrink-0">
            {/* Anillo de color Primary */}
            <div className="absolute -inset-1 rounded-full bg-primary opacity-20 blur-[2px]"></div>
            
          </div>
          <div className="w-full">
            <h3 className="text-dark text-lg font-bold lg:text-base xl:text-lg dark:text-white">
              {name}
            </h3>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;