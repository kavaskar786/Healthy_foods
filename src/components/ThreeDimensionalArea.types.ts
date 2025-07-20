export type IngredientType = {
  name: string;
  color: string;
  size: number;
  shape: "sphere" | "cube";
  icon: string;
  id: string;
  initialPosition: [number, number, number];
  targetY: number;
};

export type AddOnOptionType = Omit<
  IngredientType,
  "id" | "initialPosition" | "targetY"
>;
