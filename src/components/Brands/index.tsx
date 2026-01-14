import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {/* INICIO: Bloque de encabezado moderno */}
            <h2 className="mb-8 text-center text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[40px]">
              Confían en nosotros:
            </h2>
            {/* FIN: Bloque de encabezado moderno */}

            {/* Este es el bloque de color que contiene los logos */}
            <div className="flex flex-wrap items-center justify-center rounded-xl bg-primary/50 px-8 py-8 shadow-lg dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-25 w-full opacity-80 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        {imageLight && (
          <Image
            src={imageLight}
            alt={name}
            fill
            className="hidden object-contain dark:block"
          />
        )}
        <Image src={image} alt={name} fill className="block object-contain dark:hidden" />
      </a>
    </div>
  );
};
