import { useState } from 'react';
import { type Actividad } from '@/types/actividades';

import Image from 'next/image';
import Link from 'next/link';

// --- Componente de la Tarjeta (con fallback de imagen corregido) ---
export const TarjetaActividad = ({ actividad }: { actividad: Actividad }) => {
  // Evitar error si la prop viene vacía
  const [imgSrc, setImgSrc] = useState(actividad?.foto || '/images/favicon.png');

  if (!actividad) return null;

  // Validar que horarios exista y sea objeto
  const diasDeActividad =
    actividad.horarios && typeof actividad.horarios === 'object'
      ? Object.keys(actividad.horarios).join(', ')
      : 'Sin horarios';

  return (
    <Link
      href={`/actividades/${actividad.slug}`}
      className="mb-6 block rounded-lg border bg-white shadow-xl shadow-gray-700 transition-transform duration-300 hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="relative h-56 w-full">
        <Image
          src={imgSrc}
          alt={actividad.titulo || 'Actividad'}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
          onError={() => setImgSrc('/images/favicon.png')}
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold bg-gradient-to-r from-[#1b5dcf] to-[#4c6ba1]
          bg-clip-text text-transparent">
          {actividad.titulo || 'Actividad sin título'}
        </h3>
        <p className="mb-4 text-body-color dark:text-gray-300">
          {actividad.descripcionBreve || 'Sin descripción disponible.'}
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-block max-w-[80%] rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            {diasDeActividad}
          </span>
          <span className="text-sm font-bold text-primary transition-colors duration-200 hover:text-primary/80">
            + info
          </span>
        </div>
      </div>
    </Link>
  );
};