import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Torus, Box, Cylinder, MeshTransmissionMaterial, Line } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

const ProdisynCore = ({ scrollProgress }: { scrollProgress: number }) => {
  const coreRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.003;
    }
    if (ringRef.current && scrollProgress > 0.15) {
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      ringRef.current.rotation.z += 0.005;
    }
  });

  const pulseScale = 1 + Math.sin(scrollProgress * Math.PI * 4) * 0.05;

  return (
    <group ref={coreRef}>
      {/* Glass Sphere Core */}
      <Sphere args={[1, 64, 64]} scale={pulseScale}>
        <MeshTransmissionMaterial
          transmission={0.95}
          thickness={0.5}
          roughness={0.05}
          chromaticAberration={0.05}
          anisotropy={1}
          color="#86efac"
        />
      </Sphere>
      
      {/* Metal Inner Core */}
      <Sphere args={[0.7, 32, 32]} scale={pulseScale}>
        <meshStandardMaterial
          color="#d4d4d8"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </Sphere>

      {/* Ring appears after scroll 1 */}
      {scrollProgress > 0.15 && (
        <Torus
          ref={ringRef}
          args={[2, 0.08, 32, 100]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.8}
            roughness={0.2}
            emissive="#3b82f6"
            emissiveIntensity={0.3}
          />
        </Torus>
      )}
    </group>
  );
};

const ChaoticLines = ({ scrollProgress }: { scrollProgress: number }) => {
  const linesData = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const radius = 8;
    return {
      start: [Math.cos(angle) * radius, Math.sin(angle) * radius, -2] as [number, number, number],
      end: [0, 0, 0] as [number, number, number],
    };
  });

  const progress = Math.min(scrollProgress * 8, 1);
  
  if (scrollProgress > 0.15) return null;

  return (
    <>
      {linesData.map((line, i) => {
        const currentEnd = [
          line.start[0] + (line.end[0] - line.start[0]) * progress,
          line.start[1] + (line.end[1] - line.start[1]) * progress,
          line.start[2] + (line.end[2] - line.start[2]) * progress,
        ] as [number, number, number];

        return (
          <Line
            key={i}
            points={[line.start, currentEnd]}
            color="#ef4444"
            lineWidth={2}
            opacity={1 - progress}
          />
        );
      })}
    </>
  );
};

const OrbitingProducts = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
    }
  });

  if (scrollProgress < 0.35) return null;

  const productProgress = Math.min((scrollProgress - 0.35) * 3, 1);
  const orbitRadius = 3.5;

  return (
    <group ref={groupRef}>
      {/* Microchip */}
      <group position={[orbitRadius, 0, 0]} scale={productProgress}>
        <Box args={[0.6, 0.1, 0.6]}>
          <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
        </Box>
        <Box args={[0.4, 0.15, 0.4]} position={[0, 0.1, 0]}>
          <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} />
        </Box>
      </group>

      {/* Car Wireframe */}
      <group position={[-orbitRadius * 0.5, orbitRadius * 0.866, 0]} scale={productProgress}>
        <Box args={[1, 0.5, 0.6]}>
          <meshStandardMaterial color="#3b82f6" wireframe metalness={0.9} roughness={0.1} />
        </Box>
        <Box args={[0.8, 0.3, 0.5]} position={[0, -0.3, 0]}>
          <meshStandardMaterial color="#3b82f6" wireframe metalness={0.9} roughness={0.1} />
        </Box>
      </group>

      {/* IoT Sensor */}
      <group position={[-orbitRadius * 0.5, -orbitRadius * 0.866, 0]} scale={productProgress}>
        <Cylinder args={[0.3, 0.3, 0.6, 32]}>
          <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
        </Cylinder>
        <Sphere args={[0.15, 16, 16]} position={[0, 0.4, 0]}>
          <meshStandardMaterial color="#34d399" emissive="#10b981" emissiveIntensity={0.5} />
        </Sphere>
      </group>
    </group>
  );
};

const SkillTreeLines = ({ scrollProgress }: { scrollProgress: number }) => {
  if (scrollProgress < 0.65) return null;

  const lineProgress = Math.min((scrollProgress - 0.65) * 3, 1);
  
  const skillLines = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const distance = 12 * lineProgress;
    return {
      start: [Math.cos(angle) * 3.5, Math.sin(angle) * 3.5, 0] as [number, number, number],
      end: [Math.cos(angle) * distance, Math.sin(angle) * distance, 0] as [number, number, number],
    };
  });

  return (
    <>
      {skillLines.map((line, i) => (
        <Line
          key={i}
          points={[line.start, line.end]}
          color="#86efac"
          lineWidth={1.5}
          opacity={lineProgress * 0.6}
        />
      ))}
    </>
  );
};

const Scene = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[10, -10, 5]} intensity={0.4} color="#10b981" />
      
      <ChaoticLines scrollProgress={scrollProgress} />
      <ProdisynCore scrollProgress={scrollProgress} />
      <OrbitingProducts scrollProgress={scrollProgress} />
      <SkillTreeLines scrollProgress={scrollProgress} />
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
      <div className="sticky top-0 h-screen w-full overflow-hidden">
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
