import { getActividades } from '@/types/actividades';
import BuscadorActividades from '@/components/Actividades/BuscadorActividades';
import Meta from '@/components/Meta/MetaProps';


export default function ActividadesPage() {
  const actividades = getActividades();
  
  return (
    
    <section className="container mx-auto py-16 px-4">
      <Meta
        title="Nautilus Club ~ Actividades"
        description="Encontrá todas las actividades que brindamos ~ Complejo Nautilus Club - Mar del plata, Buenos Aires, Argentina"  
        />
      <h1
        className="
          mt-16 mb-12 text-center text-5xl sm:text-6xl font-bold"
      >
        Nuestras <span className="bg-gradient-to-r from-[#1b5dcf] to-[#4c6ba1] bg-clip-text text-transparent">Actividades</span>
      </h1>

      <BuscadorActividades actividades={actividades} />
    </section>
  );
}