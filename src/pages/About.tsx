import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from a passion for healthy living and environmental sustainability, 
              NutriBloom is more than just a food company—we're a movement toward better nutrition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="Healthy ingredients"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Rooted in Wellness
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2020 by nutrition enthusiasts Sarah Chen and Marcus Johnson, 
                NutriBloom emerged from a simple belief: that healthy eating should be 
                accessible, enjoyable, and sustainable for everyone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We started with a small organic farm and a big dream—to revolutionize 
                how people think about nutrition. Today, we work with over 50 certified 
                organic farms across the country, ensuring every ingredient meets our 
                rigorous standards for quality and sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core values and unwavering commitment 
              to your health and our planet's wellbeing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="h-12 w-12 text-green-600" />,
                title: "Sustainability",
                description: "We're committed to regenerative farming practices that heal the earth while nourishing your body."
              },
              {
                icon: <Heart className="h-12 w-12 text-red-500" />,
                title: "Wellness",
                description: "Your health is our priority. Every product is designed to support your journey to optimal wellness."
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "Community",
                description: "We believe in building strong relationships with our farmers, customers, and local communities."
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Quality",
                description: "We never compromise on quality. Every ingredient is carefully selected and rigorously tested."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind NutriBloom's mission to make healthy eating 
              accessible and enjoyable for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Co-Founder & CEO",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
                bio: "Nutritionist with 10+ years of experience in sustainable food systems."
              },
              {
                name: "Marcus Johnson",
                role: "Co-Founder & CTO",
                image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
                bio: "Former tech executive passionate about using technology for health innovation."
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Head of Nutrition",
                image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
                bio: "PhD in Nutritional Science, specializing in plant-based nutrition and wellness."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;