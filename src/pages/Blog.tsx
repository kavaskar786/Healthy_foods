import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Overnight Oats: Why They're Perfect for Breakfast",
      excerpt: "Discover the nutritional benefits of overnight oats and how they can transform your morning routine with sustained energy and improved digestion.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Nutrition"
    },
    {
      id: 2,
      title: "10 Superfoods to Boost Your Immune System Naturally",
      excerpt: "Learn about powerful ingredients that can strengthen your immune system and keep you healthy throughout the year.",
      image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
      author: "Marcus Johnson",
      date: "January 12, 2025",
      readTime: "7 min read",
      category: "Health Tips"
    },
    {
      id: 3,
      title: "Sustainable Eating: How Your Food Choices Impact the Planet",
      excerpt: "Explore the connection between sustainable agriculture and healthy eating, and how you can make environmentally conscious food choices.",
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
      author: "Emily Rodriguez",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Sustainability"
    },
    {
      id: 4,
      title: "Creating the Perfect Smoothie Bowl: A Complete Guide",
      excerpt: "Master the art of smoothie bowl creation with our step-by-step guide to achieving the perfect texture, flavor, and nutritional balance.",
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
      author: "Chef Maria Lopez",
      date: "January 8, 2025",
      readTime: "4 min read",
      category: "Recipes"
    },
    {
      id: 5,
      title: "The Benefits of Plant-Based Proteins for Athletic Performance",
      excerpt: "Discover how plant-based proteins can fuel your workouts and support muscle recovery just as effectively as traditional sources.",
      image: "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg",
      author: "Dr. James Wilson",
      date: "January 5, 2025",
      readTime: "8 min read",
      category: "Fitness"
    },
    {
      id: 6,
      title: "Meal Prep Made Easy: Healthy Eating for Busy Lives",
      excerpt: "Learn practical strategies for meal prepping that will save you time while ensuring you maintain a nutritious diet throughout the week.",
      image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
      author: "Lisa Thompson",
      date: "January 3, 2025",
      readTime: "6 min read",
      category: "Lifestyle"
    }
  ];

  const categories = ["All", "Nutrition", "Health Tips", "Sustainability", "Recipes", "Fitness", "Lifestyle"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover expert insights, recipes, and tips for living a healthier, 
              more sustainable lifestyle. Join our community of wellness enthusiasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Article
            </h2>
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{blogPosts[0].author}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Read Article <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
                <div className="relative min-h-64 lg:min-h-0">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-gray-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {post.author}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get the latest health tips, recipes, and wellness insights delivered 
              straight to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;