import ProductCard from "../../features/products/ProductCard";
import { nationalProducts } from "../../data/products.js";

function NationalKits() {
  return (
    <main className="mx-auto mt-6 w-full max-w-[1440px] space-y-6 px-4 sm:mt-8 sm:space-y-8 sm:px-8 lg:px-16">
      <section className="font-archivo">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
          International football
        </p>
        <h1 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
          NATIONAL TEAM KITS
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-text sm:text-base">
          Shop the latest jerseys from the world&apos;s national teams, made for
          match day and every day.
        </p>
      </section>

      <section
        aria-label="National team jerseys"
        className="grid grid-cols-1 gap-4 border-t border-gray-200 pt-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {nationalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default NationalKits;
