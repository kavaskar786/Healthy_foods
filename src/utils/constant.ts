import { AddOnOptionType } from "../components/ThreeDimensionalArea.types";
import { Product } from "../pages/Products/ProductTypes";

export const ProductTitle = "Healthy Foods";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Organic Oats",
    category: "Breakfast",
    price: "$4.99",
    image: "/images/oats.jpg",
    description: "Whole grain oats, perfect for a healthy start to your day.",
    nutrition: { calories: 150, protein: "5g", fiber: "4g" },
    rating: 4.5,
    tags: ["organic", "gluten-free"],
  },
  {
    id: 2,
    name: "Tropical Paradise Bowl",
    category: "bowls",
    price: "$14.99",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
    description:
      "Coconut oats with mango, pineapple, chia seeds, and coconut flakes",
    nutrition: { calories: 280, protein: "8g", fiber: "10g" },
    rating: 4.9,
    tags: ["Tropical", "Vegan", "Antioxidants"],
  },
  {
    id: 3,
    name: "Green Power Smoothie",
    category: "smoothies",
    price: "$9.99",
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
    description: "Spinach, kale, banana, apple, and spirulina blend",
    nutrition: { calories: 180, protein: "6g", fiber: "5g" },
    rating: 4.7,
    tags: ["Detox", "Vitamin C", "Iron Rich"],
  },
  {
    id: 4,
    name: "Berry Antioxidant Smoothie",
    category: "smoothies",
    price: "$10.99",
    image: "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg",
    description: "Mixed berries, yogurt, honey, and acai powder",
    nutrition: { calories: 220, protein: "10g", fiber: "6g" },
    rating: 4.8,
    tags: ["Antioxidants", "Probiotic", "Natural"],
  },
  {
    id: 5,
    name: "Energy Bite Mix",
    category: "snacks",
    price: "$7.99",
    image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
    description: "Dates, almonds, coconut, and dark chocolate chips",
    nutrition: { calories: 150, protein: "4g", fiber: "3g" },
    rating: 4.6,
    tags: ["No Added Sugar", "Raw", "Energy Boost"],
  },
  {
    id: 6,
    name: "Superfood Trail Mix",
    category: "snacks",
    price: "$8.99",
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
    description: "Goji berries, cacao nibs, cashews, and pumpkin seeds",
    nutrition: { calories: 200, protein: "7g", fiber: "4g" },
    rating: 4.7,
    tags: ["Superfood", "Brain Food", "Omega-3"],
  },
];

export const FEATURES = [
  {
    title: "Sustainable Farming",
    description: "All our ingredients are sourced from eco-friendly farms.",
    icon: "fas fa-leaf",
  },
  {
    title: "Certified Organic",
    description: "We use certified organic ingredients in all our products.",
    icon: "fas fa-seedling",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Our products are rated 4.8 stars on average by our customers.",
    icon: "fas fa-smile-beam",
  },
];

export const ADD_ON_OPTIONS: AddOnOptionType[] = [
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
    size: 0.1,
    shape: "cube" as const,
    icon: "🥥",
  },
];

// Bowl constants
export const BOWL_HEIGHT = 1.5;
export const BOWL_OUTER_BOTTOM_RADIUS = 1.2;
export const BOWL_OUTER_TOP_RADIUS = 2.2;
export const BOWL_INNER_BOTTOM_RADIUS = 1.0;
export const BOWL_INNER_TOP_RADIUS = 2.0;
export const BOWL_RIM_RADIUS =
  (BOWL_INNER_TOP_RADIUS + BOWL_OUTER_TOP_RADIUS) / 2;
export const BOWL_RIM_TUBE_RADIUS =
  (BOWL_OUTER_TOP_RADIUS - BOWL_INNER_TOP_RADIUS) / 2;
