import { useState } from "react";
import { useSearchParams } from "react-router";
import CatHeader from "./CatHeader";
import ClubKitsProduct from "./ClubKitsProduct";
import Filters from "./Filters";
import Pagination from "./Pagination";

const PRODUCTS_PER_PAGE = 6;
const validSorts = [
  "featured",
  "popularity",
  "trending",
  "newest",
  "price-asc",
  "price-desc",
  "name-asc",
];

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
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search")?.trim() ?? "";
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSearchTerm, setPageSearchTerm] = useState(searchTerm);
  const visibleCurrentPage = pageSearchTerm === searchTerm ? currentPage : 1;
  const sortParam = searchParams.get("sort");
  const sortBy = validSorts.includes(sortParam) ? sortParam : "featured";
  const [selectedFilters, setSelectedFilters] = useState(() => {
    const jerseyType = searchParams.get("jerseyType");
    return jerseyType ? { jerseyType: [jerseyType] } : {};
  });
  const filteredProducts = products.filter((product) =>
    (!searchTerm ||
      [product.name, product.category, product.season, product.league, product.jerseyType]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())) &&
    Object.entries(selectedFilters).every(([group, selectedValues]) => {
      if (selectedValues.length === 0) return true;

      if (group === "price") {
        return selectedValues.some((range) => {
          if (range === "under-75") return product.price < 75;
          if (range === "75-110") return product.price >= 75 && product.price < 110;
          if (range === "110-150") return product.price >= 110 && product.price <= 150;
          if (range === "150-plus") return product.price > 150;
          return false;
        });
      }

      if (group === "sizes") {
        return selectedValues.some((size) => product.sizes.includes(size));
      }

      return selectedValues.includes(product[group]);
    })
  );
  const sortedProducts = sortProducts(filteredProducts, sortBy);
  const pageCount = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const visiblePage = Math.min(visibleCurrentPage, Math.max(1, pageCount));
  const pageProducts = sortedProducts.slice(
    (visiblePage - 1) * PRODUCTS_PER_PAGE,
    visiblePage * PRODUCTS_PER_PAGE
  );

  const changeSort = (nextSort) => {
    setCurrentPage(1);
    const nextParams = new URLSearchParams(searchParams);
    if (nextSort === "featured") nextParams.delete("sort");
    else nextParams.set("sort", nextSort);
    setSearchParams(nextParams, { replace: true });
  };

  const changeFilter = (group, value) => {
    setSelectedFilters((currentFilters) => {
      const currentValues = currentFilters[group] ?? [];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((selectedValue) => selectedValue !== value)
        : [...currentValues, value];

      return { ...currentFilters, [group]: nextValues };
    });
    setCurrentPage(1);
    setPageSearchTerm(searchTerm);
    if (group === "jerseyType" && searchParams.get("jerseyType") === value) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete("jerseyType");
      setSearchParams(nextParams, { replace: true });
    }
  };

  const activeFilters = Object.entries(selectedFilters).flatMap(
    ([group, values]) => values.map((value) => ({ group, value }))
  );
  const hasActiveFilters = activeFilters.length > 0 || Boolean(searchTerm);

  const clearFilters = () => {
    setSelectedFilters({});
    setCurrentPage(1);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("search");
    nextParams.delete("jerseyType");
    setSearchParams(nextParams, { replace: true });
  };

  const changePage = (page) => {
    setCurrentPage(page);
    setPageSearchTerm(searchTerm);
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
        productCount={filteredProducts.length}
        sortBy={sortBy}
        onSortChange={changeSort}
      />

      <div className="flex w-full flex-col gap-5 border-t border-gray-200 pt-5 lg:flex-row lg:gap-8 lg:pt-8">
        <aside className="w-full shrink-0 lg:w-64">
          <details className="rounded-lg border border-gray-200 bg-white p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-bold uppercase">
              Filters
              {hasActiveFilters && (
                <span className="ml-2 rounded-full bg-secondary px-2 py-0.5 text-xs text-white">
                  {activeFilters.length + Number(Boolean(searchTerm))}
                </span>
              )}
            </summary>
            <div className="pt-5">
              <Filters
                products={products}
                selectedFilters={selectedFilters}
                onFilterChange={changeFilter}
              />
            </div>
          </details>
          <div className="hidden lg:block">
            <Filters
              products={products}
              selectedFilters={selectedFilters}
              onFilterChange={changeFilter}
            />
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col items-center justify-center gap-6">
            {hasActiveFilters && (
              <section
                aria-label="Active filters"
                className="w-full rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="mr-1 text-xs font-bold uppercase tracking-wide">
                      Active filters
                    </h2>
                    {searchTerm && (
                      <button
                        type="button"
                        onClick={() => {
                          const nextParams = new URLSearchParams(searchParams);
                          nextParams.delete("search");
                          setSearchParams(nextParams, { replace: true });
                        }}
                        aria-label={`Remove search: ${searchTerm}`}
                        className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary hover:bg-secondary/20"
                      >
                        Search: {searchTerm} <span aria-hidden="true">×</span>
                      </button>
                    )}
                    {activeFilters.map(({ group, value }) => {
                      const groupTitle =
                        group === "jerseyType"
                          ? "Jersey Type"
                          : group === "sizes"
                            ? "Size"
                            : group === "price"
                              ? "Price"
                              : "League";
                      const label =
                        group === "price"
                          ? {
                              "under-75": "Under $75",
                              "75-110": "$75 - $110",
                              "110-150": "$110 - $150",
                              "150-plus": "$150+",
                            }[value]
                          : value;

                      return (
                        <button
                          key={`${group}-${value}`}
                          type="button"
                          onClick={() => changeFilter(group, value)}
                          aria-label={`Remove ${groupTitle}: ${label} filter`}
                          className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary hover:bg-secondary/20"
                        >
                          <span>{groupTitle}: {label}</span>
                          <span aria-hidden="true" className="text-sm">×</span>
                        </button>
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      clearFilters();
                    }}
                    className="text-xs font-bold uppercase text-muted-text underline underline-offset-2 hover:text-secondary"
                  >
                    Clear all
                  </button>
                </div>
                <p className="mt-3 text-xs text-muted-text" aria-live="polite">
                  Showing {filteredProducts.length} of {products.length}{" "}
                  {products.length === 1 ? "jersey" : "jerseys"}.
                </p>
              </section>
            )}

            {pageProducts.length > 0 ? (
              <ClubKitsProduct products={pageProducts} />
            ) : (
              <section className="w-full rounded-xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center">
                <h2 className="font-bold uppercase">No matching jerseys</h2>
                <p className="mt-2 text-sm text-muted-text">
                  Remove a filter or clear all filters to see more products.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    clearFilters();
                  }}
                  className="mt-5 rounded-md bg-secondary px-4 py-2.5 text-sm font-bold text-white hover:bg-secondary/90"
                >
                  Clear filters
                </button>
              </section>
            )}

            {pageCount > 1 && filteredProducts.length > 0 && (
              <Pagination
                currentPage={visiblePage}
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
