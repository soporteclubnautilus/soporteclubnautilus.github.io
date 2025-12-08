import React from 'react';

// --- ÍCONOS SVG INLINE (Sin cambios) ---
const IconDroplets = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
  </svg>
);

const IconDumbbell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6.5 6.5 11 11"></path>
    <path d="m21 21-1-1"></path>
    <path d="m3 3 1 1"></path>
    <path d="m18 22 4-4"></path>
    <path d="m2 6 4-4"></path>
    <path d="m3 10 7-7"></path>
    <path d="m14 21 7-7"></path>
  </svg>
);

const IconBasketball = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M5.6 5.6l12.8 12.8"></path>
    <path d="M18.4 5.6l-12.8 12.8"></path>
    <path d="M12 2a10 10 0 0 0 0 20"></path>
    <path d="M2 12h20"></path>
  </svg>
);

const IconSoccer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 7l-4.5 2.5v5L12 17l4.5-2.5v-5z"></path>
    <path d="M12 7v-5"></path>
    <path d="M7.5 9.5L4 7"></path>
    <path d="M16.5 9.5L20 7"></path>
    <path d="M16.5 14.5L20 17"></path>
    <path d="M7.5 14.5L4 17"></path>
    <path d="M12 17v5"></path>
  </svg>
);

const Instalaciones = () => {
  return (
    // CAMBIO PRINCIPAL: Fondo blanco por defecto, negro en dark mode. Texto gris oscuro por defecto, claro en dark.
    <div className="bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      
        
        
        <div className="relative z-10 text-center px-4">
          {/* El Hero suele verse mejor con texto oscuro sobre imagen clara o texto claro sobre imagen oscura.
              Aquí forzamos texto oscuro en light mode si la imagen es clara, o mantenemos contraste.
              Dado el overlay, mantenemos un estilo contrastado general, pero ajustamos el título. */}
          <h1 className="mt-30 text-4xl md:text-5xl font-bold
            bg-gradient-to-r from-[#1b5dcf] to-[#4c6ba1]
            bg-clip-text text-transparent">
            Nuestros Espacios
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Diseñados para tu rendimiento, confort y bienestar. 
            Conocé nuestras instalaciones.
          </p>
        </div>
     

      {/* --- SECCIONES PRINCIPALES (Diseño Zig-Zag) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* 1. El Natatorio */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-cyan-900/10 dark:shadow-cyan-900/20 aspect-video group border border-gray-200 dark:border-neutral-800">
              <img 
                src="/images/pileta.jpg" 
                alt="Natatorio semi-olímpico" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            {/* Badge adaptativo */}
            <div className="inline-flex items-center gap-2 font-semibold px-3 py-1 rounded-full w-fit 
              bg-cyan-100 text-cyan-800 border-cyan-200 
              dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800/50 border">
              <IconDroplets />
              <span>Zona Acuática</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Natatorio Climatizado</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Nuestra pileta semi-olímpica cuenta con 25 metros de largo y tratamiento de agua constante. Ideal tanto para entrenamiento de alto rendimiento como para clases de escuela y aquagym.
            </p>
            <ul className="space-y-2 text-gray-500 dark:text-gray-500">
              <li>• 6 Carriles amplios</li>
              <li>• Temperatura controlada todo el año</li>
              <li>• Guardavidas permanente</li>
            </ul>
          </div>
        </div>

        {/* 2. El Gimnasio */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-cyan-900/10 dark:shadow-cyan-900/20 aspect-video group border border-gray-200 dark:border-neutral-800">
              <img 
                src="/images/gym.jpg" 
                alt="Gimnasio de musculación" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 font-semibold px-3 py-1 rounded-full w-fit 
              bg-cyan-100 text-cyan-800 border-cyan-200 
              dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800/50 border">
              <IconDumbbell />
              <span>Fitness & Musculación</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Gimnasio Completo</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Un espacio amplio con ventanales y luz natural, equipado con máquinas de última generación, sector de peso libre y zona de cardio con vistas al complejo.
            </p>
            <ul className="space-y-2 text-gray-500 dark:text-gray-500">
              <li>• Máquinas de musculación modernas</li>
              <li>• Cintas y bicicletas</li>
              <li>• Amplio sector de peso libre y barras</li>
            </ul>
            
          </div>
        </div>

        {/* 3. Cancha de Básquet */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-cyan-900/10 dark:shadow-cyan-900/20 aspect-video group border border-gray-200 dark:border-neutral-800">
              <img 
                src="/images/basquet.jpg" 
                alt="Estadio de básquet" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 font-semibold px-3 py-1 rounded-full w-fit 
              bg-cyan-100 text-cyan-800 border-cyan-200 
              dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800/50 border">
              <IconBasketball />
              <span>Básquet</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Estadio de Básquet</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Cancha profesional con piso flotante de madera de primera calidad. Un escenario perfecto para partidos oficiales, entrenamientos de todas las categorías y torneos.
            </p>
            <ul className="space-y-2 text-gray-500 dark:text-gray-500">
              <li>• Piso flotante reglamentario</li>
              <li>• Tableros de cristal y tanteador electrónico</li>
              <li>• Tribunas con capacidad para espectadores</li>
            </ul>
          </div>
        </div>

        {/* 4. Cancha de Fútbol */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-cyan-900/10 dark:shadow-cyan-900/20 aspect-video group border border-gray-200 dark:border-neutral-800">
              <img 
                src="/images/futbol.jpg" 
                alt="Cancha de fútbol sintético" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 font-semibold px-3 py-1 rounded-full w-fit 
              bg-cyan-100 text-cyan-800 border-cyan-200 
              dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800/50 border">
              <IconSoccer />
              <span>Fútbol</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Cancha de Fútbol</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Disfrutá del mejor fútbol en nuestra cancha de césped sintético. Disponible para alquileres, escuelita de fútbol infantil y torneos internos del club.
            </p>
            <ul className="space-y-2 text-gray-500 dark:text-gray-500">
              <li>• Césped sintético de alta densidad</li>
              <li>• Iluminación LED nocturna</li>
              <li>• Redes de contención perimetrales</li>
            </ul>
          </div>
        </div>

      </div>

      {/* --- GRILLA DE DETALLES --- */}
      {/* Fondo gris muy claro en light, gris muy oscuro en dark */}
      <div className="bg-gray-50 dark:bg-neutral-900 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Más comodidades</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CARDS: Blancas en light, negras en dark */}
            <div className="p-6 rounded-xl shadow-lg transition-colors
              bg-white border border-gray-100 
              dark:bg-black dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-600">
              
              <div className="h-48 rounded-lg bg-gray-200 dark:bg-neutral-800 mb-4 overflow-hidden">
                <img src="/images/vestuario.jpg" alt="Vestuarios" className="w-full h-full object-cover"/>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Vestuarios Amplios</h4>
              <p className="text-gray-600 dark:text-gray-400">Duchas individuales, lockers y todo para tu comodidad post-entrenamiento.</p>
            </div>
            
            <div className="p-6 rounded-xl shadow-lg transition-colors
              bg-white border border-gray-100 
              dark:bg-black dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-600">
              <div className="h-48 rounded-lg bg-gray-200 dark:bg-neutral-800 mb-4 overflow-hidden">
                 <img src="/images/sum.jpg" alt="Salón" className="w-full h-full object-cover"/>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Salón de Usos Múltiples</h4>
              <p className="text-gray-600 dark:text-gray-400">Espacio social disponible para eventos del club y encuentros de los socios.</p>
            </div>

            <div className="p-6 rounded-xl shadow-lg transition-colors
              bg-white border border-gray-100 
              dark:bg-black dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-600">
              <div className="h-48 rounded-lg bg-gray-200 dark:bg-neutral-800 mb-4 overflow-hidden">
                 <img src="/images/recepcion.jpg" alt="Recepción" className="w-full h-full object-cover"/>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Recepción y Acceso</h4>
              <p className="text-gray-600 dark:text-gray-400">Ubicada estratégicamente en el ingreso principal para controlar el acceso y asistirte ni bien llegás al club.</p>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default Instalaciones;