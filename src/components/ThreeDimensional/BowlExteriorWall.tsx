import { FrontSide } from "three";

export const BowlExteriorWall = ({
  outerTopRadius,
  outerBottomRadius,
  bowlHeight,
}: {
  outerTopRadius: number;
  outerBottomRadius: number;
  bowlHeight: number;
}) => (
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
);
