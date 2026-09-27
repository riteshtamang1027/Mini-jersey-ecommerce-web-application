import { ShoppingBag, SlidersHorizontal } from "lucide-react";
import QuantitySelector from "./QuantitySelector";

function ProductActions({
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="space-y-2">

      <div className="grid grid-cols-[90px_1fr] gap-2">

        <QuantitySelector
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />

        <button className="flex items-center justify-center gap-2 rounded bg-[#b8ff00] text-[10px] font-black uppercase hover:bg-[#a9eb00]">
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
