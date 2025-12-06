import Link from 'next/link';

const ActivitiesSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        
        /* MÁSCARA SOLO ARRIBA */
        /* Empieza transparente, se vuelve visible al 20%, y se queda visible hasta el final (100%) */
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 80%)',
        maskImage: 'linear-gradient(to bottom, transparent 5%, black 15%, black 80%)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .parallax-container {
          position: relative;
          width: 100%;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .bg-image {
          /* PC */
          background-image: url('/images/actividades/general/actividades.png');
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
            background-image: url('/images/actividades/general/actividades_movil.jpg') !important;
            background-size: cover !important;
            background-position: center center !important;
            background-attachment: scroll !important;
          }
        }
      `}} />

      <div className="parallax-container">
        {/* Imagen */}
        <div className="bg-image" />

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
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            Encontrá tu Pasión
          </h2>
          
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem auto', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
            Desde entrenamiento de alto rendimiento hasta recreación familiar. 
            Descubrí todo lo que Club Nautilus tiene preparado para vos.
          </p>

          <Link href="/actividades">
            <button
              style={{
                backgroundColor: 'white',
                color: '#0044cc',
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