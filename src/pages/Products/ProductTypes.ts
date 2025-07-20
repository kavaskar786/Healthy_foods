export interface Nutrition {
  calories: number;
  protein: string;
  fiber: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  nutrition: Nutrition;
  rating: number;
  tags: string[];
}
