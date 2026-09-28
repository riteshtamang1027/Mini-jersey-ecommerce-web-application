import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import StoreImage from "../../components/StoreImage";

function ProductCard({ product }) {
  const productUrl = `/products/${product.id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="flex min-w-0 flex-col gap-3 rounded-xl border border-border bg-surface p-2 shadow-sm shadow-black/10 transition-shadow hover:border-secondary/50 hover:shadow-xl hover:shadow-black/20 sm:gap-4 sm:p-3"
    >
      <Link to={productUrl} className="block overflow-hidden rounded-xl">
        <div className="relative">
          {(product.isNewDrop || product.popularity >= 95) && (
            <span className="absolute left-2 top-2 z-10 rounded-sm bg-secondary px-2 py-1 text-[9px] font-bold uppercase text-white">
              {product.popularity >= 95 ? "Trending" : "New drop"}
            </span>
          )}
          <StoreImage
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
            src={product.image}
            alt={`${product.name} ${product.season}`}
          />
        </div>
      </Link>

      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <Link to={productUrl} className="min-w-0">
          <h3 className="break-words text-lg font-bold sm:text-xl">
            {product.name.toUpperCase()}
          </h3>
          <p className="mt-1 text-xs text-muted-text">
            {product.season} · {product.category}
          </p>
        </Link>

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-border pt-3">
          <p className="shrink-0 font-archivo text-lg font-bold text-secondary sm:text-xl">
            ${product.price.toFixed(2)}
          </p>
          <Link
            to={productUrl}
            aria-label={`Choose size and color for ${product.name}`}
            className="flex min-h-10 shrink-0 items-center gap-1.5 rounded-lg bg-secondary px-3 py-2 text-white sm:gap-2 sm:px-4"
          >
            <span className="font-archivo text-sm font-semibold">
              Choose options
            </span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;
