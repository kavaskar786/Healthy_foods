import { useMemo } from "react";

export const OatFlakes = () => {
  const flakes = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.sqrt(Math.random()) * 1.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return (
        <mesh
          key={`oat-${i}`}
          position={[x, 0.03 + Math.random() * 0.02, z]}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
          ]}
        >
          <boxGeometry args={[0.08, 0.04, 0.12]} />
          <meshPhysicalMaterial color="#daa520" roughness={0.8} />
        </mesh>
      );
    });
  }, []);
  return <>{flakes}</>;
};
