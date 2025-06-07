import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useScroll, useSpring } from '@react-spring/web';
// Import the model as a URL from assets folder
import modelUrl from '../assets/MiteOutModel.gltf?url';

function ExplodingModel() {
  // Use the imported URL
  const gltf = useGLTF(modelUrl);
  console.log(gltf);
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
    <group ref={group}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[100vh]" id="model-section">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <ExplodingModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}