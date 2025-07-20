import { motion } from "framer-motion";
import { ReactNode } from "react";

export const FeatureCard = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);
