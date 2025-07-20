import { motion } from "framer-motion";
import { Product } from "../pages/Products/ProductTypes";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{product.price}</span>
          <span>{product.rating} ★</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
