import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

export interface IngredientProps {
  position: [number, number, number];
  color: string;
  size?: number;
  shape?: "sphere" | "cube";
  targetY: number;
}

export const Ingredient = ({
  position,
  color,
  size = 0.1,
  shape = "sphere",
  targetY,
}: IngredientProps) => {
  const meshRef = useRef<Mesh>(null);
  const [hasLanded, setHasLanded] = useState(false);
  const velocity = useRef(0);
  const gravity = -0.015; // Slightly reduced gravity for a softer fall

  // Define the liquid properties
  const liquidSurfaceY = 0.05;
  const liquidDrag = 0.92; // Factor to slow down velocity in liquid

  useFrame(() => {
    if (meshRef.current && !hasLanded) {
      const currentPos = meshRef.current.position;
      const isInLiquid = currentPos.y <= liquidSurfaceY;

      // Apply liquid drag if inside the liquid volume
      if (isInLiquid) {
        velocity.current *= liquidDrag;
      }

      // Always apply gravity
      velocity.current += gravity;
      currentPos.y += velocity.current;

      // Keep ingredients within the bowl's radius
      const currentRadius = Math.sqrt(currentPos.x ** 2 + currentPos.z ** 2);
      const bowlRadius = 1.8;
      if (currentRadius > bowlRadius) {
        const factor = bowlRadius / currentRadius;
        currentPos.x *= factor * 0.9;
        currentPos.z *= factor * 0.9;
      }

      // Add rotation
      meshRef.current.rotation.x += 0.05;
      meshRef.current.rotation.z += 0.03;

      // Check if the ingredient has settled at its target depth
      if (isInLiquid && currentPos.y <= targetY) {
        currentPos.y = targetY;
        setHasLanded(true);
        velocity.current = 0;
      }
    }
  });

  const Geometry =
    shape === "cube" ? (
      <boxGeometry args={[size, size, size]} />
    ) : (
      <sphereGeometry args={[size, 8, 8]} />
    );

  return (
    <mesh ref={meshRef} position={position} castShadow>
      {Geometry}
      <meshPhysicalMaterial
        color={color}
        roughness={0.4}
        metalness={0.1}
        clearcoat={0.3}
      />
    </mesh>
  );
};
