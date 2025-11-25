import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, Stars, Float, PerspectiveCamera, Line } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom, Noise, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { THEME } from '../types';

// --- Sub-components for Scenes ---

const Nebula = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const r = (Math.random() - 0.5) * 10;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Gradient from Violet to Blue
      const color = new THREE.Color(THEME.violetBlue);
      if (Math.random() > 0.5) color.set(THEME.cyan);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    const t = clock.getElapsedTime() * 0.1;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t;
      pointsRef.current.rotation.z = t * 0.5;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.positions.length / 3} array={particles.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particles.colors.length / 3} array={particles.colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.8} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
};

const Lattice = ({ opacity }: { opacity: number }) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (opacity <= 0) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    groupRef.current.rotation.y = Math.cos(t * 0.1) * 0.2;
  });

  const lines = useMemo(() => {
    const segments = [];
    const size = 10;
    const divisions = 10;
    const step = size / divisions;
    for (let i = -divisions / 2; i <= divisions / 2; i++) {
        // Horizontal
        segments.push(new THREE.Vector3(-size / 2, i * step, 0));
        segments.push(new THREE.Vector3(size / 2, i * step, 0));
        // Vertical
        segments.push(new THREE.Vector3(i * step, -size / 2, 0));
        segments.push(new THREE.Vector3(i * step, size / 2, 0));
    }
    return segments;
  }, []);

  return (
    <group ref={groupRef} position={[5, -10, -5]} visible={opacity > 0.1}>
      <mesh>
         <icosahedronGeometry args={[2, 1]} />
         <meshBasicMaterial wireframe color={THEME.cyan} transparent opacity={opacity * 0.3} />
      </mesh>
       {/* Active Nodes */}
       <mesh position={[1.5, 1, 0]}>
         <sphereGeometry args={[0.1, 16, 16]} />
         <meshBasicMaterial color={THEME.plasmaOrange} transparent opacity={opacity} />
       </mesh>
       <mesh position={[-1.5, -0.5, 0.5]}>
         <sphereGeometry args={[0.1, 16, 16]} />
         <meshBasicMaterial color={THEME.plasmaRed} transparent opacity={opacity} />
       </mesh>
    </group>
  );
};

const Vortex = ({ active }: { active: boolean }) => {
  const count = 1000;
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  useFrame((state) => {
    if (!active) return;
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const zOffset = (i / count) * 40; // Depth of tunnel
      const angle = i * 0.5 + t * 0.5;
      const radius = 3 + Math.sin(i * 0.1 + t) * 1;
      
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = -20 - zOffset + (t * 5) % 40; // Moving tunnel effect

      dummy.position.set(x, y, z);
      dummy.rotation.z = angle;
      dummy.scale.setScalar(Math.random() * 0.05 + 0.01);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} visible={active}>
      <tetrahedronGeometry />
      <meshBasicMaterial color={THEME.white} transparent opacity={0.4} blending={THREE.AdditiveBlending} />
    </instancedMesh>
  );
};

const NeuralNet = ({ active }: { active: boolean }) => {
    const group = useRef<THREE.Group>(null!);

    useFrame((state) => {
        if(!active) return;
        group.current.rotation.y += 0.002;
    })

    const points = useMemo(() => {
        const pts = [];
        for(let i=0; i<50; i++) {
            pts.push(
                new THREE.Vector3(
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                )
            )
        }
        return pts;
    }, []);

    return (
        <group ref={group} position={[0, -60, -20]} visible={active}>
            {points.map((pt, i) => (
                <mesh key={i} position={pt}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshBasicMaterial color={Math.random() > 0.8 ? THEME.cyan : THEME.violetBlue} />
                </mesh>
            ))}
             {/* Simple connections demo - creating lines between random points would be heavy, simulating with a few static lines */}
             <Line points={[points[0], points[1], points[5], points[10]]} color={THEME.plasmaRed} lineWidth={1} transparent opacity={0.5} />
             <Line points={[points[10], points[20], points[30]]} color={THEME.plasmaOrange} lineWidth={1} transparent opacity={0.5} />
        </group>
    )
}

const Horizon = ({ active }: { active: boolean }) => {
    const mesh = useRef<THREE.Mesh>(null!);
    
    useFrame((state) => {
        if(!active) return;
        mesh.current.position.z = -80 + (state.clock.getElapsedTime() % 10); // Infinite scroll effect
    })

    return (
        <group position={[0, -15, -100]} visible={active}>
            <mesh rotation={[-Math.PI / 2, 0, 0]} ref={mesh}>
                <planeGeometry args={[100, 100, 40, 40]} />
                <meshBasicMaterial wireframe color={THEME.violetBlue} transparent opacity={0.15} />
            </mesh>
            {/* Future Cities */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[-10, 5, -20]}>
                    <coneGeometry args={[1, 4, 4]} />
                    <meshBasicMaterial color={THEME.cyan} wireframe transparent opacity={0.3} />
                </mesh>
            </Float>
             <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[10, 8, -30]}>
                    <boxGeometry args={[2, 4, 2]} />
                    <meshBasicMaterial color={THEME.cyan} wireframe transparent opacity={0.2} />
                </mesh>
            </Float>
        </group>
    )
}

// --- Main Experience Component ---

export const Experience: React.FC = () => {
  const scroll = useScroll();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);
  const sceneGroup = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const r1 = scroll.range(0, 1/6); // Hero
    const r2 = scroll.range(1/6, 1/6); // Modalities
    const r3 = scroll.range(2/6, 1/6); // Vortex
    const r4 = scroll.range(3/6, 1/6); // Neural
    const r5 = scroll.range(4/6, 1/6); // Horizon
    const r6 = scroll.range(5/6, 1/6); // Contact

    // Global Camera Movement "Traversing the timeline"
    // We map scroll offset (0 to 1) to Z position
    // 0 -> Z=5 (Hero)
    // 1 -> Z=-120 (End)
    const targetZ = 5 - (scroll.offset * 120);
    const targetY = -scroll.offset * 20; // Slight downward drift

    // Smooth camera lerp
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.1);

    // Dynamic rotation based on section
    if (scroll.visible(1/6, 1/6)) {
         // Twist for Modalities
         state.camera.rotation.z = THREE.MathUtils.lerp(state.camera.rotation.z, -0.2, 0.05);
    } else if (scroll.visible(2/6, 1/6)) {
         // Spin for Vortex
         state.camera.rotation.z = THREE.MathUtils.lerp(state.camera.rotation.z, state.clock.getElapsedTime() * 0.2, 0.05);
    } else {
        // Reset
        state.camera.rotation.z = THREE.MathUtils.lerp(state.camera.rotation.z, 0, 0.05);
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} ref={cameraRef} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} color={THEME.violetBlue} />
      <pointLight position={[10, 10, 10]} intensity={1} color={THEME.cyan} />
      <pointLight position={[-10, -10, -10]} intensity={2} color={THEME.plasmaRed} />

      <group ref={sceneGroup}>
        {/* Section 1: Hero */}
        <group position={[0, 0, 0]}>
          <Nebula />
        </group>

        {/* Section 2: Modalities (Placed deeper) */}
        <group position={[0, -5, -20]}>
           <Lattice opacity={1} />
        </group>

        {/* Section 3: Vortex (Tunnel) */}
        <group position={[0, -10, -25]}>
            <Vortex active={true} />
        </group>

         {/* Section 4: Neural */}
        <group position={[0, 0, 0]}> 
            {/* The neural net component handles its own positioning deeper in Z */}
            <NeuralNet active={true} />
        </group>

        {/* Section 5: Horizon */}
         <group position={[0, 0, 0]}>
            <Horizon active={true} />
         </group>

        {/* Section 6: Contact Gravity Well */}
        <group position={[0, -20, -120]}>
            <mesh>
                <sphereGeometry args={[2, 32, 32]} />
                <meshBasicMaterial color="#000" />
            </mesh>
            <mesh>
                 <ringGeometry args={[2.2, 2.5, 64]} />
                 <meshBasicMaterial color={THEME.cyan} side={THREE.DoubleSide} transparent opacity={0.8} />
            </mesh>
        </group>

      </group>

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} radius={0.6} />
        <ChromaticAberration offset={[0.002, 0.002]} blendFunction={BlendFunction.NORMAL} />
        <Noise opacity={0.05} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
};