import Contact from "@/components/Contact";
import Meta from '@/components/Meta/MetaProps';


const ContactPage = () => {
  
  return (
    <>
      <Meta
          title="Nautilus Club ~ Contacto"
          description="Complejo Nautilus Club - Mar del plata, Buenos Aires, Argentina - Conocé las formas de contactarnos - seguínos por redes sociales"  
          />
      <h1 className="
          mt-30 mb-6 text-center text-5xl sm:text-6xl font-bold
          bg-gradient-to-r from-[#1b5dcf] to-[#4c6ba1]
          bg-clip-text text-transparent
        ">Contacto</h1>

      <Contact />
    </>
  );
};

export default ContactPage;
