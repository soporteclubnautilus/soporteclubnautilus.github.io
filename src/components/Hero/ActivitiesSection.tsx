import Link from 'next/link';

const ActivitiesSection = () => {
  return (
    <section className="bg-primary"
      
    >
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
          /* PC */
          background-image: url('/images/actividades/general/actividades.webp');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed; 
          
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          filter: blur(1px);
        }

        /* MÓVIL */
        @media only screen and (max-width: 768px) {
          .bg-image {
            background-image: url('/images/actividades/general/actividades_movil.webp') !important;
            background-size: cover !important;
            background-position: center center !important;
            
          }
        }

        @keyframes titilar {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  }
  50% {
    opacity: 0.8; /* Ligeramente transparente */
    transform: scale(1.02); /* Ligeramente más grande */
    box-shadow: 0 0 15px 5px rgba(76, 107, 161, 0.7); /* Efecto de brillo azul */
  }
}

/* Clase para aplicar la animación al botón */
.boton-llamativo {
  animation: titilar 1.5s infinite alternate; /* Aplica la animación cada 1.5s, alternando */
}
      `}} />

        
      <div className="parallax-container [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_80%)] ">
        
        {/* Imagen */}
        <div className="bg-image " />

        {/* Overlay */}
        <div
          style={{
            backgroundColor: 'black',
            opacity: 0.2,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
        />
        

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
          
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            Encontrá tu Pasión
          </h2>
          
          <p style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto 2rem auto', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
            Desde entrenamiento de alto rendimiento hasta recreación familiar. 
            Descubrí todo lo que Club Nautilus tiene preparado para vos.
          </p>

          <Link href="/actividades">
            <button
              className="boton-llamativo "
              style={{
                backgroundColor: 'white',
                color: '#4C6BA1',
                padding: '15px 30px',
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