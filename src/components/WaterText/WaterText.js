'use client';

import * as THREE from 'three';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

// === SHADERS ===
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform sampler2D uNormalMap;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec2 move = vec2(uTime * 0.01, uTime * 0.015);
    vec3 normalTex = texture2D(uNormalMap, uv + move).rgb;
    normalTex = normalTex * 2.0 - 1.0;
    vec2 distortedUv = uv + normalTex.xy * 0.02;
    vec3 base = texture2D(uTexture, distortedUv).rgb;
    float fresnel = pow(1.0 - dot(normalize(vec3(0.0,0.0,1.0)), normalize(normalTex)), 3.0);
    vec3 color = base + fresnel * 0.4;
    gl_FragColor = vec4(color, 1.0);
  }
`;


const scrollToSection = () => {
  const section = document.getElementById('actividades');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

// === COMPONENTE SUPERFICIE DE AGUA ===
function WaterSurface() {
  const mesh = useRef();

  const texture = useMemo(() => new THREE.TextureLoader().load('/images/hero/fondo.webp'), []);
  const normalMap = useMemo(() => new THREE.TextureLoader().load('/images/hero/waternormals.webp'), []);

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uNormalMap: { value: normalMap },
      uTime: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} position={[0, 0, -2]}>
      <planeGeometry args={[20, 20, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

// === COMPONENTE PRINCIPAL ===
export default function WaterTextRipple() {
  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden"
      style={{
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, black 20%, black 90%, transparent 100%)',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskImage:
          'linear-gradient(to bottom, transparent 0%, black 20%, black 90%, transparent 100%)',
        maskRepeat: 'no-repeat',
        maskSize: '100% 100%',
      }}
    >
      
      {/* Canvas del fondo animado */}
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 5, 3]} intensity={1.2} />
        <WaterSurface />
      </Canvas>
      
      {/* Texto centrado sobre la escena */}
      <div className="absolute inset-0 flex flex-col justify-center items-center select-none">
        <h1 className="text-[5rem] md:text-[10rem] lg:text-[15rem] text-[#ffffff] font-bold leading-none tracking-tight">
          Nautilus
        </h1>
        <h2 className="text-[3rem] md:text-[5rem] lg:text-[8rem] text-[#00006] font-medium leading-none">
          club
        </h2>
        <button onClick={scrollToSection} className="mt-8 px-6 py-3 bg-[#6b8fc1] text-white font-semibold rounded-lg shadow-lg hover:bg-[#b0e0ff] hover:text-black transition-colors">
          Ver Actividades
        </button>
      </div>
      








    </div>
  );
}
