import Link from "next/link";

const NotFound = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[530px] text-center">
              
              {/* Tarjeta estilo Nautilus */}
              <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11 text-center">
                
                <h2 className="mb-4 text-4xl font-bold text-black dark:text-white sm:text-5xl">
                  404
                </h2>
                
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Error.
                </h3>
                
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Parece que la página que buscas no existe o se ha movido. 
                  Mejor volvamos al inicio.
                </p>

                <Link
                  href="/"
                  className="rounded-md bg-primary px-8 py-3 text-base font-bold text-white shadow-one hover:bg-opacity-90 duration-300 transition ease-in-out"
                >
                  Volver al inicio
                </Link>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Decoración de fondo opcional (si usas SVGs de fondo en otras paginas) */}
      <div className="absolute left-0 top-0 z-[-1] h-full w-full opacity-10">
         {/* Aquí podrías poner un svg de agua si quisieras */}
      </div>
    </section>
  );
};

export default NotFound;