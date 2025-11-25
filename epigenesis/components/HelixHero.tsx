import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';

export const HelixHero: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate DNA Helix points
  const points = useMemo(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const color1 = new THREE.Color('#00FEE9');
    const color2 = new THREE.Color('#D95372');

    for (let i = 0; i < count; i++) {
      const t = (i / count) * 30; // Length of helix
      const i3 = i * 3;
      
      // Double Helix Equation
      const radius = 2;
      // Strand 1
      const x1 = Math.cos(t) * radius;
      const z1 = Math.sin(t) * radius;
      // Strand 2 (Offset by PI)
      const x2 = Math.cos(t + Math.PI) * radius;
      const z2 = Math.sin(t + Math.PI) * radius;

      // Randomly assign particle to strand 1 or 2, with some scattering
      const isStrand1 = Math.random() > 0.5;
      const x = isStrand1 ? x1 : x2;
      const z = isStrand1 ? z1 : z2;
      const y = (t - 15) * 1.5; // Center vertically

      // Add noise ("Disintegration")
      const noise = (Math.random() - 0.5) * 0.5;
      
      positions[i3] = x + noise;
      positions[i3 + 1] = y + noise;
      positions[i3 + 2] = z + noise;

      // Color based on strand
      const c = isStrand1 ? color1 : color2;
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Rotation
      ref.current.rotation.y += 0.002;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

      // "Breathing" effect
      const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.05;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points.positions} colors={points.colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};