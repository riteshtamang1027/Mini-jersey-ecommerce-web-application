function SizeSelector({
  sizes,
  selectedSize,
  onChange,
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[9px] font-black uppercase tracking-wider">
          Select Size
        </span>

        <button className="text-[9px] font-black uppercase text-secondary">
          Size Guide
        </button>
      </div>

      <div className="grid grid-cols-6 gap-1.5">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onChange(size)}
            className={`
              h-9 rounded text-[10px] font-black
              ${
                selectedSize === size
                  ? "bg-secondary text-white"
                  : "bg-[#e9ece8] text-gray-700 hover:bg-[#dfe3df]"
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
