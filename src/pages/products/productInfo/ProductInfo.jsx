import { useState } from "react";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import ProductActions from "./ProductActions";
import { useCart } from "../../../features/cart/useCart.js";

function ProductInfo({ product, image }) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("XL");
  const [quantity, setQuantity] = useState(1);
  const [customizationOpen, setCustomizationOpen] = useState(false);
  const [printName, setPrintName] = useState("");
  const [printNumber, setPrintNumber] = useState("");

  const increaseQuantity = () => {
    setQuantity((value) => value + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((value) => Math.max(1, value - 1));
  };

  const addSelectedItem = () => {
    const personalization = {
      name: printName.trim().toUpperCase(),
      number: printNumber.trim(),
    };
    const hasPersonalization = Boolean(personalization.name || personalization.number);
    const variantId = [
      product.id,
      product.colors[selectedColor].name,
      selectedSize,
      hasPersonalization ? personalization.name : "",
      hasPersonalization ? personalization.number : "",
    ]
      .filter(Boolean)
      .join("-");

    addItem(
      {
        id: variantId,
        productId: product.id,
        name: product.name,
        season: product.season,
        price: product.price,
        image,
        color: product.colors[selectedColor].name,
        size: selectedSize,
        ...(hasPersonalization && { personalization }),
      },
      quantity
    );
  };

  return (
    <div className="flex min-w-0 flex-col justify-center">

      {/* Category */}
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rotate-45 bg-secondary" />

        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-text">
          {product.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-black uppercase leading-[0.9] tracking-tight min-[380px]:text-4xl sm:text-5xl">
        {product.name}
        <br />

        <span className="text-muted-text">
          {product.season}
        </span>
      </h1>

      {/* Price */}
      <div className="mt-5 flex items-center gap-3">
        <span className="text-2xl font-black text-secondary">
          ${product.price}.00
        </span>

        <span className="rounded bg-surface-raised px-2 py-1 text-[8px] font-bold uppercase">
          Demo listing
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 max-w-md text-xs leading-5 text-muted-text">
        {product.description}
      </p>

      <div className="my-5 h-px bg-border" />

      {/* Color */}
      <ColorSelector
        colors={product.colors}
        selectedColor={selectedColor}
        onChange={setSelectedColor}
      />

      {/* Size */}
      <div className="mt-5">
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          onChange={setSelectedSize}
        />
      </div>

      {/* Actions */}
      <div className="mt-5">
        <ProductActions
          quantity={quantity}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onAddToBag={addSelectedItem}
          customizationOpen={customizationOpen}
          onToggleCustomization={() => setCustomizationOpen((open) => !open)}
          printName={printName}
          printNumber={printNumber}
          onPrintNameChange={setPrintName}
          onPrintNumberChange={setPrintNumber}
        />
      </div>

      {/* Small information */}
      <div className="mt-5 grid grid-cols-3 border-t border-border pt-4">

        <div>
          <p className="text-[8px] font-black uppercase">Shipping</p>
          <p className="mt-1 text-[10px] text-muted-text">Not connected</p>
        </div>

        <div className="border-x border-border px-3">
          <p className="text-[8px] font-black uppercase">Returns</p>
          <p className="mt-1 text-[10px] text-muted-text">Demo only</p>
        </div>

        <div className="pl-3">
          <p className="text-[8px] font-black uppercase">Product data</p>
          <p className="mt-1 text-[10px] text-muted-text">Sample listing</p>
        </div>

      </div>
    </div>
  );
}

export default ProductInfo;
