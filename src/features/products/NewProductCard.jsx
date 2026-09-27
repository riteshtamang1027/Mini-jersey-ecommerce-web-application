import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { newDropProducts } from "../../data/products.js";
import { Link } from "react-router";

export default function NewProductCard() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-4 py-4 sm:gap-8 sm:px-8 lg:px-16">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="font-archivo text-xs text-secondary">
            THE LATEST SELECTIONS
          </p>
          <h2 className="font-archivo text-2xl font-bold sm:text-3xl">
            NEW DROPS // SPRING &apos;26
          </h2>
        </div>
        <Link to="/clubKits?sort=newest" className="hidden shrink-0 items-center gap-4 sm:flex">
          <p className="text-sm font-semibold text-muted-text">
            VIEW ALL RELEASES
          </p>
          <span className="rounded-full bg-secondary/60 p-2 text-white">
            <ArrowRight size={12} />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {newDropProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
