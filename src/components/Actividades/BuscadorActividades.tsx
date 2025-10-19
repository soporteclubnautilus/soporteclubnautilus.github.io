'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Actividad } from '@/types/actividades';

// --- Componente de la Tarjeta (con fallback de imagen corregido) ---
const TarjetaActividad = ({ actividad }: { actividad: Actividad }) => {
  // Estado para manejar el src de la imagen (permite cambiar a una por defecto si hay error)
  const [imgSrc, setImgSrc] = useState(actividad.foto || '/images/logo/logo.svg');

  // Obtenemos los nombres de los días del objeto 'horarios' y los unimos con comas
  const diasDeActividad = Object.keys(actividad.horarios).join(', ');

  return (
    <Link
      href={`/actividades/${actividad.slug}`}
      className="mb-6 block rounded-lg border bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="relative h-56 w-full">
        <Image
          src={imgSrc}
          alt={actividad.titulo}
          fill
          style={{ objectFit: 'contain' }} // puede ser cover
          className="rounded-t-lg"
          onError={() => setImgSrc('/images/logo/logo.svg')} // <-- fallback dinámico
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">{actividad.titulo}</h3>
        <p className="mb-4 text-body-color dark:text-gray-300">{actividad.descripcionBreve}</p>
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
          {diasDeActividad}
        </span>
      </div>
    </Link>
  );
};

// --- Componente Principal del Buscador ---
export default function BuscadorActividades({ actividades }: { actividades: Actividad[] }) {
  const [query, setQuery] = useState('');

  const actividadesFiltradas = actividades.filter(
    (act) =>
      act.titulo.toLowerCase().includes(query.toLowerCase()) ||
      act.descripcionBreve.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar actividad..."
        className="mb-8 w-full rounded-md border p-4 text-lg dark:border-gray-600 dark:bg-gray-800"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {actividadesFiltradas.length > 0 ? (
          actividadesFiltradas.map((act) => <TarjetaActividad key={act.slug} actividad={act} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No se encontraron actividades.</p>
        )}
      </div>
    </div>
  );
}
