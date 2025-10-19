import actividadesMeta from 'src/app/data/actividades.json';

// Usamos directamente la estructura del JSON generado
export type Actividad = typeof actividadesMeta[number];

// Devuelve todas las actividades con su contenido Markdown ya incluido en el JSON
export function getActividades(): Actividad[] {
  return actividadesMeta;
}

// Función de ayuda para obtener una actividad por slug
export function getActividad(slug: string): Actividad | undefined {
  return getActividades().find(act => act.slug === slug);
}



