import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ProfileType } from '../types';

interface Props {
  activeProfile: ProfileType;
}

export const MolecularProfile: React.FC<Props> = ({ activeProfile }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 1000;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Target positions for different shapes
  const shapes = useMemo(() => {
    const sphere = [];
    const cube = [];
    const torus = [];

    for (let i = 0; i < count; i++) {
      // Sphere (Longevity)
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 4;
      sphere.push(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );

      // Cube (Resilience - Dense)
      const s = 3;
      cube.push(
        (Math.random() - 0.5) * s * 2,
        (Math.random() - 0.5) * s * 2,
        (Math.random() - 0.5) * s * 2
      );

      // Torus (Performance - Active)
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const R = 3.5;
      const tube = 1.2;
      torus.push(
        (R + tube * Math.cos(v)) * Math.cos(u),
        (R + tube * Math.cos(v)) * Math.sin(u),
        tube * Math.sin(v)
      );
    }
    return { [ProfileType.LONGEVITY]: sphere, [ProfileType.RESILIENCE]: cube, [ProfileType.PERFORMANCE]: torus };
  }, []);

  // Current particles state
  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for(let i=0; i<count*3; i++) pos[i] = (Math.random()-0.5) * 10;
    return pos;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const target = shapes[activeProfile];
    const speed = 0.05; // Lerp speed

    let idx = 0;
    for (let i = 0; i < count; i++) {
      // Lerp current position to target
      particles[idx] += (target[idx] - particles[idx]) * speed;
      particles[idx+1] += (target[idx+1] - particles[idx+1]) * speed;
      particles[idx+2] += (target[idx+2] - particles[idx+2]) * speed;

      // Add some "life" movement
      const time = state.clock.elapsedTime;
      const noise = Math.sin(time + i) * 0.02;

      dummy.position.set(
        particles[idx] + noise,
        particles[idx+1] + noise,
        particles[idx+2] + noise
      );
      
      // Dynamic rotation based on profile
      if (activeProfile === ProfileType.PERFORMANCE) {
         dummy.rotation.set(time * 0.5, time * 0.5, 0);
      } else {
         dummy.rotation.set(0, 0, 0);
      }

      dummy.scale.setScalar(0.15); // Particle size
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      
      idx += 3;
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial 
        color={activeProfile === ProfileType.RESILIENCE ? "#D95372" : "#00FEE9"} 
        emissive={activeProfile === ProfileType.RESILIENCE ? "#D95372" : "#00FEE9"}
        emissiveIntensity={0.8}
        roughness={0.1}
        metalness={0.9}
      />
    </instancedMesh>
  );
};