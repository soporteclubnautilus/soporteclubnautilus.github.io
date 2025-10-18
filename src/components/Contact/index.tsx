"use client";
import NewsLatterBox from "./NewsLatterBox";
import { useState } from "react";
const Contact = () => {
  
  

  // 3. Creamos "estados" para guardar lo que el usuario escribe
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  // 4. Esta es la función que se llamará al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue

    const textoCompleto = `Hola, mi nombre es ${nombre}. Escribo una consulta desde la web: ${mensaje}`;
    const textoCodificado = encodeURIComponent(textoCompleto);
    const numeroWhatsApp = "5492235028755"; // Tu número aquí

    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    // Abre la URL de WhatsApp en una nueva pestaña
    setNombre("");
    setMensaje("");
    window.open(url, "_blank");
  };
  

  
  
  
  
  
  
  
  
  
  
  
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contáctanos
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Completa el formulario para contactarnos por WhatsApp.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Ingresa tu mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit"
                      className="
                        flex items-center justify-center gap-3
                        rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {/* 1. Pega el SVG directamente aquí */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>

                      {/* 2. Agrega tu texto */}
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
  
  {/* 2. Columna de la Tarjeta de Información */}
  <div className=" w-full bg-white p-8 dark:bg-gray-800 lg:w-1/4 m-4 rounded-xl">
    <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
      Ubicación
    </h2>
    <p className="text-base font-medium text-body-color dark:text-gray-300">
      Av. Champagnat 2124,
      <br />
      Mar del Plata, Provincia de Buenos Aires
    </p>
    
    {/* Puedes agregar más información aquí, como horarios */}
    <div className="mt-8">
        <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">Horarios</h3>
        <p className="text-base text-body-color dark:text-gray-300">
            Lunes a Viernes: 7:00 - 22:00
            <br />
            Sábados: 9:00 - 13:00
        </p>
    </div>
  </div>

  {/* 3. Columna del Mapa */}
  <div className="w-full lg:w-2/3 ">
    <iframe
      src="https://maps.google.com/maps?q=Av.%20Champagnat%202124,%20Mar%20del%20Plata&t=&z=15&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0, minHeight: '400px' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

</div>
    </section>
  );
};

export default Contact;
