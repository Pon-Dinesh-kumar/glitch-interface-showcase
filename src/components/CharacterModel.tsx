
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import { Mesh, Group } from 'three';

function ModelViewer({ rotation = true }: { rotation?: boolean }) {
  // We'll use a placeholder mesh since we don't have an actual model
  const mesh = useRef<Mesh>(null!);
  const group = useRef<Group>(null!);
  
  useFrame((state) => {
    if (rotation && group.current) {
      group.current.rotation.y += 0.001;
    }
  });
  
  return (
    <group ref={group}>
      {/* Placeholder for the character model */}
      <mesh ref={mesh} position={[0, 0, 0]}>
        <capsuleGeometry args={[1, 2, 4, 8]} />
        <meshStandardMaterial color="#9b87f5" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#9b87f5" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Arms */}
      <mesh position={[0.8, 0, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <capsuleGeometry args={[0.2, 2, 4, 8]} />
        <meshStandardMaterial color="#1EAEDB" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 8]}>
        <capsuleGeometry args={[0.2, 2, 4, 8]} />
        <meshStandardMaterial color="#1EAEDB" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[0.4, -2, 0]}>
        <capsuleGeometry args={[0.25, 2, 4, 8]} />
        <meshStandardMaterial color="#14D566" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.4, -2, 0]}>
        <capsuleGeometry args={[0.25, 2, 4, 8]} />
        <meshStandardMaterial color="#14D566" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Cybernetic enhancements */}
      <mesh position={[0, 0.5, 0.6]}>
        <boxGeometry args={[1.6, 0.2, 0.1]} />
        <meshStandardMaterial color="#00FFFC" emissive="#00FFFC" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.6]}>
        <boxGeometry args={[1.2, 0.2, 0.1]} />
        <meshStandardMaterial color="#00FFFC" emissive="#00FFFC" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export function CharacterModel() {
  return (
    <div className="h-full w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={40} />
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={1} />
        <ModelViewer />
        <Environment preset="night" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
