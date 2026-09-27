import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import ClubKits from "./pages/categoryBrowse/ClubKits.jsx";
import NationalKits from "./pages/categoryBrowse/NationalKits.jsx";
import JerseyProduct from "./pages/products/JerseyProduct.jsx";
import { getProduct } from "./data/products.js";
import ShoppingCart from "./pages/cart/ShoppingCart.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import AccountDashboard from "./pages/account/AccountDashboard.jsx";
import { CartProvider } from "./features/cart/CartContext.jsx";

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        className="flex-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<App />} />
          <Route path="/clubKits" element={<ClubKits />} />
          <Route path="/nationalTeam" element={<NationalKits />} />
          <Route
            path="/products/:productId"
            element={<JerseyProduct getProduct={getProduct} />}
          />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<AccountDashboard />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50">
            <Header />
          </header>
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  </CartProvider>,
);
