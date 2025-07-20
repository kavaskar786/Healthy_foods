import { IngredientType } from "./ThreeDimensionalArea.types";
import { Bowl } from "./ThreeDimensional/Bowl";
import { Ingredient } from "./ThreeDimensional/Ingredient";
import { Environment } from "@react-three/drei";
import { OatFlakes } from "./ThreeDimensional/OatsFlakes";

export const Bowl3DScene = ({
  ingredients,
}: {
  ingredients: IngredientType[];
}) => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />

      <Bowl />

      {/* Base oats - half filled */}
      <mesh position={[0, -0.35, 0]} receiveShadow>
        <cylinderGeometry args={[1.6, 0.8, 0.8, 32]} />
        <meshPhysicalMaterial
          color="#fad58a"
          roughness={0.2}
          metalness={0.05}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
        />
      </mesh>

      <OatFlakes />

      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          position={ingredient.initialPosition}
          color={ingredient.color}
          size={ingredient.size}
          shape={ingredient.shape}
          targetY={ingredient.targetY}
        />
      ))}

      <Environment preset="sunset" />
    </>
  );
};
