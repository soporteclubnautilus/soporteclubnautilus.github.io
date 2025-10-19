// scripts/generateActividadesJson.js
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'src', 'app', 'data', 'actividades.json');
const mdFolder = path.join(__dirname, '..', 'src', 'app', '(main)', 'actividades');

const actividadesMeta = require('../src/app/data/actividades.json'); // metadata básica

const actividadesCompletas = actividadesMeta.map(actividad => {
  const filePath = path.join(mdFolder, `${actividad.slug}.md`);
  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.warn(`⚠ No se encontró el archivo ${actividad.slug}.md`);
  }

  return {
    ...actividad,
    content,
  };
});

// Crear carpeta si no existe
fs.mkdirSync(path.dirname(dataPath), { recursive: true });

// Guardar JSON final
fs.writeFileSync(dataPath, JSON.stringify(actividadesCompletas, null, 2), 'utf8');

console.log('✅ actividades.json generado correctamente');
