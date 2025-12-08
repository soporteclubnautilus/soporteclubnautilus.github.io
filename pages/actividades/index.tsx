import { getActividades } from '@/types/actividades';
import BuscadorActividades from '@/components/Actividades/BuscadorActividades';

export default function ActividadesPage() {
  const actividades = getActividades();

  return (
    <section className="container mx-auto py-16 px-4">
      
      <h1
        className="
          mt-16 mb-12 text-center text-5xl sm:text-6xl font-bold
          bg-gradient-to-r from-[#1b5dcf] to-[#4c6ba1]
          bg-clip-text text-transparent
        "
      >
        Nuestras Actividades
      </h1>


      <BuscadorActividades actividades={actividades} />
    </section>
  );
}