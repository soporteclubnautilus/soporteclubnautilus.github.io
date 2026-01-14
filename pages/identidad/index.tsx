import React from "react";
import Meta from "@/components/Meta/MetaProps";

const QuienesSomos = () => {
  return (
    
    <section className="relative z-10 overflow-hidden pt-32  pb-8 md:pb-20  lg:pb-14">
       <Meta
        title="Identidad - Nautilus Club"
        description="Complejo Nautilus Club - Mar del plata, Buenos Aires, Argentina - Conocé nuestra misión, visión y valores"  
        />
      
      {/* --- FONDO DECORATIVO --- */}
      <div className="absolute  top-0 left-0 z-[-1] h-full w-full "></div>

      <div className="container mx-auto px-4">
        
        {/* --- HEADER --- */}
        <div className="mb-5 flex flex-col items-center justify-center text-center">
          
         
          <h1 className="mb-8 text-4xl md:text-5xl font-bold  text-gray-900 dark:text-white">
            Sobre <span className="bg-gradient-to-r from-[#1b5dcf] to-[#4c6ba1] bg-clip-text text-transparent">Nautilus Club</span>
          </h1>
         
        </div>

        {/* --- MISIÓN Y VISIÓN (Grid 2 columnas) --- */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          
          {/* Misión */}
          <div className="group relative overflow-hidden rounded-sm bg-white p-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:hover:shadow-gray-dark duration-300">
            <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary/10 text-primary">
               {/* Ícono TARGET (Diana) SVG Puro */}
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
               </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Nuestra Misión
            </h3>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
              Acompañar el desarrollo integral de las familias marplatenses en ámbitos deportivos, promoviendo la salud física y el bienestar emocional.
            </p>
            {/* Efecto de fondo */}
            <div className="absolute right-[-20px] top-[-20px] -z-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all"></div>
          </div>

          {/* Visión */}
          <div className="group relative overflow-hidden rounded-sm bg-white p-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:hover:shadow-gray-dark duration-300">
            <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-cyan-500/10 text-cyan-500">
               {/* Ícono OJO SVG Puro */}
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
               </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Nuestra Visión
            </h3>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
              Ser un espacio deportivo inclusivo y accesible para todas las familias marplatenses, donde cada persona pueda crecer, aprender y disfrutar del deporte.
            </p>
             <div className="absolute right-[-20px] top-[-20px] -z-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-all"></div>
          </div>

        </div>

        {/* --- VALORES --- */}
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-black dark:text-white">
              Nuestros Valores
            </h3>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Valor 1: Integración */}
            <ValueCard 
              title="Integración" 
              description="Promovemos un espacio donde todas las personas, sin importar edad o nivel, se sienten parte. Fomentamos la inclusión, la diversidad y la participación activa de toda la comunidad."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              }
            />

            {/* Valor 2: Trabajo en Equipo */}
            <ValueCard 
              title="Trabajo en Equipo" 
              description="Creemos en la colaboración como base del crecimiento deportivo y humano. Impulsamos prácticas que fortalecen el compañerismo, la cooperación y el apoyo mutuo entre socios, profesores y staff."
              icon={
                // Icono de "Users / Grupo"
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              }
            />

            {/* Valor 3: Buen Ambiente Laboral */}
            <ValueCard 
              title="Buen Ambiente Laboral" 
              description="Construimos un entorno de trabajo positivo, respetuoso y colaborativo, donde cada integrante del equipo puede desarrollarse y sentirse valorado. Sabemos que un buen clima interno se refleja directamente en la calidad del servicio que brindamos."
              icon={
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              }
            />

            {/* Valor 4: Respeto */}
            <ValueCard 
              title="Respeto" 
              description="Actuamos con responsabilidad y consideración hacia los demás, respetando las normas, los espacios, los tiempos y la diversidad de las personas. Promovemos una convivencia sana dentro y fuera del club."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              }
            />

            {/* Valor 5: Profesionalismo */}
            <ValueCard 
              title="Profesionalismo" 
              description="Nos comprometemos a brindar un servicio serio, seguro y de calidad. Nuestro equipo se capacita, planifica y trabaja con dedicación para asegurar actividades responsables y orientadas al bienestar de cada persona."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              }
            />

             {/* Tarjeta extra: Invitación */}
             <div className="flex flex-col items-center justify-center rounded-md bg-primary/5 p-8 text-center border-2 border-dashed border-primary/20 hover:bg-primary/10 duration-300 cursor-pointer">
                <h4 className="mb-2 text-xl font-bold text-primary">¿Te sumás?</h4>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Vení a conocer la experiencia Nautilus en persona.
                </p>
             </div>

          </div>
        </div>

      </div>

      
    </section>
  );
};

const ValueCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-md bg-white p-8 shadow-two hover:shadow-one dark:bg-gray-dark dark:hover:shadow-gray-dark transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
        {icon}
      </div>
      <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
        {description}
      </p>
    </div>
  );
};

export default QuienesSomos;