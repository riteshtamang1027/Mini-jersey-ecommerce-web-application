import { ShoppingBag, SlidersHorizontal } from "lucide-react";
import QuantitySelector from "./QuantitySelector";

function ProductActions({
  quantity,
  onIncrease,
  onDecrease,
  onAddToBag,
  customizationOpen,
  onToggleCustomization,
  printName,
  printNumber,
  onPrintNameChange,
  onPrintNumberChange,
}) {
  return (
    <div className="space-y-2">

      <div className="grid grid-cols-[minmax(72px,90px)_minmax(0,1fr)] gap-2">

        <QuantitySelector
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />

        <button
          type="button"
          onClick={onAddToBag}
          className="flex min-w-0 items-center justify-center gap-2 rounded bg-secondary px-2 text-[9px] font-black uppercase text-white hover:bg-secondary/90 sm:text-[10px]"
        >
          <ShoppingBag size={14} />
          Add to Bag
        </button>

      </div>

      <button
        type="button"
        aria-expanded={customizationOpen}
        onClick={onToggleCustomization}
        className="flex h-10 w-full items-center justify-center gap-2 rounded border border-black text-[10px] font-black uppercase hover:bg-black hover:text-white"
      >
        <SlidersHorizontal size={13} />
        {customizationOpen ? "Close Jersey Customizer" : "Add Name & Number"}
      </button>

      {customizationOpen && (
        <div className="grid grid-cols-2 gap-3 rounded border border-gray-200 bg-gray-50 p-3">
          <label className="text-[9px] font-bold uppercase tracking-wide">
            Back name
            <input
              value={printName}
              onChange={(event) => onPrintNameChange(event.target.value.slice(0, 12))}
              className="mt-1 h-9 w-full rounded border border-gray-300 bg-white px-2 text-xs font-normal uppercase"
              aria-label="Name to print on jersey"
              placeholder="e.g. RIVERA"
            />
          </label>
          <label className="text-[9px] font-bold uppercase tracking-wide">
            Number
            <input
              type="number"
              min="0"
              max="99"
              value={printNumber}
              onChange={(event) => {
                const nextValue = event.target.value;
                if (
                  nextValue === "" ||
                  (Number.isInteger(Number(nextValue)) &&
                    Number(nextValue) >= 0 &&
                    Number(nextValue) <= 99)
                ) {
                  onPrintNumberChange(nextValue);
                }
              }}
              className="mt-1 h-9 w-full rounded border border-gray-300 bg-white px-2 text-xs font-normal"
              aria-label="Number to print on jersey"
              placeholder="10"
              inputMode="numeric"
            />
          </label>
          <p className="col-span-2 text-[9px] leading-4 text-gray-500">
            Personalization is saved with your cart item in this demo. No extra charge.
          </p>
        </div>
      )}

    </div>
  );
}

export default ProductActions;
