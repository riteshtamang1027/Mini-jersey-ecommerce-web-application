import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, pageCount, onPageChange }) {
  return (
    <nav aria-label="Pagination" className="flex w-full flex-wrap items-center justify-center gap-1.5 sm:gap-4">
      <button
        type="button"
        aria-label="Previous page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="grid place-items-center rounded-md border border-gray-300 p-1.5 sm:p-2"
      >
        <ChevronLeft size={22} />
      </button>

      {Array.from({ length: pageCount }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            onClick={() => onPageChange(page)}
            className={[
              "flex items-center justify-center rounded-md",
              "h-8 w-8 border border-gray-200 sm:h-10 sm:w-10",
              "place-items-center text-sm font-semibold sm:text-lg",
              currentPage === page
                ? "border-secondary bg-secondary text-white"
                : "  bg-gray-100",
            ].join(" ")}
          >
            {page}
          </button>
        )
      )}

      <button
        type="button"
        aria-label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
        className="grid place-items-center rounded-md border p-1.5 text-secondary sm:p-2"
      >
        <ChevronRight size={22} />
      </button>
    </nav>
  );
}
