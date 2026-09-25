import CatHeader from "./CatHeader";
import ClubKitsProduct from "./ClubKitsProduct";
import Filters from "./Filters";

export default function ClubKits() {
  return (
    <div className="mt-8 space-y-8 px-16">
      <CatHeader />

      <div className="flex w-full gap-8 border-t border-gray-200 pt-8 justify-between">
        {/* Filter - only takes the width it needs */}
        <aside className="w-max shrink-0">
          <Filters />
        </aside>

        {/* Products - takes remaining width */}
        <main className="min-w-0 flex-1 ">
          <ClubKitsProduct />
        </main>
      </div>
    </div>
  );
}
