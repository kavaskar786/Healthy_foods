import { motion } from "framer-motion";
import { Star, Heart, Leaf } from "lucide-react";
import { HeroSection } from "../components/HeroSection";

const Home = () => {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section with 3D Bowl */}
      <HeroSection scrollToFeatures={scrollToFeatures} />

      {/* Features Section */}
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
              We believe that healthy eating should be a joyful, interactive
              experience. Our carefully sourced ingredients and innovative
              approach make nutrition exciting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of health enthusiasts who've made the switch to
              better nutrition.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Order Your First Bowl
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
