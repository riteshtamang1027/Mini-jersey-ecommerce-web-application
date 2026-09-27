export default function CatHeader() {
  return (
      <section className="flex flex-col gap-5 font-archivo sm:flex-row sm:items-end sm:justify-between">
        <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
            EUROPEAN CLUB CHAMPIONS KITS
          </h2>
          <p className="text-sm text-muted-text sm:text-base">
            Showing 8 performance engineered club jerseys
          </p>
          <p className="text-sm text-muted-text font-semibold">
            ACTIVE FILTERS:
          </p>
        </div>
        <label className="flex w-max max-w-full items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 sm:px-4">
          <span className="text-muted-text text-sm">SORT BY:</span>{" "}
          <select aria-label="Sort products" className="min-w-0 bg-transparent text-sm">
            <option value="POPULARITY" className="text-sm">
              POPULARITY
            </option>
          </select>
        </label>
      </section>
  );
}
