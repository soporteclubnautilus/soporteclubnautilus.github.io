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
  { fecha: 'Enero 2000', titulo: 'Inicio del club', descripcion: 'Se funda el club.' },
  { fecha: '2005', titulo: 'Primer torneo', descripcion: 'Primer torneo local.', img: '/images/historia2.jpg' },
  { fecha: '2010', titulo: 'Ampliación', descripcion: 'Nuevas canchas y gimnasio.', img: '/logo.png' },
  { fecha: '2020', titulo: 'Club moderno', descripcion: 'Eventos y espacios recreativos.', img: '/images/historia4.jpg' },
];

export default function HistoriaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [imgErrors, setImgErrors] = useState<boolean[]>(Array(checkpoints.length).fill(false));

  // Scroll para animar línea
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const start = rect.top + scrollTop;
      const maxHeight = rect.height;
      const newHeight = Math.min(Math.max(scrollTop + window.innerHeight / 2 - start, 0), maxHeight);
      setLineHeight(newHeight);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animación checkpoints
  const controlsArray = checkpoints.map(() => useAnimation());
  const inViewRefs = checkpoints.map(() => useRef<HTMLDivElement>(null));
  const inViewFlags = inViewRefs.map(ref => useInView(ref, { margin: '-100px', once: true }));

  useEffect(() => {
    inViewFlags.forEach((flag, i) => {
      if (flag) controlsArray[i].start({ scale: 1.05, opacity: 1 });
      else controlsArray[i].start({ scale: 1, opacity: 0.6 });
    });
  }, [inViewFlags.map(f => f)]);

  const handleImgError = (idx: number) => {
    const newErrors = [...imgErrors];
    newErrors[idx] = true;
    setImgErrors(newErrors);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 mt-24 mb-24">
      <Meta
        title="Historia - Nautilus Club"
        description="Recorré la historia de Nautilus Club a través de nuestro timeline interactivo."
      />

      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Nuestra Historia
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Descubrí los hitos más importantes de nuestro club desde sus inicios hasta hoy.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative py-24 px-4 md:px-20" ref={containerRef}>
        {/* Línea vertical */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300">
          <motion.div
            className="absolute left-0 w-full bg-blue-500 origin-top"
            style={{ height: lineHeight }}
            initial={{ height: 0 }}
            animate={{ height: lineHeight }}
            transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          />
        </div>

        {/* Checkpoints */}
        <div className="flex flex-col space-y-24 relative">
          {checkpoints.map((cp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                ref={inViewRefs[idx]}
                animate={controlsArray[idx]}
                initial={{ scale: 1, opacity: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center justify-${isLeft ? 'start' : 'end'}`}
              >
                {/* Punto en la línea */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-20" />

                <div
                  className={`bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md w-full md:w-5/12`}
                  style={{
                    marginLeft: isLeft ? '2rem' : 0,
                    marginRight: isLeft ? 0 : '2rem',
                  }}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{cp.fecha}</p>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{cp.titulo}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{cp.descripcion}</p>

                  {cp.img && !imgErrors[idx] && (
                    <img
                      src={cp.img}
                      alt={cp.titulo}
                      className="mt-3 w-full h-48 object-contain rounded-lg"
                      onError={() => handleImgError(idx)}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      
    </div>
  );
}
