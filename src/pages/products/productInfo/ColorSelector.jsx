function ColorSelector({
  colors,
  selectedColor,
  onChange,
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[9px] font-black uppercase tracking-wider">
          Colorway
        </span>

        <span className="text-[11px] text-muted-text">
          {colors[selectedColor].name}
        </span>
      </div>

      <div className="flex gap-2">
        {colors.map((color, index) => (
          <button
            key={color.name}
            onClick={() => onChange(index)}
            className={`
              flex h-7 w-7 items-center justify-center rounded-full border
              ${
                selectedColor === index
                  ? "border-secondary"
                  : "border-transparent"
              }
            `}
          >
            <span
              className="h-5 w-5 rounded-full border border-black/10"
              style={{
                backgroundColor: color.value,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
