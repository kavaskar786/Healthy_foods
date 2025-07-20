import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, BackSide, FrontSide, Group } from "three";

export interface BowlProps {
  position?: [number, number, number];
}

export const Bowl = ({ position = [0, 0, 0] }: BowlProps) => {
  const meshRef = useRef<Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const bowlHeight = 1.5;
  const outerBottomRadius = 1.2;
  const outerTopRadius = 2.2;
  const innerBottomRadius = 1.0;
  const innerTopRadius = 2.0;

  const rimRadius = (innerTopRadius + outerTopRadius) / 2;
  const rimTubeRadius = (outerTopRadius - innerTopRadius) / 2;
  return (
    <group ref={meshRef} position={position}>
      {/* Bowl exterior wall */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry
          args={[outerTopRadius, outerBottomRadius, bowlHeight, 32, 1, true]}
        />
        <meshPhysicalMaterial
          color="#e8e2d4"
          roughness={0.2}
          metalness={0.05}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          side={FrontSide}
        />
      </mesh>

      {/* Bowl interior wall */}
      <mesh receiveShadow>
        <cylinderGeometry
          args={[innerTopRadius, innerBottomRadius, bowlHeight, 32, 1, true]}
        />
        <meshPhysicalMaterial
          color="#f5f0e8"
          roughness={0.3}
          metalness={0.02}
          side={BackSide}
        />
      </mesh>

      {/* Bowl Base */}
      <mesh
        receiveShadow
        position={[0, -bowlHeight / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[innerBottomRadius, outerBottomRadius, 32]} />
        <meshPhysicalMaterial
          color="#e8e2d4"
          roughness={0.2}
          metalness={0.05}
          side={DoubleSide}
        />
      </mesh>

      {/* ✨ UPDATED: Bowl Rim with smooth radius ✨ */}
      <mesh
        castShadow
        position={[0, bowlHeight / 2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {/* A TorusGeometry creates a smooth, rounded rim */}
        <torusGeometry args={[rimRadius, rimTubeRadius, 16, 48]} />
        <meshPhysicalMaterial
          color="#e8e2d4"
          roughness={0.2}
          metalness={0.05}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
};
