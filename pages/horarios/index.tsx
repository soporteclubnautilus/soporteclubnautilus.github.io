"use client";

import { useState, useMemo } from "react";
import { getActividades, Actividad } from "@/types/actividades";
import { TarjetaActividad } from '@/components/Actividades/TarjetaActividad';

export default function ActividadesPage() {
  const actividades = getActividades();

  const [filtro, setFiltro] = useState("");
  const [actividadSeleccionada, setActividadSeleccionada] = useState<Actividad | null>(null);
  const [mostrarDropdown, setMostrarDropdown] = useState(false);

  const opcionesFiltradas = useMemo(() => {
    return actividades.filter((act) =>
      act.titulo.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [filtro, actividades]);

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  return (
    <section className="container mx-auto py-16 px-4">
      {/* Espaciado extra arriba */}
      <h1 className="mt-16 mb-12 text-center text-5xl sm:text-6xl font-bold">Horarios</h1>

      {/* Dropdown con búsqueda y botón X */}
      <div className="relative max-w-md mx-auto mb-8">
        <input
          type="text"
          className="border px-4 py-2 rounded-md w-full pr-10 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="Selecciona o busca una actividad..."
          value={actividadSeleccionada?.titulo || filtro}
          onChange={(e) => {
            setFiltro(e.target.value);
            setActividadSeleccionada(null);
            setMostrarDropdown(true);
          }}
          onFocus={() => setMostrarDropdown(true)}
          onBlur={() => setTimeout(() => setMostrarDropdown(false), 150)}
        />

        {/* Botón X para limpiar */}
        {(filtro || actividadSeleccionada) && (
          <button
            onClick={() => {
              setFiltro("");
              setActividadSeleccionada(null);
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        )}

        {mostrarDropdown && (
          <ul className="absolute z-10 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md max-h-60 overflow-y-auto mt-1 shadow-lg">
            {opcionesFiltradas.length > 0 ? (
              opcionesFiltradas.map((act) => (
                <li
                  key={act.slug}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => {
                    setActividadSeleccionada(act);
                    setFiltro("");
                    setMostrarDropdown(false);
                  }}
                >
                  {act.titulo}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500 dark:text-gray-400">No hay resultados</li>
            )}
          </ul>
        )}
      </div>

      {/* Tabla de horarios */}
        {actividadSeleccionada ? (
        <>
          {/* --- Versión de tabla (desktop y tablets) --- */}
          <div className="hidden sm:block overflow-x-auto w-full">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  {dias.map((dia) => (
                    <th
                      key={dia}
                      className="border px-4 py-2 border-gray-300 dark:border-gray-600 whitespace-nowrap"
                    >
                      {dia}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {dias.map((dia) => (
                    <td
                      key={dia}
                      className="border px-4 py-2 text-center align-top border-gray-300 dark:border-gray-600 whitespace-nowrap"
                    >
                      {actividadSeleccionada.horarios[dia]?.map((hora) => (
                        <div key={hora}>{hora}</div>
                      )) || "-"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* --- Versión vertical (móvil) --- */}

          <div className="block sm:hidden space-y-4">
            {dias.map((dia) => {
              const horas = actividadSeleccionada.horarios[dia];
              if (!horas || horas.length === 0) return null; //  oculta días sin horarios

              return (
                <div
                  key={dia}
                  className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm"
                >
                  <h2 className="font-semibold text-lg mb-2">{dia}</h2>
                  <ul className="list-disc ml-4">
                    {horas.map((hora) => (
                      <li key={hora}>{hora}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          
          {/* --- Tarjeta con detalles de la actividad --- */}
          <div className="mt-20 text-center relative">
            {/* Título con fondo animado */}
            <h2 className="mb-6 relative text-3xl font-bold text-black dark:text-white inline-block px-4 py-1 overflow-hidden">
              <span className="relative z-10">Detalles de la actividad</span>
              {/* Fondo animado */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 animate-[gradient_5s_linear_infinite] -z-10"></span>
            </h2>

            {/* Flecha decorativa debajo del título */}
            <div className="flex justify-center mb-6">
              <div className="w-8 h-2 bg-primary relative">
                <div className="absolute right-0 top-0 w-0 h-0 border-t-4 border-t-primary border-l-4 border-l-transparent"></div>
              </div>
            </div>

            {/* Contenedor de la tarjeta */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-105">
                <TarjetaActividad actividad={actividadSeleccionada} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center mt-8 text-gray-500 dark:text-gray-400">
          Selecciona una actividad para ver sus horarios
        </p>
      )}



      <div>
        
      </div>
    </section>


  
  );
}
