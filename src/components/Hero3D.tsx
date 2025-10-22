import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense } from "react";

const FloatingShape = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const Hero3D = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="absolute inset-0"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
          
          <FloatingShape position={[-2, 1, 0]} color="#3b82f6" />
          <FloatingShape position={[2, -1, -2]} color="#8b5cf6" />
          <FloatingShape position={[0, 2, -1]} color="#06b6d4" />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Intelligence</span>
            <br />
            <span className="text-foreground">Engineered</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The best way to experience cutting-edge technology
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform glow-effect">
              Explore Products
            </button>
            <button className="px-8 py-3 glass-card text-foreground rounded-full font-semibold hover:scale-105 transition-transform">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
