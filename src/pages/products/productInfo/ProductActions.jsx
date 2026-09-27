import { ShoppingBag, SlidersHorizontal } from "lucide-react";
import QuantitySelector from "./QuantitySelector";

function ProductActions({
  quantity,
  onIncrease,
  onDecrease,
  onAddToBag,
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

      <button className="flex h-10 w-full items-center justify-center gap-2 rounded border border-black text-[10px] font-black uppercase hover:bg-black hover:text-white">
        <SlidersHorizontal size={13} />
        Customize This Jersey
      </button>

    </div>
  );
}

export default ProductActions;
