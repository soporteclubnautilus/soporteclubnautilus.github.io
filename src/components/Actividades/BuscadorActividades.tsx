'use client';

import { useState } from 'react';

import { type Actividad } from '@/types/actividades';
import { TarjetaActividad } from '@/components/Actividades/TarjetaActividad';



// --- Componente Principal del Buscador ---
export default function BuscadorActividades({ actividades }: { actividades: Actividad[] }) {
  const [query, setQuery] = useState('');

  const actividadesFiltradas = actividades.filter((act) => {
    const titulo = act.titulo?.toLowerCase() || '';
    const desc = act.descripcionBreve?.toLowerCase() || '';
    return titulo.includes(query.toLowerCase()) || desc.includes(query.toLowerCase());
  });

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
          actividadesFiltradas.map((act) => (
            <TarjetaActividad key={act.slug} actividad={act} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No se encontraron actividades.
          </p>
        )}
      </div>
    </div>
  );
}
