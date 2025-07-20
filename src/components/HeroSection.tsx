import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ThreeDimensionalArea } from "./ThreeDimensionalArea";

export const HeroSection = ({
  scrollToFeatures,
}: {
  scrollToFeatures: () => void;
}) => (
  <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 pt-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-12 min-h-screen">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center lg:text-left"
      >
        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Nourish Your
          <span className="text-green-600 block">Body & Soul</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg">
          Experience the art of healthy eating with our interactive bowl
          builder.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <motion.button className="primary-btn">
            Start Building Your Bowl
          </motion.button>
          <motion.button onClick={scrollToFeatures} className="secondary-btn">
            Learn More
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative"
      >
        <ThreeDimensionalArea />
      </motion.div>
    </div>
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      onClick={scrollToFeatures}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
    >
      <ArrowDown className="h-6 w-6 text-gray-400" />
    </motion.div>
  </section>
);
