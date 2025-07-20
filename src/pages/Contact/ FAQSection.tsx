import { motion } from "framer-motion";

const FAQS = [
  {
    question: "Are all your ingredients organic?",
    answer:
      "Yes, we use only certified organic ingredients sourced from trusted suppliers who share our commitment to sustainability and quality.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "We offer same-day delivery within 25 miles of our locations, and nationwide shipping for select products with our cold-chain logistics.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Absolutely! We offer gluten-free, vegan, keto, and other dietary options. All our products are clearly labeled with allergen information.",
  },
  {
    question: "How fresh are your products?",
    answer:
      "All our products are made fresh daily in small batches. We never use preservatives, so consume within 3–5 days for optimal freshness.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Quick answers to common questions about our products and services.
          </p>
        </motion.div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
