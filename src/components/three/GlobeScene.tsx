"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import Sphere from "./Sphere";
import Stars from "./Stars";
import FlightArcs from "./FlightArcs";

export default function GlobeScene() {
  return (
    <div className="relative h-[520px] w-full">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 5]}
          fov={42}
        />

        <color attach="background" args={["#000000"]} />

        {/* Свет */}

        <ambientLight intensity={1.15} />

        <directionalLight
          position={[5, 3, 5]}
          intensity={2.4}
        />

        <pointLight
          position={[-5, -2, -5]}
          intensity={1.25}
          color="#3b82f6"
        />

        <pointLight
          position={[0, 5, 0]}
          intensity={0.8}
        />

        {/* Звезды */}

        <Stars />

        {/* Глобус */}

        <group rotation={[0.15, -0.4, 0]}>
        <Sphere />

        {/* <FlightArcs /> */}
      </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
        />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-400/10 blur-3xl" />
    </div>
  );
}