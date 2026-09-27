import { Minus, Plus } from "lucide-react";

function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="flex h-10 items-center justify-between rounded border border-[#d7dcd7] bg-white px-2.5">
      <button onClick={onDecrease}>
        <Minus size={13} />
      </button>

      <span className="text-xs font-black">
        {quantity}
      </span>

      <button onClick={onIncrease}>
        <Plus size={13} />
      </button>
    </div>
  );
}

export default QuantitySelector;
