import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import ProductCard from "./ProductCard";
import { products } from "../../data/products.js";

export default function FeatureProduct() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = Array.from(
    { length: 4 },
    (_, offset) => products[(startIndex + offset) % products.length]
  );

  const shiftProducts = (direction) => {
    setStartIndex((current) => (
      current + direction + products.length
    ) % products.length);
  };

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-4 py-4 sm:gap-8 sm:px-8 lg:px-16">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-archivo text-xs text-secondary">
            STREET &amp; STADIUM FAVORITES
          </p>
          <h2 className="font-archivo text-2xl font-bold sm:text-3xl">
            TRENDING NOW
          </h2>
        </div>
        <div className="hidden items-center gap-2 sm:flex sm:gap-4">
          <button
            type="button"
            aria-label="Previous trending products"
            onClick={() => shiftProducts(-1)}
            className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next trending products"
            onClick={() => shiftProducts(1)}
            className="rounded-full bg-secondary p-2 text-white"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <motion.div
        key={visibleProducts[0].id}
        initial={{ opacity: 0.55, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
      >
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </section>
  );
}
