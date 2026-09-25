export default function CatHeader() {
  return (
    <main className=" px-16 mt-8">
      <section className="font-archivo flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold scale-y-120">
            EUROPEAN CLUB CHAMPIONS KITS
          </h2>
          <p className="text-base text-muted-text">
            Showing 12 performance engineered vapor-match jerseys
          </p>
          <p className="text-sm text-muted-text font-semibold">
            ACTIVE FILTERS:
          </p>
        </div>
        <div className="px-4 py-1 flex gap-2 items-center bg-gray-100 border border-gray-300 rounded-lg">
          <span className="text-muted-text text-sm">SORT BY:</span>{" "}
          <select className="text-sm">
            <option value="POPULARITY" className="text-sm">
              POPULARITY
            </option>
          </select>
        </div>
      </section>
    </main>
  );
}
