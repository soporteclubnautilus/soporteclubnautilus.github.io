import { useState, useEffect } from 'react';
import Link from 'next/link';

const ActivitiesSection = () => {
  const [currentImg, setCurrentImg] = useState(0);
  
  const images = [
    '/images/actividades/gimnasio/gimnasio.jpg',
    '/images/actividades/aquagym/aquagym.jpg',
    '/images/actividades/master/master.jpg',
    '/images/actividades/futbol/futbol.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 1500); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-primary">
      <style dangerouslySetInnerHTML={{__html: `
        .parallax-container {
          position: relative;
          width: 100%;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed; /* MANTIENE EL PARALLAX */
          transition: background-image 1s ease-in-out;
          filter: blur(5px);
        }

        /* Capa que hace el efecto de latido oscurecido sin romper el parallax */
        .latido-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-color: black;
          animation: latidoOscuro 1.5s infinite;
        }

        @keyframes latidoOscuro {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.8; } /* Se oscurece al máximo a mitad de la transición */
        }

        

        @keyframes titilar {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 4px 6px rgba(0,0,0,0.2); }
          50% { opacity: 0.8; transform: scale(1.02); box-shadow: 0 0 15px 5px rgba(76, 107, 161, 0.7); }
        }

        .boton-llamativo {
          animation: titilar 1.5s infinite alternate;
        }
      `}} />

      <div className="parallax-container [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_80%)]">
        
        {/* Fondo con Parallax */}
        <div 
          className="bg-image" 
          style={{ backgroundImage: `url(${images[currentImg]})` }}
        />

        {/* El "Latido" ahora es una capa negra que cambia de opacidad */}
        <div className="latido-overlay" />

        {/* Contenido */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            color: 'white',
            padding: '20px'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            Encontrá tu Pasión
          </h2>
          
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
            Desde entrenamiento de alto rendimiento hasta recreación familiar. 
            Descubrí todo lo que Nautilus Club tiene preparado para vos.
          </p>

          <Link href="/actividades">
            <button
              className="boton-llamativo"
              style={{
                backgroundColor: 'white',
                color: '#4C6BA1',
                padding: '15px 35px',
                fontWeight: 'bold',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s ease'
              }}
            >
              Explorar Actividades
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;