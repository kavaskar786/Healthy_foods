import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { AddOnOptionType, IngredientType } from "./ThreeDimensionalArea.types";
import { Bowl3DScene } from "./Bowl3DScene";
import { ADD_ON_OPTIONS } from "../utils/constant";

export const ThreeDimensionalArea = () => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);

  // ✨ UPDATED: addIngredient function

  const addIngredient = (addOn: AddOnOptionType) => {
    const newIngredients = Array.from({ length: 20 }, (_, i) => {
      // Calculate random spawn position ONCE
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.sqrt(Math.random()) * 1.4;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Calculate random landing position ONCE
      // This makes ingredients settle at slightly different heights for a natural look
      const targetY = -0.05 + Math.random() * 0.1;

      // Return a new object with all the necessary data saved
      return {
        ...addOn,
        id: `${addOn.name}-${Date.now()}-${i}`,
        initialPosition: [x, 5 + Math.random() * 2, z] as [
          number,
          number,
          number
        ],
        targetY: targetY,
      };
    });
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
            {ADD_ON_OPTIONS.map((addOn) => (
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
