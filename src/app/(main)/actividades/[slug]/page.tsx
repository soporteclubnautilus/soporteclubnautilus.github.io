import { getActividades } from '@/types/actividades'; // Asegúrate que la ruta sea correcta
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

// Esta función busca la actividad específica
function getActividad(slug: string) {
  // Simulación: asegúrate que tu función real funcione como se espera
  const actividades = getActividades(); 
  return actividades.find(act => act.slug === slug);
}

export default function ActividadDetailPage({ params }: { params: { slug: string } }) {
  const actividad = getActividad(params.slug);

  if (!actividad) {
    return <div className="text-center py-20">Actividad no encontrada.</div>;
  }

  return (
    <article className="container mx-auto py-24 px-4">
      
      {/* --- Título Centrado --- */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white md:text-5xl">
          {actividad.titulo}
        </h1>
        <p className="mt-4 text-lg text-body-color dark:text-gray-300">
          {actividad.descripcionBreve}
        </p>
      </div>

      {/* --- Contenedor Principal de 2 Columnas --- */}
      <div className="flex flex-col gap-8 lg:flex-row">

        {/* --- Columna Izquierda: Imagen y Cajas de Información --- */}
        <div className="w-full lg:w-1/3">
          <div className="space-y-8">
            <div className="relative h-80 w-full">
              <Image 
                src={actividad.foto} 
                alt={actividad.titulo} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-xl shadow-lg" 
              />
            </div>
            
            {/* ====== CAJA DE HORARIOS ====== */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                Horarios
              </h3>
              <ul className="space-y-3">
                {Object.keys(actividad.horarios).map(dia => (
                  <li key={dia} className="flex justify-between border-t border-gray-200 pt-3 dark:border-gray-700">
                    <span className="font-bold text-body-color dark:text-gray-300">{dia}</span>
                    <span className="text-right text-body-color dark:text-gray-300">
                      {actividad.horarios[dia].join(' / ')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ====== CAJA DE PRECIOS ====== */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                Precios
              </h3>
              <ul className="space-y-3">
                {actividad.precios.map(precio => (
                  <li key={precio.descripcion} className="flex justify-between border-t border-gray-200 pt-3 dark:border-gray-700">
                    <span className="text-body-color dark:text-gray-300">{precio.descripcion}</span>
                    <span className="font-bold text-black dark:text-white">
                      ${new Intl.NumberFormat('es-AR').format(precio.valor)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- Columna Derecha: Contenido Markdown --- */}
        <div className="w-full lg:w-2/3">
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="prose max-w-none dark:prose-invert">
              <ReactMarkdown>{actividad.content}</ReactMarkdown>
            </div>
          </div>
        </div>
        
      </div>
    </article>
  );
}