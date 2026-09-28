export default function CatHeader({
  title,
  description,
  productCount,
  sortBy,
  onSortChange,
}) {
  return (
      <section className="flex flex-col gap-5 font-archivo sm:flex-row sm:items-end sm:justify-between">
        <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
          <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">
            {title}
          </h1>
          <p className="text-sm text-muted-text sm:text-base">
            {description} Showing {productCount}{" "}
            {productCount === 1 ? "jersey" : "jerseys"}.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-text">
            Browse by popularity, trending, latest drops, price, or name
          </p>
        </div>
        <label className="flex w-full items-center justify-between gap-3 rounded-lg border border-border bg-surface px-3 py-2 sm:w-auto sm:justify-start sm:px-4">
          <span className="text-xs font-semibold text-muted-text sm:text-sm">
            SORT BY
          </span>
          <select
            aria-label="Sort products"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="min-w-0 flex-1 bg-transparent text-xs font-semibold sm:flex-none sm:text-sm"
          >
            <option value="featured">FEATURED</option>
            <option value="popularity">POPULARITY</option>
            <option value="trending">TRENDING</option>
            <option value="newest">NEW DROPS</option>
            <option value="price-asc">PRICE: LOW TO HIGH</option>
            <option value="price-desc">PRICE: HIGH TO LOW</option>
            <option value="name-asc">NAME: A TO Z</option>
          </select>
        </label>
      </section>
  );
}
