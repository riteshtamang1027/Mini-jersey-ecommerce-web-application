import { useState } from "react";
import CatHeader from "./CatHeader";
import ClubKitsProduct from "./ClubKitsProduct";
import Filters from "./Filters";
import Pagination from "./Pagination";

const PRODUCTS_PER_PAGE = 6;

function sortProducts(products, sortBy) {
  const sortedProducts = [...products];

  switch (sortBy) {
    case "popularity":
      return sortedProducts.sort((a, b) => b.popularity - a.popularity);
    case "trending":
      return sortedProducts.sort(
        (a, b) => b.popularity - a.popularity || b.releaseRank - a.releaseRank
      );
    case "newest":
      return sortedProducts.sort(
        (a, b) => b.releaseRank - a.releaseRank || b.popularity - a.popularity
      );
    case "price-asc":
      return sortedProducts.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sortedProducts.sort((a, b) => b.price - a.price);
    case "name-asc":
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sortedProducts.sort((a, b) => b.releaseRank - a.releaseRank);
  }
}

function ProductCatalog({ title, description, products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("featured");
  const sortedProducts = sortProducts(products, sortBy);
  const pageCount = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const pageProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const changeSort = (nextSort) => {
    setSortBy(nextSort);
    setCurrentPage(1);
  };

  const changePage = (page) => {
    setCurrentPage(page);
    document.getElementById("catalog-products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="mx-auto mt-6 w-full max-w-[1440px] space-y-6 px-4 sm:mt-8 sm:space-y-8 sm:px-8 lg:px-16">
      <CatHeader
        title={title}
        description={description}
        productCount={products.length}
        sortBy={sortBy}
        onSortChange={changeSort}
      />

      <div className="flex w-full flex-col gap-5 border-t border-gray-200 pt-5 lg:flex-row lg:gap-8 lg:pt-8">
        <aside className="w-full shrink-0 lg:w-64">
          <details className="rounded-lg border border-gray-200 bg-white p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-bold uppercase">
              Filters
            </summary>
            <div className="pt-5">
              <Filters />
            </div>
          </details>
          <div className="hidden lg:block">
            <Filters />
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col items-center justify-center gap-6">
            <ClubKitsProduct products={pageProducts} />
            {pageCount > 1 && (
              <Pagination
                currentPage={currentPage}
                pageCount={pageCount}
                onPageChange={changePage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCatalog;
