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

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábados"];

  // --- FUNCIÓN CORREGIDA ---
  const obtenerHorariosPorDia = (diaColumna: string, horarios: Record<string, string[] | undefined>) => {
    if (!horarios) return [];
    
    const clavesEncontradas = Object.keys(horarios).filter(clave => 
      clave.includes(diaColumna)
    );

    return clavesEncontradas.flatMap(clave => {
      return horarios[clave] || [];
    });
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="mt-16 mb-12 text-center text-5xl sm:text-6xl font-bold">Horarios</h1>

      {/* Dropdown con búsqueda */}
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
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 "
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

      {/* Tabla de horarios (Rediseñada) */}
      {actividadSeleccionada ? (
        <>
          {/* --- Versión de cuadrícula flexible (Desktop) --- */}
          <div className="hidden sm:block w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-6 gap-4 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              {/* Encabezados */}
              {dias.map((dia) => (
                <div key={dia} className="bg-gray-100 dark:bg-gray-800 text-center font-bold p-4 border-b border-gray-300 dark:border-gray-600">
                  {dia}
                </div>
              ))}
              {/* Celdas con horarios */}
              {dias.map((dia) => {
                const horariosDelDia = obtenerHorariosPorDia(dia, actividadSeleccionada.horarios);
                return (
                  <div key={dia} className="p-4 flex flex-col gap-2 bg-white dark:bg-gray-900 text-center border-r last:border-r-0 border-gray-200 dark:border-gray-700">
                    {horariosDelDia.length > 0 ? (
                      horariosDelDia.map((hora, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-2 shadow-sm text-sm whitespace-pre-line">
                          {hora}
                        </div>
                      ))
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- Versión vertical (Móvil) --- */}
          {/* --- Versión vertical (Móvil) --- */}
          <div className="block sm:hidden space-y-4">
            {dias.map((dia) => {
              const horas = obtenerHorariosPorDia(dia, actividadSeleccionada.horarios);
              
              if (!horas || horas.length === 0) return null;

              return (
                <div key={dia} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm">
                  <h2 className="font-semibold text-lg mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                    {dia}
                  </h2>
                  
                  {/* Usamos flex-col y gap-3 para separar las "cajas" */}
                  <div className="flex flex-col gap-3">
                    {horas.map((hora, index) => (
                      <div 
                        key={index} 
                        className="
                          bg-gray-50 dark:bg-gray-800 
                          border border-gray-200 dark:border-gray-700 
                          rounded-md p-3 
                          text-sm text-gray-700 dark:text-gray-300
                          whitespace-pre-line
                          text-center
                        "
                      >
                        {hora}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-20 text-center relative">
            <h2 className="mb-6 relative text-3xl font-bold text-black dark:text-white inline-block px-4 py-1 overflow-hidden">
              <span className="relative z-10">Detalles de la actividad</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 animate-[gradient_5s_linear_infinite] -z-10"></span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-8 h-2 bg-primary relative">
                <div className="absolute right-0 top-0 w-0 h-0 border-t-4 border-t-primary border-l-4 border-l-transparent"></div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-105">
                <TarjetaActividad actividad={actividadSeleccionada} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center mt-8 mb-25 text-gray-500 dark:text-gray-400">
          Selecciona una actividad para ver sus horarios
        </p>
      )}

      <div></div>
    </section>
  );
}