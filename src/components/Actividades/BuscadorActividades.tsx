'use client';

import { useState } from 'react';

import { type Actividad } from '@/types/actividades';
import { TarjetaActividad } from '@/components/Actividades/TarjetaActividad';



// --- Componente Principal del Buscador ---
export default function BuscadorActividades({ actividades }: { actividades: Actividad[] }) {
  const [query, setQuery] = useState('');

function normalize(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

  const actividadesFiltradas = actividades.filter((act) => {
  const titulo = normalize(act.titulo || '');
  const desc = normalize(act.descripcionBreve || '');
  const q = normalize(query);

  return titulo.includes(q) || desc.includes(q);
  });

  return (
    <div>
      <div className='bg-[#05438b] p-8 rounded-md shadow-md shadow-gray-400 '>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar actividad..."
        className=" w-full border-black bg-white rounded-md border p-4 text-lg dark:border-gray-600 dark:bg-gray-800"
      />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
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
