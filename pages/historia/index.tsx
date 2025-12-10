'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Meta from '@/components/Meta/MetaProps';

interface Checkpoint {
  fecha: string;
  titulo: string;
  descripcion: string;
  img?: string;
}

const checkpoints: Checkpoint[] = [
  { fecha: 'Septiembre 1997', titulo: 'Inauguración del club', descripcion: 'con la finalidad de acompañar el desarrollo integral de las familias marplatenses en ámbitos deportivos' },
  { fecha: '2010', titulo: 'Inicio colonia de vacaciones', descripcion: 'Primera edición de la colonia de vacaciones en Nautilus' },
  { fecha: '2010', titulo: 'Ampliación', descripcion: 'Nuevas canchas y gimnasio.', img: '/logo.png' },
  { fecha: '2016', titulo: 'Inicio escuela de fútbol',descripcion: '' },
  { fecha: '2018', titulo: 'Reapertura gimnasio',descripcion: '' },
  { fecha: '2024', titulo: 'Modernización de espacios', descripcion: '', img: '/images/historia4.jpg' },
];

export default function HistoriaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Línea animada con scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const start = rect.top + scrollTop;
      const maxHeight = rect.height;

      const newHeight = Math.min(
        Math.max(scrollTop + window.innerHeight / 2 - start, 0),
        maxHeight
      );

      setLineHeight(newHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-whites  pt-20 mb-24">
      <Meta
        title="Historia - Nautilus Club"
        description="Recorré la historia de Nautilus Club a través de nuestro timeline interactivo."
      />

      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl text-gray-900 dark:text-white font-bold">
          Nuestra <span className="bg-gradient-to-r from-[#1b5dcf] to-[#4c6ba1] bg-clip-text text-transparent">Historia</span>
        </h1>
    


        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Descubrí los hitos más importantes de nuestro club desde sus inicios hasta hoy.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative py-4 px-4 md:px-20" ref={containerRef}>
        {/* Línea */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300">
          <motion.div
            className="absolute left-0 w-full bg-primary origin-top"
            style={{ height: lineHeight }}
            initial={{ height: 0 }}
            animate={{ height: lineHeight }}
            transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          />
        </div>

        {/* Checkpoints */}
        <div className="flex flex-col space-y-24 relative">
          {checkpoints.map((cp, idx) => (
            <CheckpointItem key={idx} cp={cp} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            COMPONENTE CORREGIDO                             */
/* -------------------------------------------------------------------------- */

function CheckpointItem({ cp, idx }: { cp: Checkpoint; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-100px', once: true });
  const controls = useAnimation();
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    controls.start({
      scale: inView ? 1.05 : 1,
      opacity: inView ? 1 : 0.6,
      transition: { duration: 0.4 },
    });
  }, [inView]);

  const isLeft = idx % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ scale: 1, opacity: 0.6 }}
      className={
        `relative flex flex-col md:flex-row items-center md:justify-` +
        (isLeft ? 'start' : 'end')
      }
    >
      {/* Punto en la línea */}
      <div className="absolute left-1 md:left-1/2 top-1/2 -translate-y-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full z-20" />

      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md w-[90%] md:w-5/12 ml-8 md:ml-0">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{cp.fecha}</p>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{cp.titulo}</h3>
        <p className="text-gray-700 dark:text-gray-300">{cp.descripcion}</p>

        {cp.img && !imgError && (
          <img
            src={cp.img}
            alt={cp.titulo}
            className="mt-3 w-full h-48 object-contain rounded-lg"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </motion.div>
  );
}
