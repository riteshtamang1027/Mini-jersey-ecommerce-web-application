import ProductCard from "../../features/products/ProductCard";

export default function ClubKitsProduct({ products }) {
  return (
    <section
      id="catalog-products"
      aria-label="Product results"
      className="grid w-full scroll-mt-32 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
