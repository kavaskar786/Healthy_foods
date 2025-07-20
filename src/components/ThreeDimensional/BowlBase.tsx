import { DoubleSide } from "three";

export const BowlBase = ({
  innerBottomRadius,
  outerBottomRadius,
  bowlHeight,
}: {
  innerBottomRadius: number;
  outerBottomRadius: number;
  bowlHeight: number;
}) => (
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
);
