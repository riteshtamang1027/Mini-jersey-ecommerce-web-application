import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

function ProductCard({ product }) {
  const productUrl = `/products/${product.id}`;

  return (
    <article className="flex min-w-0 flex-col gap-3 rounded-xl border border-gray-200 bg-white p-2 transition-shadow hover:shadow-lg sm:gap-4">
      <Link to={productUrl} className="block overflow-hidden rounded-xl">
        <img
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
          src={product.image}
          alt={`${product.name} ${product.season}`}
        />
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

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-gray-200 pt-3">
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
    </article>
  );
}

export default ProductCard;
