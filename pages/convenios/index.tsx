import React from 'react';
import Meta from '@/components/Meta/MetaProps';


// Icono de "Edificio/Institución" para darle identidad a la tarjeta sin usar fotos
const BuildingIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-8 w-8 text-[#1b5dcf]" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

// Icono de Email para el botón de contacto
const MailIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

interface Convenio {
  id: number;
  organizacion: string;
  beneficio: string;
  detalle?: string; // <--- El "?" indica que es opcional
}

const convenios : Convenio[] = [
  {
    id: 0,
    organizacion: "Jubilados y pensionados",
    beneficio: "20% OFF",
    
  },
  {
    id: 0,
    organizacion: "Actividades natatorio grupo familiar (+2 integrantes)",
    beneficio: "10% OFF",
    
  },
  {
    id: 0,
    organizacion: "Gimnasio grupo familiar (+3 integrantes)",
    beneficio: "10% OFF",
    
  },
  {
    id: 1,
    organizacion: "Asociación de Profesores de Educación Fisica de Mar del Plata - APEF",
    beneficio: "20% OFF",
    
  },
  {
    id: 2,
    organizacion: "Centro de Empleados de Farmacia Marplatense",
    beneficio: "20% OFF",
  },
  {
    id: 3,
    organizacion: "Colegio de Psicólogas y Psicólogos. Distrito x - Provincia de Buenos Aires",
    beneficio: "20% OFF",
  },
  {
    id: 4,
    organizacion: "Sindicato de Luz y Fuerza Mar del Plata",
    beneficio: "20% OFF",
  },
  {
    id: 5,
    organizacion: "Asociación Judicial Bonaerense - AJB",
    beneficio: "20% OFF",
  },
  {
    id: 6,
    organizacion: "Sindicato de Trabajadores del Gas, Natural y Derivados - STIGAS",
    beneficio: "20% OFF",
  },
  {
    id: 7,
    organizacion: "Unión de Tranviarios Automotor - UTA",
    beneficio: "20% OFF",
  },
  {
    id: 8,
    organizacion: "Sindicato de Empleados y Obreros de la Industria de la Carne de Mar del Plata",
    beneficio: "20% OFF",
  },
  {
    id: 9,
    organizacion: "UTEDYC",
    beneficio: "20% OFF",
  },
  {
    id: 10,
    organizacion: "UTHGRA",
    beneficio: "20% OFF",
  },
  {
    id: 10,
    organizacion: "Club Quilmes",
    beneficio: "20% OFF",
  },
  {
    id: 10,
    organizacion: "SADOP",
    beneficio: "20% OFF",
  },
  {
    id: 10,
    organizacion: "ATE",
    beneficio: "20% OFF",
  },
  {
    id: 10,
    organizacion: "Centro Mutual Docente - CMD",
    beneficio: "20% OFF",
  },
];

export default function ConveniosPage() {
  
  return (
    <section className=" py-12">
      <Meta
        title="Nautilus Club ~ Convenios"
        description="Conocé los convenios vigentes y disfrutá de los beneficios ~ Complejo Nautilus Club - Mar del plata, Buenos Aires, Argentina"  
        />
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="mt-22 mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Convenios <span className="bg-gradient-to-r from-[#1b5dcf] to-[#4c6ba1] bg-clip-text text-transparent">Institucionales</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Si perteneces a alguna de estas organizaciones, presentá tu credencial y accedé a descuentos exclusivos en Nautilus Club.
          </p>
        </div>

        {/* Grilla de Instituciones */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {convenios.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border bg-white p-6 shadow-xl shadow-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-lg bg-blue-50 p-2 dark:bg-blue-900/20">
                    <BuildingIcon />
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    {item.beneficio}
                  </span>
                </div>
                
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {item.organizacion}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.detalle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action (CTA) - Zona de Contacto */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1b5dcf] to-[#4c6ba1] p-8 text-center text-white shadow-xl shadow-blue-200 dark:shadow-none md:p-12">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            ¿Querés que tu institución tenga convenio con Nautilus Club?
          </h2>
          <p className="mb-8 text-blue-100 md:text-lg">
            Brindale a tus empleados o afiliados el beneficio de una vida más saludable. Ponete en contacto con nosotros para gestionar un acuerdo.
          </p>
          
          <a 
            href="mailto:administracion@nautilus.com.ar"
            className="inline-flex text-sm md:text-base items-center rounded-full bg-white px-4 py-4 text-lg font-bold text-[#1b5dcf] transition-transform duration-200 hover:scale-105 hover:bg-gray-50 hover:shadow-lg"
          >
            <MailIcon />
            administracion@nautilus.com.ar
          </a>
        </div>

      </div>
    </section>
  );
}