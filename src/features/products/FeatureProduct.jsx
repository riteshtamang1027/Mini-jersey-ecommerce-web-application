import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { trendingProducts } from "../../data/products.js";

export default function FeatureProduct() {
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
            className="rounded-full bg-gray-100 p-2"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next trending products"
            className="rounded-full bg-secondary p-2 text-white"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
