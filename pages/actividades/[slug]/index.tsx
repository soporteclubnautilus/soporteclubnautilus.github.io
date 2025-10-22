import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getActividades, getActividad, type Actividad } from '@/types/actividades';
import { useState } from 'react';

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
      <div className="flex flex-col gap-8 lg:flex-row">
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
                <li key={dia} className="flex justify-between border-t border-gray-200 pt-3 dark:border-gray-700">
                  <span className="font-bold text-body-color dark:text-gray-300">{dia}</span>
                  <span className="text-right text-body-color dark:text-gray-300">
                    {actividad.horarios[dia].join(' / ')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Precios */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">Precios</h3>
            <ul className="space-y-3">
              {actividad.precios.map((precio) => (
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

        {/* Derecha: Markdown */}
        <div className="lg:w-2/3 markdown-block rounded-xl border p-8 shadow-lg bg-white dark:bg-gray-800">
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
            max-width: 400px;   /* máximo ancho */
            max-height: 300px;  /* máximo alto opcional */
            width: auto;
            height: auto;
          }
          .ampliado {
            min-width: 70%;
            min-height: 70%;
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
    onClick={() => setLightboxImage(null)}
  >
    <img
      src={lightboxImage}
      alt="Imagen ampliada"
      className="max-w-full ampliado max-h-full object-contain"
    />
  </div>
)}

      
      

      </div>





      </div>

    </article>

  );
}




