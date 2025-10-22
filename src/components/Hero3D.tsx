import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Torus, Box, Cylinder, Cone, Octahedron, Dodecahedron, MeshTransmissionMaterial, Line, RoundedBox } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const ProdisynCore = ({ scrollProgress }: { scrollProgress: number }) => {
  const coreRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.002;
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (ringRef.current && scrollProgress > 0.15) {
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      ringRef.current.rotation.z += 0.004;
    }
    if (ring2Ref.current && scrollProgress > 0.15) {
      ring2Ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.15;
      ring2Ref.current.rotation.z -= 0.003;
    }
  });

  const pulseScale = 1 + Math.sin(scrollProgress * Math.PI * 4) * 0.04;

  return (
    <group ref={coreRef}>
      <Sphere args={[1.2, 64, 64]} scale={pulseScale}>
        <MeshTransmissionMaterial
          transmission={0.98}
          thickness={0.3}
          roughness={0.02}
          chromaticAberration={0.03}
          anisotropy={1}
          color="#ffffff"
          ior={1.5}
        />
      </Sphere>

      <Sphere args={[0.9, 48, 48]} scale={pulseScale}>
        <meshStandardMaterial
          color="#e5e7eb"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={1.5}
        />
      </Sphere>

      {scrollProgress > 0.15 && (
        <>
          <Torus
            ref={ringRef}
            args={[2.2, 0.06, 32, 100]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <meshStandardMaterial
              color="#9ca3af"
              metalness={0.9}
              roughness={0.1}
            />
          </Torus>

          <Torus
            ref={ring2Ref}
            args={[2.6, 0.05, 32, 100]}
            rotation={[Math.PI / 3, 0, Math.PI / 4]}
          >
            <meshStandardMaterial
              color="#d1d5db"
              metalness={0.85}
              roughness={0.15}
            />
          </Torus>
        </>
      )}
    </group>
  );
};

const FloatingParticles = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  if (scrollProgress > 0.15) return null;

  const particles = Array.from({ length: 30 }, (_, i) => {
    const angle = (i / 30) * Math.PI * 2;
    const radius = 5 + Math.random() * 3;
    const height = (Math.random() - 0.5) * 4;
    return {
      position: [
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      ] as [number, number, number],
      scale: 0.05 + Math.random() * 0.1,
    };
  });

  const progress = Math.min(scrollProgress * 8, 1);

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <Sphere
          key={i}
          args={[particle.scale, 16, 16]}
          position={particle.position}
        >
          <meshStandardMaterial
            color="#9ca3af"
            metalness={0.8}
            roughness={0.2}
            opacity={1 - progress}
            transparent
          />
        </Sphere>
      ))}
    </group>
  );
};

const OrbitingProducts = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  if (scrollProgress < 0.35) return null;

  const productProgress = Math.min((scrollProgress - 0.35) * 3, 1);
  const orbitRadius = 4;

  return (
    <group ref={groupRef}>
      <group position={[orbitRadius, 0, 0]} scale={productProgress}>
        <RoundedBox args={[0.7, 0.12, 0.7]} radius={0.02}>
          <meshStandardMaterial color="#4b5563" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        <RoundedBox args={[0.5, 0.18, 0.5]} position={[0, 0.12, 0]} radius={0.02}>
          <meshStandardMaterial color="#6b7280" metalness={0.85} roughness={0.15} />
        </RoundedBox>
      </group>

      <group position={[orbitRadius * Math.cos(Math.PI * 0.66), orbitRadius * Math.sin(Math.PI * 0.66), 0]} scale={productProgress}>
        <Cylinder args={[0.4, 0.4, 0.8, 32]}>
          <meshStandardMaterial color="#9ca3af" metalness={0.85} roughness={0.2} />
        </Cylinder>
        <Sphere args={[0.2, 20, 20]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#d1d5db" metalness={0.9} roughness={0.1} />
        </Sphere>
      </group>

      <group position={[orbitRadius * Math.cos(Math.PI * 1.33), orbitRadius * Math.sin(Math.PI * 1.33), 0]} scale={productProgress}>
        <Octahedron args={[0.5]}>
          <meshStandardMaterial color="#e5e7eb" metalness={0.9} roughness={0.15} wireframe />
        </Octahedron>
      </group>

      <group position={[-orbitRadius, 0, 0]} scale={productProgress}>
        <Dodecahedron args={[0.45]}>
          <meshStandardMaterial color="#6b7280" metalness={0.85} roughness={0.2} />
        </Dodecahedron>
      </group>

      <group position={[orbitRadius * Math.cos(Math.PI * 0.33), orbitRadius * Math.sin(Math.PI * 0.33), 0]} scale={productProgress}>
        <Cone args={[0.35, 0.7, 32]}>
          <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.25} />
        </Cone>
      </group>

      <group position={[orbitRadius * Math.cos(Math.PI * 1.66), orbitRadius * Math.sin(Math.PI * 1.66), 0]} scale={productProgress}>
        <Torus args={[0.4, 0.15, 16, 32]}>
          <meshStandardMaterial color="#d1d5db" metalness={0.9} roughness={0.1} />
        </Torus>
      </group>
    </group>
  );
};

const ConnectionNetwork = ({ scrollProgress }: { scrollProgress: number }) => {
  if (scrollProgress < 0.65) return null;

  const lineProgress = Math.min((scrollProgress - 0.65) * 3, 1);

  const networkNodes = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const distance = 6 * lineProgress;
    return {
      start: [Math.cos(angle) * 4, Math.sin(angle) * 4, 0] as [number, number, number],
      end: [Math.cos(angle) * distance, Math.sin(angle) * distance, 0] as [number, number, number],
    };
  });

  return (
    <>
      {networkNodes.map((node, i) => (
        <group key={i}>
          <Line
            points={[node.start, node.end]}
            color="#9ca3af"
            lineWidth={1}
            opacity={lineProgress * 0.4}
          />
          <Sphere args={[0.08, 16, 16]} position={node.end}>
            <meshStandardMaterial
              color="#e5e7eb"
              metalness={0.9}
              roughness={0.1}
              opacity={lineProgress}
              transparent
            />
          </Sphere>
        </group>
      ))}
    </>
  );
};

const OrbitingSatellites = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.002;
    }
  });

  if (scrollProgress < 0.5 || scrollProgress > 0.8) return null;

  const satelliteProgress = Math.min((scrollProgress - 0.5) * 4, 1);
  const orbitRadius = 5.5;

  return (
    <group ref={groupRef}>
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <group
            key={i}
            position={[
              Math.cos(angle) * orbitRadius,
              Math.sin(angle * 2) * 0.5,
              Math.sin(angle) * orbitRadius
            ]}
            scale={satelliteProgress * 0.8}
          >
            <Box args={[0.15, 0.15, 0.15]}>
              <meshStandardMaterial color="#9ca3af" metalness={0.9} roughness={0.1} />
            </Box>
          </group>
        );
      })}
    </group>
  );
};

const Scene = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.4} color="#9ca3af" />
      <pointLight position={[10, -10, 5]} intensity={0.3} color="#d1d5db" />
      <pointLight position={[0, 10, -5]} intensity={0.3} color="#e5e7eb" />

      <FloatingParticles scrollProgress={scrollProgress} />
      <ProdisynCore scrollProgress={scrollProgress} />
      <OrbitingProducts scrollProgress={scrollProgress} />
      <OrbitingSatellites scrollProgress={scrollProgress} />
      <ConnectionNetwork scrollProgress={scrollProgress} />
    </>
  );
};

export const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headlineOpacity = scrollProgress > 0.8 ? (scrollProgress - 0.8) * 5 : 0;

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          className="absolute inset-0"
        >
          <Suspense fallback={null}>
            <Scene scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="text-center z-10 px-4 max-w-5xl mx-auto"
            style={{ opacity: headlineOpacity }}
          >
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight">
              Intelligence Embedded.
              <br />
              Solutions Engineered.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-normal">
              From chaos to clarity. From challenge to innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
