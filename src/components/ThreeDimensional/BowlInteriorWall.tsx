import { BackSide } from "three";

export const BowlInteriorWall = ({
  innerTopRadius,
  innerBottomRadius,
  bowlHeight,
}: {
  innerTopRadius: number;
  innerBottomRadius: number;
  bowlHeight: number;
}) => (
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
);
