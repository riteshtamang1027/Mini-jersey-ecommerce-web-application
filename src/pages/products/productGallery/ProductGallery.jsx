import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProductGallery({ images, tag }) {
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-4">
      <div className="order-2 grid grid-cols-4 gap-2 sm:order-1 sm:grid-cols-1 sm:content-start">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Show ${image.alt}`}
            aria-pressed={activeImage === index}
            onClick={() => setActiveImage(index)}
            className={`
              aspect-square w-full overflow-hidden rounded-md border bg-white
              ${
                activeImage === index
                  ? "border-secondary"
                  : "border-gray-300"
              }
            `}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="relative order-1 aspect-square min-w-0 overflow-hidden rounded-lg border border-[#dfe3df] bg-white sm:order-2">
        <span className="absolute left-4 top-4 z-10 bg-secondary px-2 py-1 text-[9px] font-black uppercase text-white">
          {tag}
        </span>

        <img
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          className="h-full w-full object-cover"
        />

        <button
          type="button"
          aria-label="Show previous product image"
          onClick={previousImage}
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
        >
          <ChevronLeft size={15} />
        </button>

        <button
          type="button"
          aria-label="Show next product image"
          onClick={nextImage}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}

export default ProductGallery;
