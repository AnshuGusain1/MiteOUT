import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, DragControls, PresentationControls, Stage } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

import model1Url from '../assets/Part1.gltf?url';
import model2Url from '../assets/Part2.gltf?url';

function Model({ modelUrl, ...props }){
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} {...props} />;
}

export default function ModelViewer({ modelUrl }){
  return (
    <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={.2} polar={[-Math.PI, Math.PI]}>
        <Stage environment="city" intensity={0.1}>
          <Model modelUrl={modelUrl || model1Url} scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}