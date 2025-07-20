import { Link } from "react-router-dom";
import { Leaf, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { ProductTitle } from "../../utils/constant";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">{ProductTitle}</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Nourishing your body with organic, sustainable ingredients. Every
              bowl tells a story of health, wellness, and environmental care.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Mail className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>BTM Madivala 1st Stage</p>
              <p>near someshawara Temple Bengaluru</p>
              <p>(555) 123-4567</p>
              <p>hello@healthfoods.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 HealthFoods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
