import { FeatureCard } from "./FeatureCard";
import { Leaf, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: <Leaf className="h-12 w-12 text-green-600" />,
    title: "100% Organic",
    description:
      "Every ingredient is certified organic, sustainably sourced, and free from harmful chemicals.",
  },
  {
    icon: <Heart className="h-12 w-12 text-red-500" />,
    title: "Health Focused",
    description:
      "Nutritionist-approved combinations that support your wellness journey and boost energy.",
  },
  {
    icon: <Star className="h-12 w-12 text-yellow-500" />,
    title: "Premium Quality",
    description:
      "We partner with the finest suppliers to bring you ingredients that taste as good as they look.",
  },
];

export const FeaturesSection = () => (
  <section id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose NutriBloom?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We believe healthy eating should be joyful, interactive, and high
          quality.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.title} {...f} delay={i * 0.2} />
        ))}
      </div>
    </div>
  </section>
);
