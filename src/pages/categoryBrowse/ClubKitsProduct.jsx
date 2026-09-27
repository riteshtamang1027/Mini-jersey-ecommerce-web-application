import ProductCard from "../../features/products/ProductCard";
import { clubProducts } from "../../data/products.js";

export default function ClubKitsProduct() {
  return (
    <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {clubProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
