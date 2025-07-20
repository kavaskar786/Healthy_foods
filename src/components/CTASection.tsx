import { motion } from "framer-motion";

export const CTASection = () => (
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
          Join thousands of health enthusiasts who've made the switch to better
          nutrition.
        </p>
        <motion.button className="primary-btn bg-white text-green-600">
          Order Your First Bowl
        </motion.button>
      </motion.div>
    </div>
  </section>
);
