import React from "react";

const SedeEventos = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary pt-8 pb-20 md:py-10 lg:py-14 
  [clip-path:polygon(0_0,100%_0,100%_100%,0_95%)] 
  md:[clip-path:polygon(0_0,100%_0,100%_100%,0_85%)]">
      

      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          
          {/* --- TEXTO PRINCIPAL --- */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[540px] lg:mb-0">
              <span className="mb-4 block text-lg font-bold uppercase tracking-wider text-white">
                Orgullo Marplatense
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[50px]">
                Escenario de Grandes Competencias
              </h2>
              <p className="mb-10 text-base leading-relaxed text-gray-200">
                Nuestra infraestructura de primer nivel nos convierte en una de las sedes elegidas para los torneos más importantes del país y la provincia.
              </p>
              
              
            </div>
          </div>

          {/* --- TARJETAS DE EVENTOS --- */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="grid gap-6 sm:grid-cols-2">
              
              {/* Tarjeta 1 */}
              <div className="group relative z-10 overflow-hidden rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 dark:bg-[#151733]">
                <div className="mb-4 h-2 w-16 rounded-full bg-orange-500"></div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Juegos Evita
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Sede Oficial de la competencia social más grande del país.
                </p>
              </div>

              {/* Tarjeta 2 */}
              <div className="group relative z-10 overflow-hidden rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 dark:bg-[#151733]">
                <div className="mb-4 h-2 w-16 rounded-full bg-blue-500"></div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Juegos Bonaerenses
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Orgullosa sede de una de las competencias deportivas más importantes de Buenos Aires.
                </p>
              </div>

              {/* Tarjeta 3 */}
              <div className="group relative z-10 overflow-hidden rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 dark:bg-[#151733]">
                <div className="mb-4 h-2 w-16 rounded-full bg-cyan-500"></div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Liga Mar y Sierras
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Escenario recurrente de las jornadas competitivas de la región.
                </p>
              </div>

              {/* Tarjeta 4 (Imagen) */}
                <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-md min-h-[200px]"> 
                  <img 
                    src="/logo.png" 
                    alt="Nautilus Club"
                    className="h-32 w-auto object-contain transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

            </div>
          </div>
          
        </div>
      </div>



      
    </section>
  );
};

export default SedeEventos;