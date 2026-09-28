import { ChevronUp } from "lucide-react";
import { productFilterOptions } from "../../data/products.js";

const priceRanges = [
  { label: "Under $75", value: "under-75" },
  { label: "$75 - $110", value: "75-110" },
  { label: "$110 - $150", value: "110-150" },
  { label: "$150+", value: "150-plus" },
];

const filterGroups = [
  {
    key: "league",
    title: "League",
    options: productFilterOptions.leagues.map((league) => ({
      label: league,
      value: league,
    })),
  },
  {
    key: "jerseyType",
    title: "Jersey Type",
    options: productFilterOptions.jerseyTypes.map((type) => ({
      label: type,
      value: type,
    })),
  },
  {
    key: "sizes",
    title: "Size Advisor",
    options: productFilterOptions.sizes.map((size) => ({
      label: size,
      value: size,
    })),
  },
  {
    key: "price",
    title: "Price Point",
    options: priceRanges,
  },
];

function Filters({ products, selectedFilters, onFilterChange }) {
  const availableOptions = {
    league: new Set(products.map((product) => product.league)),
    jerseyType: new Set(products.map((product) => product.jerseyType)),
    sizes: new Set(products.flatMap((product) => product.sizes)),
    price: new Set(priceRanges.map((range) => range.value)),
  };

  return (
    <div className="flex w-full flex-col gap-6 font-archivo lg:gap-8">
      {filterGroups.map((filter) => {
        const options = filter.options.filter((option) =>
          availableOptions[filter.key].has(option.value)
        );

        if (options.length === 0) return null;

        return (
          <fieldset key={filter.key} className="border-b border-border">
            <legend className="flex w-full items-center justify-between font-bold uppercase tracking-tight">
              {filter.title}
              <ChevronUp
                aria-hidden="true"
                size={14}
                strokeWidth={3}
                className="text-muted-text"
              />
            </legend>

            <div className="flex flex-col gap-2 py-4">
              {options.map((option) => {
                const isSelected =
                  selectedFilters[filter.key]?.includes(option.value) ?? false;

                return (
                  <label
                    key={option.value}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      name={filter.key}
                      value={option.value}
                      checked={isSelected}
                      onChange={() =>
                        onFilterChange(filter.key, option.value)
                      }
                      className="h-4 w-4 accent-secondary"
                    />
                    <span className="text-sm leading-5 text-muted-text">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}

export default Filters;
