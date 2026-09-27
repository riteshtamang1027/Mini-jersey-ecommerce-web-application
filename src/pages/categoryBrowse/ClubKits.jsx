import CatHeader from "./CatHeader";
import ClubKitsProduct from "./ClubKitsProduct";
import Filters from "./Filters";
import Pagination from "./Pagination";

export default function ClubKits() {
  return (
    <div className="mx-auto mt-6 w-full max-w-[1440px] space-y-6 px-4 sm:mt-8 sm:space-y-8 sm:px-8 lg:px-16">
      <CatHeader />

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
          <div className="flex flex-col items-center justify-center gap-4">
            <ClubKitsProduct />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
