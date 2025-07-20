import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Leaf, Heart, Clock } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'bowls', name: 'Bowls' },
    { id: 'smoothies', name: 'Smoothies' },
    { id: 'snacks', name: 'Snacks' },
  ];

  const products = [
    {
      id: 1,
      name: "Classic Oat Bowl",
      category: "bowls",
      price: "$12.99",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      description: "Organic rolled oats with fresh berries, almonds, and honey",
      nutrition: { calories: 320, protein: "12g", fiber: "8g" },
      rating: 4.8,
      tags: ["Organic", "Gluten-Free", "High Fiber"]
    },
    {
      id: 2,
      name: "Tropical Paradise Bowl",
      category: "bowls",
      price: "$14.99",
      image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
      description: "Coconut oats with mango, pineapple, chia seeds, and coconut flakes",
      nutrition: { calories: 280, protein: "8g", fiber: "10g" },
      rating: 4.9,
      tags: ["Tropical", "Vegan", "Antioxidants"]
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
      tags: ["Detox", "Vitamin C", "Iron Rich"]
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
      tags: ["Antioxidants", "Probiotic", "Natural"]
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
      tags: ["No Added Sugar", "Raw", "Energy Boost"]
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
      tags: ["Superfood", "Brain Food", "Omega-3"]
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully crafted collection of nutritious bowls, smoothies, 
              and snacks. Each product is made with premium organic ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <span className="text-2xl font-bold text-green-600">
                      {product.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Nutrition Info */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900">
                        {product.nutrition.calories}
                      </div>
                      <div className="text-xs text-gray-600">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900">
                        {product.nutrition.protein}
                      </div>
                      <div className="text-xs text-gray-600">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900">
                        {product.nutrition.fiber}
                      </div>
                      <div className="text-xs text-gray-600">Fiber</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8 text-green-600" />,
                title: "Organic Certified",
                description: "All ingredients are certified organic and sustainably sourced"
              },
              {
                icon: <Heart className="h-8 w-8 text-red-500" />,
                title: "Health Focused",
                description: "Nutritionist-approved recipes for optimal wellness"
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Fresh Daily",
                description: "Made fresh every day and delivered to your door"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;