import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getActividades, getActividad, type Actividad } from '@/types/actividades';

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
