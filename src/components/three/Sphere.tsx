"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

export default function Sphere() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const earthTexture = useLoader(
    TextureLoader,
    "/textures/earth_day.jpg"
  );

  const cloudsTexture = useLoader(
    TextureLoader,
    "/textures/earth_clouds.jpg"
  );

  earthTexture.colorSpace = THREE.SRGBColorSpace;
  cloudsTexture.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.12;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.15;
    }

    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group>
      {/* Земля */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 128, 128]} />

              <meshStandardMaterial
        map={earthTexture}
        roughness={0.55}
        metalness={0.25}
        emissive="#00C8FF"
        emissiveIntensity={0.08}
      />
      </mesh>

      {/* Облака */}
      <mesh ref={cloudsRef} scale={1.01}>
        <sphereGeometry args={[2, 128, 128]} />

        <meshStandardMaterial
          map={cloudsTexture}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </mesh>

      {/* Атмосфера */}
      <mesh
        ref={atmosphereRef}
        scale={1.06}
      >
        <sphereGeometry args={[2, 128, 128]} />

        <meshBasicMaterial
          color="#44D9FF"
          transparent
          opacity={0.28}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Внешнее свечение */}
      <mesh scale={1.15}>
        <sphereGeometry args={[2, 64, 64]} />

        <meshBasicMaterial
          color="#00C8FF"
          transparent
          opacity={0.13}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}