import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Blog from "./pages/Blog/Blog";
import Footer from "./components/common/Footer";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
