import { DoubleSide } from "three";

export const BowlRim = ({
  rimRadius,
  rimTubeRadius,
  bowlHeight,
}: {
  rimRadius: number;
  rimTubeRadius: number;
  bowlHeight: number;
}) => (
  <mesh
    castShadow
    position={[0, bowlHeight / 2, 0]}
    rotation={[Math.PI / 2, 0, 0]}
  >
    <torusGeometry args={[rimRadius, rimTubeRadius, 16, 48]} />
    <meshPhysicalMaterial
      color="#e8e2d4"
      roughness={0.2}
      metalness={0.05}
      side={DoubleSide}
    />
  </mesh>
);
