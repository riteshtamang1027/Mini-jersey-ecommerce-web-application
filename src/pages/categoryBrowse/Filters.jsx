import { useState } from "react";
import { ChevronUp } from "lucide-react";

const filters = [
  {
    title: "League",
    options: [
      "English Premier League",
      "Italian Serie A",
      "German Bundesliga",
      "Spanish La Liga",
      "MLS",
      "International Teams",
    ],
  },
  {
    title: "Jersey Type",
    options: [
      "Vapor Elite Match Jersey",
      "Stadium Home Kit",
      "Away Kit",
      "Vapor Retro Collared",
      "Custom Creator Base",
    ],
  },
  {
    title: "Size Advisor",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    title: "Price Point",
    options: ["Under $75", "$75 - $110", "$110 - $150", "$150+"],
  },
];

export default function Filters() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleChange = (filterTitle, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [filterTitle]: option,
    }));
  };

  return (
    <div className="w-max font-archivo flex  flex-col gap-8">
      {filters.map((filter) => (
        <div key={filter.title} className="border-b border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="font-bold uppercase tracking-tight">
              {filter.title}
            </h2>

            <ChevronUp size={14} strokeWidth={3} className="text-muted-text" />
          </div>

          {/* Options */}
          <div className="flex flex-col gap-2 py-4">
            {filter.options.map((option) => {
              const isSelected = selectedOptions[filter.title] === option;

              return (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="checkbox"
                    name={filter.title}
                    value={option}
                    checked={isSelected}
                    onChange={() => handleChange(filter.title, option)}
                    className="h-3 w-3"
                  />

                  <span className="text-base text-muted-text">{option}</span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
