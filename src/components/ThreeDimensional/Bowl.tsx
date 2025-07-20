import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
import {
  BOWL_HEIGHT,
  BOWL_INNER_BOTTOM_RADIUS,
  BOWL_INNER_TOP_RADIUS,
  BOWL_OUTER_BOTTOM_RADIUS,
  BOWL_OUTER_TOP_RADIUS,
  BOWL_RIM_RADIUS,
  BOWL_RIM_TUBE_RADIUS,
} from "../../utils/constant";
import { BowlExteriorWall } from "./BowlExteriorWall";
import { BowlInteriorWall } from "./BowlInteriorWall";
import { BowlBase } from "./BowlBase";
import { BowlRim } from "./BowlRim";

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

  return (
    <group ref={meshRef} position={position}>
      <BowlExteriorWall
        outerTopRadius={BOWL_OUTER_TOP_RADIUS}
        outerBottomRadius={BOWL_OUTER_BOTTOM_RADIUS}
        bowlHeight={BOWL_HEIGHT}
      />
      <BowlInteriorWall
        innerTopRadius={BOWL_INNER_TOP_RADIUS}
        innerBottomRadius={BOWL_INNER_BOTTOM_RADIUS}
        bowlHeight={BOWL_HEIGHT}
      />
      <BowlBase
        innerBottomRadius={BOWL_INNER_BOTTOM_RADIUS}
        outerBottomRadius={BOWL_OUTER_BOTTOM_RADIUS}
        bowlHeight={BOWL_HEIGHT}
      />
      <BowlRim
        rimRadius={BOWL_RIM_RADIUS}
        rimTubeRadius={BOWL_RIM_TUBE_RADIUS}
        bowlHeight={BOWL_HEIGHT}
      />
    </group>
  );
};
