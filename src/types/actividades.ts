import fs from 'fs';
import path from 'path';
import actividadesMeta from '@/app/data/actividades.json';

// Definimos el tipo de dato para una actividad completa
export type Actividad = {
  slug: string;
  titulo: string;
  descripcionBreve: string;
  foto: string;
  dias: string;
  content: string; // Contenido del Markdown
};

// Función para obtener todas las actividades combinadas
export function getActividades(): Actividad[] {
  const actividadesCompletas = actividadesMeta.map(actividad => {
    const filePath = path.join(process.cwd(), 'src', 'app', '(main)', 'actividades', `${actividad.slug}.md`);
    console.log(`bUSCANDO EN : ${filePath}`);
    let content = '';
    try {
      content = fs.readFileSync(filePath, 'utf8');
    } catch (e) {
      console.log(`No se encontró el archivo para el slug: ${actividad.slug}`);
    }

    return {
      ...actividad,
      content,
    };
  });

  return actividadesCompletas;
}