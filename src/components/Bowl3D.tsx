import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// Simple Bowl Geometry Component
const Bowl = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Bowl exterior */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry
          args={[2.2, 1.2, 1.5, 32, 1, false, 0, Math.PI * 2]}
        />
        <meshPhysicalMaterial
          color="#e8e2d4"
          roughness={0.2}
          metalness={0.05}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
        />
      </mesh>
      {/* Bowl interior */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <cylinderGeometry
          args={[2.0, 1.0, 1.4, 32, 1, false, 0, Math.PI * 2]}
        />
        <meshPhysicalMaterial
          color="#f5f0e8"
          roughness={0.3}
          metalness={0.02}
        />
      </mesh>
    </group>
  );
};

// Ingredient particle component
const Ingredient = ({
  position,
  color,
  size = 0.1,
  shape = "sphere",
  targetY = -1.5,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
  shape?: "sphere" | "cube";
  targetY?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hasLanded, setHasLanded] = useState(false);
  const velocity = useRef(0);
  const gravity = -0.02;
  const bounce = 0.3;

  useFrame(() => {
    if (meshRef.current && !hasLanded) {
      velocity.current += gravity;
      meshRef.current.position.y += velocity.current;

      // Apply bowl containment - keep ingredients within bowl radius
      const currentRadius = Math.sqrt(
        meshRef.current.position.x ** 2 + meshRef.current.position.z ** 2
      );
      const bowlRadius = 1.8; // Match the bowl's top radius

      if (currentRadius > bowlRadius) {
        // Push back towards center
        const factor = bowlRadius / currentRadius;
        meshRef.current.position.x *= factor * 0.9;
        meshRef.current.position.z *= factor * 0.9;
      }

      // Gentle drift towards center
      meshRef.current.position.x *= 0.995;
      meshRef.current.position.z *= 0.995;

      // Rotation for visual appeal
      meshRef.current.rotation.x += 0.1;
      meshRef.current.rotation.z += 0.05;

      // Check if landed in bowl
      const landingY = -0.1 + Math.random() * 0.3; // Land on top of oats
      if (meshRef.current.position.y <= landingY) {
        meshRef.current.position.y = landingY;
        velocity.current *= -bounce;

        if (Math.abs(velocity.current) < 0.005) {
          setHasLanded(true);
          velocity.current = 0;
        }
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

// Main Bowl 3D Component
const Bowl3DScene = ({ ingredients }: { ingredients: any[] }) => {
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

      {/* Bowl */}
      <Bowl />

      {/* Base oats - half filled */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <cylinderGeometry args={[1.6, 0.8, 0.8, 32]} />
        <meshPhysicalMaterial
          color="#d4af37"
          roughness={0.9}
          metalness={0.02}
        />
      </mesh>

      {/* Additional oat texture layers */}
      {Array.from({ length: 20 }, (_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 1.2,
            -0.9 + Math.random() * 0.8,
            (Math.random() - 0.5) * 1.2,
          ]}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
          ]}
        >
          <boxGeometry args={[0.08, 0.04, 0.12]} />
          <meshPhysicalMaterial color="#daa520" roughness={0.8} />
        </mesh>
      ))}

      {/* Ingredients */}
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={`${ingredient.id}-${index}`}
          position={[
            (Math.random() - 0.5) * 1.0,
            5 + Math.random() * 2,
            (Math.random() - 0.5) * 1.0,
          ]}
          color={ingredient.color}
          size={ingredient.size}
          shape={ingredient.shape}
        />
      ))}

      {/* Environment */}
      <Environment preset="sunset" />

      {/* Ground */}
      {/* <mesh position={[0, -3, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshPhysicalMaterial color="#ffffff" />
      </mesh> */}
    </>
  );
};

const Bowl3D = () => {
  const [ingredients, setIngredients] = useState<any[]>([]);

  const addOnOptions = [
    {
      name: "Blueberries",
      color: "#4169E1",
      size: 0.08,
      shape: "sphere" as const,
      icon: "🫐",
    },
    {
      name: "Strawberries",
      color: "#FF6B6B",
      size: 0.12,
      shape: "sphere" as const,
      icon: "🍓",
    },
    {
      name: "Almonds",
      color: "#D2B48C",
      size: 0.06,
      shape: "cube" as const,
      icon: "🌰",
    },
    {
      name: "Honey",
      color: "#FFD700",
      size: 0.05,
      shape: "sphere" as const,
      icon: "🍯",
    },
    {
      name: "Chia Seeds",
      color: "#2F4F4F",
      size: 0.03,
      shape: "sphere" as const,
      icon: "⚫",
    },
    {
      name: "Coconut",
      color: "#F5F5DC",
      size: 0.04,
      shape: "cube" as const,
      icon: "🥥",
    },
  ];

  const addIngredient = (addOn: any) => {
    const newIngredients = Array.from({ length: 8 }, (_, i) => ({
      ...addOn,
      id: `${addOn.name}-${Date.now()}-${i}`,
    }));
    setIngredients((prev) => [...prev, ...newIngredients]);
  };

  const resetBowl = () => {
    setIngredients([]);
  };

  return (
    <div className="space-y-8">
      {/* 3D Canvas */}
      <div className="h-[500px] w-full bg-transparent">
        <Canvas
          shadows
          camera={{ position: [0, 2, 8], fov: 45 }}
          gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
          style={{ background: "transparent" }}
        >
          <Bowl3DScene ingredients={ingredients} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>
      </div>

      {/* Controls */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customize Your Bowl
            </h3>
            <p className="text-gray-600 text-sm">
              Click to add ingredients and watch them fall into your bowl!
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
            {addOnOptions.map((addOn) => (
              <motion.button
                key={addOn.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addIngredient(addOn)}
                className="flex flex-col items-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:from-green-100 hover:to-green-200 transition-all duration-200"
              >
                <span className="text-2xl mb-1">{addOn.icon}</span>
                <span className="text-xs font-medium text-gray-700">
                  {addOn.name}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetBowl}
              className="px-6 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Reset Bowl
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bowl3D;
