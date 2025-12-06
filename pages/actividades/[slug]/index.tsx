import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getActividades, getActividad, type Actividad } from '@/types/actividades';
import { useState } from 'react';
import ShareButtons from '@/components/Actividades/compartir';

interface ActividadPageProps {
  actividad: Actividad | null;
}

// Genera las rutas estáticas (equivalente a generateStaticParams)
export const getStaticPaths: GetStaticPaths = async () => {
  const actividades = getActividades();
  const paths = actividades.map((act) => ({
    params: { slug: act.slug },
  }));
  return { paths, fallback: false };
};

// Pasa la actividad correspondiente como prop
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const actividad = getActividad(slug) || null;
  return { props: { actividad } };
};


export default function ActividadDetailPage({ actividad }: ActividadPageProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!actividad) {
    return <div className="text-center py-20">Actividad no encontrada.</div>;
  }

  return (
    
    <article className="container mx-auto py-24 px-4">
      {/* Título */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white md:text-5xl">
          {actividad.titulo}
        </h1>
        <p className="mt-4 text-lg text-body-color dark:text-gray-300">
          {actividad.descripcionBreve}
        </p>
      </div>

      {/* Contenedor Principal */}
      <div className="flex flex-col-reverse gap-8 lg:flex-row">
        {/* Izquierda */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div className="relative h-80 w-full">
            <Image
              src={actividad.foto}
              alt={actividad.titulo}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Horarios */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">Horarios</h3>
          <ul className="space-y-3">
            {Object.keys(actividad.horarios).map((dia) => (
              <li 
                key={dia} 
                // Mantenemos flex row. Agregamos 'gap-4' para seguridad.
                className="flex justify-between items-start border-t border-gray-200 pt-3 dark:border-gray-700 gap-4"
              >
                {/* 1. Volvemos a dejar el DÍA fijo con w-1/3 como te gustaba */}
                <span className="font-bold text-body-color dark:text-gray-300 w-1/3 shrink-0">
                  {dia}
                </span>
                
                {/* 2. CAMBIO AQUÍ: Usamos 'flex-wrap' y 'justify-end'.
                    Esto hace que las horas se alineen a la derecha pero bajen si no hay espacio. */}
                <div className="flex flex-wrap justify-end gap-2 w-2/3">
                  {actividad.horarios[dia].map((hora, index) => (
                    <span 
                      key={index} 
                      className="
                        /* 3. Quitamos 'whitespace-nowrap' y 'min-w'. 
                          Permitimos que el texto dentro del box gris se acomode si es muy largo. */
                        text-right
                        text-body-color dark:text-gray-300 
                        bg-gray-50 dark:bg-gray-700/50 
                        px-2 py-1 rounded-md text-sm
                        whitespace-pre-line
                      "
                    >
                      {hora}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

          {/* Precios */}
          <TablaPrecios actividad={actividad} />


          {/* Caja de contacto por WhatsApp */}
          <div className="rounded-xl border border-gray-200 bg-[#e0f7fa] p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 mt-6 text-center">
            <h3 className="mb-3 text-2xl font-semibold text-black dark:text-white">
              ¿Alguna duda?
            </h3>
            <p className="text-body-color dark:text-gray-300 mb-4">
              Si querés hacernos una consulta sobre <strong>{actividad.titulo}</strong>, escribinos.
            </p>
            <a
              href={`https://wa.me/5492235028755?text=Hola! Quería preguntar por la actividad: ${encodeURIComponent(actividad.titulo)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#1ebe5d] transition-colors"
            >
              Contactar por WhatsApp
            </a>
          </div>

          <ShareButtons/>




        </div>



        

        {/* Derecha: Markdown */}
        <div className="lg:w-2/3 markdown-block rounded-xl border p-8 shadow-lg bg-white dark:bg-gray-800 overflow-hidden">
            
        <style>{`
          .markdown-block h1 { font-size: 2.5rem !important; font-weight: 700 !important; color: theme('colors.black') !important; }
          .markdown-block h2 { font-size: 2rem !important; font-weight: 600 !important; color: theme('colors.black') !important; }
          .markdown-block h3 { font-size: 1.5rem !important; font-weight: 600 !important; color: theme('colors.black') !important; }

          .markdown-block p { font-size: 1rem !important; line-height: 1.6 !important; color: theme('colors.gray.800') !important; }

          .markdown-block strong { font-weight: 700 !important; }
          .markdown-block em { font-style: italic !important; }
          .markdown-block del { text-decoration: line-through !important; }

          .markdown-block ul, .markdown-block ol { margin: 0 0 1rem 1.5rem !important; padding-left: 1rem !important; }
          .markdown-block li { margin: 0.25rem 0 !important; }

          .markdown-block blockquote { 
            border-left: 4px solid theme('colors.gray.300') !important; 
            padding: 0.5rem 1rem; 
            background: theme('colors.gray.100') !important; 
            color: theme('colors.gray.700') !important; 
            margin: 0 0 1rem 0; 
          }

          .markdown-block code { 
            font-family: monospace; 
            background: theme('colors.gray.200') !important; 
            padding: 0.2rem 0.4rem; 
            border-radius: 0.25rem; 
          }

          .markdown-block pre { 
            background: theme('colors.gray.100') !important; 
            padding: 1rem; 
            overflow: auto; 
            border-radius: 0.5rem; 
          }

          .markdown-block a { color: theme('colors.blue.600') !important; text-decoration: underline; }
          .markdown-block img {
            max-width: 100%; /* móvil */
            height: auto;
            display: block;
            margin: 1rem auto;
            border-radius: 0.5rem;
            cursor: pointer;
          }

          /* Escritorio */
          @media (min-width: 1024px) { /* lg breakpoint en Tailwind */
            .markdown-block img {
              max-width: 80%;  /* limitar a 80% del contenedor */
              margin: 2rem auto; /* centrar y dar más espacio */
            }
          }
          

          /* Dark theme overrides */
          .dark .markdown-block h1,
          .dark .markdown-block h2,
          .dark .markdown-block h3,
          .dark .markdown-block p,
          .dark .markdown-block blockquote {
            color: theme('colors.white') !important;
          }
          .dark .markdown-block blockquote {
            background: theme('colors.gray.800') !important;
            border-color: theme('colors.gray.600') !important;
            color: theme('colors.gray.200') !important;
          }
          .dark .markdown-block code { background: theme('colors.gray.700') !important; }
          .dark .markdown-block pre { background: theme('colors.gray.800') !important; }
          .dark .markdown-block a { color: theme('colors.blue.400') !important; }
        `}</style>

        <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <img
              {...props}
              className="cursor-pointer max-w-full rounded-lg my-4"
              onClick={() => setLightboxImage(props.src || '')}
            />
          ),
        }}
      >
        {actividad.content}
      </ReactMarkdown>

      {lightboxImage && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-pointer"
        onClick={() => setLightboxImage(null)} // clic fuera cierra
      >
        <div
          className="relative max-h-[80vh] max-w-[90vw]"
          onClick={(e) => e.stopPropagation()} // evitar cerrar al click dentro
        >
          {/* Imagen ampliada */}
          <img
            src={lightboxImage}
            alt="Imagen ampliada"
            className="object-contain rounded-lg cursor-pointer max-w-full max-h-[100vh]"
            onClick={() => setLightboxImage(null)} // click sobre la imagen cierra
          />

          {/* Botón de cerrar en esquina de la imagen */}
          <button
            className="absolute top-0 right-0 m-2 text-white text-3xl font-bold bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
        </div>
      </div>
    )}
      
      
      
      </div>



      

      </div>

    </article>

  );
}







function TablaPrecios({ actividad }: { actividad: Actividad }) {
  // Helpers
  const check = (val: any) => val === true || val === "si" || val === "Si";
  const tieneDcto10 = check(actividad.descuento10);
  const tieneDcto20 = check(actividad.descuento20);
  const hayDescuentos = tieneDcto10 || tieneDcto20;
  const formatMoney = (amount: number) => new Intl.NumberFormat('es-AR').format(amount);

  // 1. DEFINICIÓN DE COLUMNAS
  // Móvil: 34% para descripción, el resto se reparte.
  // Desktop (sm): 40% para descripción.
  let gridCols = "";
  if (tieneDcto10 && tieneDcto20) {
    // 4 Columnas
    gridCols = "grid-cols-[34%_repeat(3,minmax(0,1fr))] sm:grid-cols-[40%_repeat(3,minmax(0,1fr))]"; 
  } else if (tieneDcto10 || tieneDcto20) {
    // 3 Columnas
    gridCols = "grid-cols-[40%_repeat(2,minmax(0,1fr))] sm:grid-cols-[50%_repeat(2,minmax(0,1fr))]";
  }

  // 2. ESTILOS RESPONSIVE (La clave para el móvil)
  // gap-1 en móvil (4px) vs gap-4 en PC (16px)
  const gapSize = "gap-x-1 sm:gap-x-4"; 
  // Texto 11px en móvil vs texto normal en PC. 'tracking-tight' junta un poco los números.
  const textSize = "text-[11px] sm:text-sm tracking-tight sm:tracking-normal"; 
  const headerSize = "text-[10px] sm:text-xs uppercase tracking-wider";

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
      {/* Padding chico en movil (p-3), grande en PC (p-6) */}
      <div className="p-3 sm:p-6">
        <h3 className="mb-3 text-lg sm:text-xl font-semibold text-black dark:text-white">Precios</h3>
        
        {/* CABECERA */}
        {hayDescuentos && (
          <div className={`
            grid ${gridCols} ${gapSize}
            mb-2 pb-2 border-b-2 border-gray-100 dark:border-gray-700
            font-bold text-gray-500 dark:text-gray-400 ${headerSize}
          `}>
            {/* Alineamos un poco a la izquierda con pl-1 para que no se pegue al borde */}
            <span className="text-left pl-1">Plan</span>
            
            <span className="text-right">Valores</span>
            {tieneDcto10 && <span className="text-right text-green-600 dark:text-green-400">-10%</span>}
            {tieneDcto20 && <span className="text-right text-blue-600 dark:text-blue-400">-20%</span>}
          </div>
        )}

        {/* LISTA */}
        <ul className="space-y-2 sm:space-y-3">
          {actividad.precios.map((precio) => {
            
            // ✅ LÓGICA AGREGADA: Verificar si el descuento está deshabilitado para este item
            const aplicaDescuentos = !precio.disable_descuento;

            return (
              <li 
                key={precio.descripcion} 
                className={`
                  border-t border-gray-50 pt-2 dark:border-gray-700/50
                  ${hayDescuentos 
                    ? `grid ${gridCols} ${gapSize} items-center` 
                    : "flex justify-between"
                  }
                  ${textSize}
                `}
              >
                {/* Columna Descripción */}
                <span className="text-body-color dark:text-gray-300 font-medium leading-3 sm:leading-tight pl-1">
                  {precio.descripcion}
                </span>
                
                {/* Precios (Lista siempre visible) */}
                <span className={`font-bold text-black dark:text-white ${hayDescuentos ? "text-right" : ""}`}>
                  ${formatMoney(precio.valor)}
                </span>

                {/* Precio 10% (Con lógica condicional) */}
                {tieneDcto10 && (
                  <span className={`text-right font-semibold ${aplicaDescuentos ? "text-green-600 dark:text-green-400" : "text-gray-400"}`}>
                     {aplicaDescuentos ? `$${formatMoney(precio.valor * 0.9)}` : "-"}
                  </span>
                )}

                {/* Precio 20% (Con lógica condicional) */}
                {tieneDcto20 && (
                  <span className={`text-right font-semibold ${aplicaDescuentos ? "text-blue-600 dark:text-blue-400" : "text-gray-400"}`}>
                     {aplicaDescuentos ? `$${formatMoney(precio.valor * 0.8)}` : "-"}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}