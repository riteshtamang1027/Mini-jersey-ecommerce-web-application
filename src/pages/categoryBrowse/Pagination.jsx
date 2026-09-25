import { ChevronLeft, ChevronRight } from "lucide-react";

const pages = [1, 2, 3, "...", 8];

export default function Pagination() {
  return (
    <nav className="flex items-center justify-center gap-4 ">
      <button
        aria-label="Previous page"
        className="grid  place-items-center rounded-md
          border border-gray-300 p-2 cursor-pointer"
      >
        <ChevronLeft size={22} />
      </button>

      {pages.map((page, index) => {
        const active = page === 1;

        return (
          <button
            key={index}
            disabled={page === "..."}
            className={[
              "flex items-center justify-center rounded-md",
              "border border-gray-200 w-10 h-10",
              "text-lg font-semibold place-items-center cursor-pointer ",
              active
                ? "border-secondary bg-secondary text-white"
                : "  bg-gray-100",
              page === "..." && "cursor-default",
            ].join(" ")}
          >
            {page}
          </button>
        );
      })}

      <button
        aria-label="Next page"
        className="grid  place-items-center rounded-md
          border  text-secondary p-2 cursor-pointer"
      >
        <ChevronRight size={22} />
      </button>
    </nav>
  );
}
