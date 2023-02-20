'use client';

import { OrbitControls, useAspect, Effects, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';

const canvasStyle: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
};

function Scene() {
  const size = useAspect(1800, 1000);
  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.src = 'https://media.failwell.be/animated/red.mp4';
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.playbackRate = 0.5;
    vid.muted = true;
    return vid;
  });
  // Keep in mind videos can only play once the user has interacted with the site ...
  useEffect(() => void video.play(), [video]);
  /*
  return (
    <group>
      <mesh scale={size} rotation={[0, 0, 0]} position={[0, 0, 1.1]}>
        <planeGeometry args={[3.2, 1.9]} />

        <meshStandardMaterial emissive={new Color('white')} side={DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  ); */

  return (
    <group>
      <Text
        // ref={ref}
        fontSize={28}
        maxWidth={300}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'left'}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        fillOpacity={1}
        strokeWidth={'2.5%'}
        strokeColor="#000000"
      >
        Parfois j'envenime le présent par une présence trop contrôlée, avec la
        torpeur d'un object inanimé. \n (Par seulement une aide précipitée, elle
        lave l'assombrissement flêtri d'un souvenir ancien.) C'est là, à cet
        endroit précis, suspendu entre deux cîmes d'arbres que la couleur prends
        forme conique, sphérique, scénique. Puis un autre jour, différenciation
        par le sourire d'un soleil levant. Il y a un souffle divin caché entre
        les lignes du destin en courbe et prolongations, le décor enseveli,
        redécoré en quadrillages symétriques semble se courber afin de former un
        lit de rivière Elle emprunte, l'eau, les dessins fermentés d'un angle
        contrarié. Au sommet d'un souterrain. Transfiguration déraisonnée de
        sagesse aux accents de tendresse délibérée. Dé-libérée, aimante, amante.
        Profondeur de cette nuit Ici et maintenant, Un réveil
      </Text>

      <mesh scale={size}>
        <planeBufferGeometry args={[1, 1]} />

        <meshBasicMaterial>
          <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}

export default function VideoRoute() {
  return (
    <>
      <Canvas
        style={canvasStyle}
        orthographic
        camera={{ position: [0, 0, 100] }}
      >
        {/*
        <Effects>
          <bloomPass attachArray="passes" />
          <glitchPass attachArray="passes" />
        </Effects>
      */}
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
        <directionalLight intensity={0.05} />
        <pointLight intensity={0.2} color="blue" />
        <Scene />
      </Canvas>
    </>
  );
}
