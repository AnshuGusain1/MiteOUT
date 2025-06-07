import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useScroll, useSpring } from '@react-spring/web';
// Import the model as a URL from assets folder
import modelUrl from '../assets/MiteOutModel.gltf?url';

function ExplodingModel() {
  // Use the imported URL
  const gltf = useGLTF(modelUrl);
  const group = useRef();
  const { scrollYProgress } = useScroll();

  useFrame(() => {
    if (!group.current) return;

    const t = scrollYProgress.get(); // Range: 0 to 1
    
    // Add safety checks for node existence
    if (gltf.nodes.Part1) gltf.nodes.Part1.position.x = t * 2;
    if (gltf.nodes.Part2) gltf.nodes.Part2.position.y = -t * 2;
    if (gltf.nodes.Part3) gltf.nodes.Part3.position.z = t * 2;
    // Add more parts based on your model

  });

  return (
    <group ref={group} rotation={[-Math.PI / 6, Math.PI / 4, 0]} position={[0, -0.5, 0]} scale={[3.5, 3.5, 3.5]}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-full" id="model-section">
      <Canvas camera={{ position: [0, 0, 3], fov: 30}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <ExplodingModel />
        <OrbitControls target={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}