"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11 overflow-hidden">
      
     

      <h2 className="text-center text-2xl font-bold mb-8 text-black dark:text-white">
        Información de Contacto
      </h2>

      {/* SECCIÓN MAIL */}
      <div className="mb-8 group">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-body-color opacity-70">
          Mail de contacto
        </h3>
        <div className="pl-4 border-l-4 border-[#EA4335] bg-[#EA4335]/5 py-3 rounded-r-lg transition-all group-hover:bg-[#EA4335]/10">
          <a 
            href="mailto:administracion@nautilus.com.ar" 
            className="text-md font-medium text-[#EA4335] whitespace-nowrap"
          >
            administracion@nautilus.com.ar
          </a>
        </div>
      </div>

      {/* SECCIÓN INSTAGRAM COMPLEJO */}
      <div className="mb-8 group">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-body-color opacity-70">
          Instagram complejo
        </h3>
        <div className="relative pl-4 py-3">
          <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#fd1d1d]/5 to-transparent rounded-r-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <a 
            href="https://www.instagram.com/complejo_nautilus_club/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-md font-bold bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent"
          >
            @complejo_nautilus_club
          </a>
        </div>
      </div>

      {/* SECCIÓN INSTAGRAM GIMNASIO */}
      <div className="mb-8 group">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-body-color opacity-70">
          Instagram gimnasio
        </h3>
        <div className="relative pl-4 py-3">
          <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#fd1d1d]/5 to-transparent rounded-r-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <a 
            href="https://www.instagram.com/gym_nautilusciromar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-md font-bold bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent"
          >
            @gym_nautilusciromar
          </a>
        </div>
      </div>

      {/* SECCIÓN TELÉFONO */}
      <div className="group">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-body-color opacity-70">
          Teléfono celular
        </h3>
        <div className="pl-4 border-l-4 border-[#25D366] bg-[#25D366]/5 py-3 rounded-r-lg transition-all group-hover:bg-[#25D366]/10">
          <a 
            href="tel:+5492235028755" 
            className="text-lg font-extrabold text-[#25D366]"
          >
            223 502-8755
          </a>
        </div>
      </div>

    </div>
  );
};

export default NewsLatterBox;