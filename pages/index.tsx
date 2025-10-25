// pages/index.js
'use client';

export default function Home() {
  return (
    
    

    <div className="maintenance-page"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        height: "100vh", // Ocupa toda la altura de la pantalla
        backgroundColor: "#ffffff", // Un color de fondo suave
        fontFamily: "Arial, sans-serif", // Una fuente base para la página

        
      }}
    >
      {/* Logo */}
      <img 
        src="/logo.png" // coloca tu logo en public/logo.png
        alt="Logo"
        style={{ width: "100px", height: "auto", marginBottom: "0.5rem" }}
      />

      {/* Texto */}
      <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#6B8FC1" }}>
        ¡Próximamente!
      </div>

      {/* Global CSS para eliminar scroll */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        .vamos{
          display: none !important;
        }
          header, footer {
          display: none !important; /* oculta header y footer en esta página */
        }
      `}</style>
    </div>
    
  );
}
